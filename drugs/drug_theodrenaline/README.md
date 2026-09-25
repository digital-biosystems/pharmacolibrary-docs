<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;theodrenaline&quot;}]"></div>

# theodrenaline

- **generic name:** theodrenaline
- **ATC codes:** `C01CA23`
- **DrugBank:** [DB12927](https://go.drugbank.com/drugs/DB12927)
- **groups:** investigational

## About

**Description.** Theodrenaline is under investigation in clinical trial NCT01311414 (Effect of Cafedrine/Theodrenaline and Urapidil on Cerebral Oxygenation).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 21:39 | 2:13 | 0/0/0 | 1/1/0 | 0/0/0 | 44,692/1,055 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kloth_2017](drugs/drug_theodrenaline/pd_Kloth_2017_arterial_tension.md) | Kloth B et al., AkrinorTM, a Cafedrine/ Theodrenaline M…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00272](https://doi.org/10.3389/fphar.2017.00272) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kloth_2017](drugs/drug_theodrenaline/pd_Kloth_2017_force_of_contraction.md) | Kloth B et al., AkrinorTM, a Cafedrine/ Theodrenaline M…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00272](https://doi.org/10.3389/fphar.2017.00272) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Dings_2026](drugs/drug_theodrenaline/pd_Dings_2026_Heart_rate.md) | Dings C et al., Pharmacometric Analysis of Cafedrine/Th…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030296](https://doi.org/10.3390/pharmaceutics18030296) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Dings_2026](drugs/drug_theodrenaline/pd_Dings_2026_Mean_arterial_pressure.md) | Dings C et al., Pharmacometric Analysis of Cafedrine/Th…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030296](https://doi.org/10.3390/pharmaceutics18030296) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Dings_2026](drugs/drug_theodrenaline/pd_Dings_2026_Systolic_blood_pressure.md) | Dings C et al., Pharmacometric Analysis of Cafedrine/Th…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030296](https://doi.org/10.3390/pharmaceutics18030296) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dings_2024.pdf` | Dings C et al., Population kinetic/pharmacodynamic mode…, British journal of clinical… (2024) | popPK | 9 | [10.1111/bcp.16083](https://doi.org/10.1111/bcp.16083) | [38720661](https://pubmed.ncbi.nlm.nih.gov/38720661) | The paper describes a population PK/PD model for theodrenaline (as part of a combination) but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-09-09T21:38:42.370171+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dings_2024 | relevant | 9 | 0 | The paper describes a population PK/PD model for theodrenaline (as part of a combination) but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Dings_2026 | irrelevant | 2 | 2 | The study explicitly states that no pharmacokinetic samples were obtained and the kinetic parameters (CL, V) are from a hypothetical K/PD model with V fixed to 1 L, not true disposition parameters for theodrenaline. |
| popPK | Heller_2015 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (time to MAP increase) rather than pharmacokinetic parameters (CL, V, ka) for theodrenaline. |
| popPK | Kloth_2017 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic study measuring contractile force and tension, not a pharmacokinetic study reporting disposition parameters like clearance or volume for theodrenaline. |
| popPK | Simon_2019 | irrelevant | 0 | 0 | Theodrenaline is mentioned only as a vasopressor used for hemodynamic support, not as the subject drug for pharmacokinetic analysis. |
| PD | Simon_2019 | not_relevant | 0 | 0 | The paper is a protocol for a PK study in obese patients and does not report any pharmacodynamic (PD) data, exposure-response relationships, or numeric PD parameters for theodrenaline or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
