<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;medifoxamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Medifoxamine_Saleh1990_reference&quot;,&quot;label&quot;:&quot;Saleh_1990_reference&quot;,&quot;href&quot;:&quot;drugs/drug_medifoxamine/Medifoxamine_Saleh1990_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# medifoxamine

- **generic name:** medifoxamine
- **ATC codes:** `N06AX13`
- **DrugBank:** [DB13219](https://go.drugbank.com/drugs/DB13219)
- **groups:** approved

## About

**Description.** Medifoxamine was marketed as an atypical antidepressant, with anxiolyitc properties in France, Spain, and Morrocco in the 1990s but was later withdrawn from the market due to it causing cases of hepatotoxicity [L5461, A174976].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 00:03 | 1:53 | 0/1/0 | 0/0/0 | 0/0/0 | 11,129/2,477 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Saleh_1990_reference](drugs/drug_medifoxamine/Medifoxamine_Saleh1990_reference.md) | Saleh S et al., Tolerability and kinetics of intravenou…, International clinical psyc… (1990) | [10.1097/00004850-199004000-00003](https://doi.org/10.1097/00004850-199004000-00003) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Saleh_1990.pdf` | Saleh S et al., Tolerability and kinetics of intravenou…, International clinical psyc… (1990) | popPK | 10 | [10.1097/00004850-199004000-00003](https://doi.org/10.1097/00004850-199004000-00003) | [2380545](https://pubmed.ncbi.nlm.nih.gov/2380545) | The paper reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for medifoxamine in healthy volunteers, and the numeric values are explicitly present in the text. |

<sub>queue written 2026-09-24T00:02:06.341213+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Dumortier_2002 | not_relevant | 0 | 0 | The paper is a clinical review of hepatic tolerance for atypical antipsychotics and mentions medifoxamine only as a withdrawn drug; it contains no PK/PD data, concentration-effect analysis, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-24 00:02 UTC</sub>
