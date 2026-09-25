<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;phenprocoumon&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenprocoumon_Abduljalil2013_patients_on_steady_state_phenpr&quot;,&quot;label&quot;:&quot;Abduljalil_2013_patients on steady-state phenprocoumon&quot;,&quot;href&quot;:&quot;drugs/drug_phenprocoumon/Phenprocoumon_Abduljalil2013_patients_on_steady_state_phenpr.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# phenprocoumon

- **generic name:** phenprocoumon
- **ATC codes:** `B01AA04`
- **DrugBank:** [DB00946](https://go.drugbank.com/drugs/DB00946)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Coumarin derivative that acts as a long-acting oral anticoagulant.

**Indication.** Used for the prevention and treatment of thromboembolic disease including venous thrombosis, thromboembolism, and pulmonary embolism as well as for the prevention of ischemic stroke in patients with atrial fibrillation (AF).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 20:45 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 5,355/436 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Abduljalil_2013_patients on steady-state phenprocoumon](drugs/drug_phenprocoumon/Phenprocoumon_Abduljalil2013_patients_on_steady_state_phenpr.md) | Abduljalil K et al., Quantifying the effect of covariates on…, Clinical pharmacokinetics (2013) | [10.1007/s40262-013-0043-z](https://doi.org/10.1007/s40262-013-0043-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenprocoumon) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder/regulator, `ORM1` unknown | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: VKORC1 (inhibitor).</sub>

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
| `Abduljalil_2013.pdf` | Abduljalil K et al., Quantifying the effect of covariates on…, Clinical pharmacokinetics (2013) | popPK | 10 | [10.1007/s40262-013-0043-z](https://doi.org/10.1007/s40262-013-0043-z) | [23519598](https://pubmed.ncbi.nlm.nih.gov/23519598) | The paper is a population PK/PD study for phenprocoumon and reports specific numeric clearance fractions (mL/h) in the abstract, though other parameters like volume of distribution are not explicitly listed in the provided text. |
| `Sinn_1990.pdf` | Sinn D et al., [The treatment basis for anticoagulants…, Tierarztliche Praxis (1990) | popPK | 10 | not captured | [2264055](https://pubmed.ncbi.nlm.nih.gov/2264055) | The paper reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for phenprocoumon in horses, with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-06T05:17:07.751609+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-05 20:45 UTC</sub>
