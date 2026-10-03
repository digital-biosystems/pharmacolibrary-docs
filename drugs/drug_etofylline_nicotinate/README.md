<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;etofylline nicotinate&quot;}]"></div>

# etofylline nicotinate

- **generic name:** etofylline nicotinate
- **ATC codes:** `C04AD04`
- **DrugBank:** [DB13842](https://go.drugbank.com/drugs/DB13842) · **PubChem:** not captured
- **molar mass:** 329.316 g/mol (C15H15N5O4) — DrugBank
- **groups:** experimental

## About

**Description.** Etofylline nicotinate, a theophylline derivative, is a drug that causes vasodilation and relaxation of smooth muscle.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| etofylline | metabolite | 224.22 | C9H12N4O3 | PubChem | [1892](https://pubchem.ncbi.nlm.nih.gov/compound/1892) | Zuidema_1981 |
| etofylline_nicotinate | metabolite | 329.316 | C15H15N5O4 | DrugBank | — | Zuidema_1981 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 15:03 | 2:35 | 1/0/0 | 0/0/0 | 0/0/0 | 23,019/5,551 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.15). The first reading is what the record holds.">cross-check: disputed</span> | [Zuidema_1981_reference](drugs/drug_etofylline_nicotinate/EtofyllineNicotinate_Zuidema1981_reference.md) | model (no simulator) | 1-compartment, IV | 6 | Zuidema J et al., Pharmacokinetics of etofylline after in…, International journal of cl… (1981) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zuidema_1981.pdf` | Zuidema J et al., Pharmacokinetics of etofylline after in…, International journal of cl… (1981) | popPK | 10 | not captured | [7263108](https://pubmed.ncbi.nlm.nih.gov/7263108) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for etofylline, which is the active moiety of etofylline nicotinate, with all numeric values explicitly present in the text. |
| `Erking_1981.pdf` | Erking W et al., [Human pharmacokinetics of theophylline…, Arzneimittel-Forschung (1981) | popPK | 8 | not captured | [7194656](https://pubmed.ncbi.nlm.nih.gov/7194656) | The study reports quantitative pharmacokinetic parameters (half-life, bioavailability) for etofylline in humans, with values explicitly stated in the text. |

<sub>queue written 2026-09-28T15:01:53.850140+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fang_2019 | irrelevant | 0 | 0 | The study focuses on doxofylline, not etofylline_nicotinate, and etofylline is only mentioned as a metabolite in the analytical method. |
| popPK | Lücker_1980 | irrelevant | 2 | 2 | The study investigates etofylline clofibrate (a prodrug), not etofylline nicotinate, and reports parameters for the metabolite etofylline rather than the specific subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 15:02 UTC</sub>
