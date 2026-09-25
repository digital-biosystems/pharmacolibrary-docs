<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;voxelotor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Voxelotor_Savic2022_reference&quot;,&quot;label&quot;:&quot;Savic_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_voxelotor/Voxelotor_Savic2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# voxelotor

- **generic name:** voxelotor
- **ATC codes:** `B06AX03`
- **DrugBank:** [DB14975](https://go.drugbank.com/drugs/DB14975)
- **groups:** approved, investigational

## About

**Description.** Voxelotor is a novel hemoglobin S polymerization inhibitor for the treatment of sickle cell disease. This is a genetically inherited condition most prevalent in the Middle East, Africa, and certain parts of India. Sickle cell disease can lead to excruciating pain, stroke, infection, and various other complications arising from the blockage of blood vessels.[T734]

Voxelotor was granted accelerated FDA approval on November 25 2019, as it is likely to be a promising treatment for the 100,000 individuals in the U.S. suffering from the disease, in addition to 20 million others worldwide.[L10403] It was developed by Global Blood Therapeutics, Inc.[L10403] and is unique from other drugs used to treat sickle cell anemia, such as [hydroxyurea], [L-glutamine], and [crizanlizumab][A188135,A188138] due to its novel mechanism of action. The EMA approved the use of voxelotor for the treatment of hemolytic anemia associated with sickle cell disease in February 2022.[L41419,L41424]

**Indication.** In the US, voxelotor is indicated to treat sickle cell disease in both adult and pediatric patients aged 4 years and older.[L10397] In Europe, it is indicated for the treatment of hemolytic anemia due to sickle cell disease (SCD) in adults and pediatric patients 12 years of age and older as monotherapy or in combination with [hydroxyurea].[L41419]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 13:59 | 4:53 | 1/0/0 | 1/0/0 | 0/0/0 | 108,001/7,380 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Savic_2022_reference](drugs/drug_voxelotor/Voxelotor_Savic2022_reference.md) | Savic RM et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Green_2022](drugs/drug_voxelotor/pd_Green_2022_alanine_aminotransferase.md) | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Green_2022](drugs/drug_voxelotor/pd_Green_2022_hemoglobin.md) | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Green_2022](drugs/drug_voxelotor/pd_Green_2022_white_blood_cell_count.md) | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=voxelotor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>“…ax&lt;/sub&gt; of 2 hours.[A188126,L10406] T&lt;sub&gt;max&lt;/sub&gt; in the red blood cells ranges from 17…”</sub> | prose |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…About 62.6% of the oral dose is found in the feces, of which 33.3% is an unchanged drug. A…”</sub> | prose |
| excretion | kidney | <sub>“…an unchanged drug. About 35.5% of the dose is recovered in urine, with only 0.08% as the u…”</sub> | prose |

<sub>Actors without a tissue in the table: HBA1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Egesa_2022 | not_relevant | 0 | 0 | The paper is a general review of sickle cell disease epidemiology and management, mentioning voxelotor only as an approved therapy without reporting any pharmacogenomic data or PK/PD parameters. |
| popPK | Green_2022 | irrelevant | 2 | 1 | The paper is an exposure-response analysis that uses PK parameters derived from a separate population PK study (Savic et al. 2021) rather than reporting original quantitative disposition parameters (CL, V, Q, ka) for voxelotor. |
| popPK | Rivenbark_2026 | irrelevant | 0 | 0 | The paper is a claims-based epidemiological study analyzing prescription rates and does not report any pharmacokinetic parameters for voxelotor. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 13:56 UTC</sub>
