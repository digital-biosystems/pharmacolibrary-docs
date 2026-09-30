<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;meldonium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Meldonium_Forsdahl2018_reference&quot;,&quot;label&quot;:&quot;Forsdahl_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_meldonium/Meldonium_Forsdahl2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# meldonium

- **generic name:** meldonium
- **ATC codes:** `C01EB22`
- **DrugBank:** [DB13723](https://go.drugbank.com/drugs/DB13723) · **PubChem:** not captured
- **molar mass:** 146.19 g/mol (C6H14N2O2) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 04:38 | 0:44 | 0/1/0 | 0/0/0 | 0/0/0 | 1,871/1,058 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Forsdahl_2018_reference](drugs/drug_meldonium/Meldonium_Forsdahl2018_reference.md) | — | 1-compartment (no model) | 0 | Forsdahl G et al., Urinary excretion studies of meldonium…, Journal of pharmaceutical a… (2018) | [10.1016/j.jpba.2018.08.053](https://doi.org/10.1016/j.jpba.2018.08.053) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Forsdahl_2018.pdf` | Forsdahl G et al., Urinary excretion studies of meldonium…, Journal of pharmaceutical a… (2018) | popPK | 9 | [10.1016/j.jpba.2018.08.053](https://doi.org/10.1016/j.jpba.2018.08.053) | [30189410](https://pubmed.ncbi.nlm.nih.gov/30189410) | The study reports a three-compartment model and specific half-life values (alpha, beta, gamma) for meldonium in humans, which are quantitative PK parameters present in the text. |
| `Knych_2017.pdf` | Knych HK et al., Pharmacokinetics and pharmacodynamics o…, Drug testing and analysis (2017) | popPK | 8 | [10.1002/dta.2214](https://doi.org/10.1002/dta.2214) | [28513092](https://pubmed.ncbi.nlm.nih.gov/28513092) | The study reports quantitative PK parameters (Cmax, t1/2) for meldonium in horses, but lacks specific values for clearance (CL) or volume of distribution (V) in the provided text. |

<sub>queue written 2026-09-30T04:38:18.458218+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Skotnikov_2015 | not_relevant | 0 | 0 | The paper is a clinical trial reporting qualitative safety and efficacy outcomes (e.g., delayed dyslipidemia, improved rheology) without any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 17:08 UTC</sub>
