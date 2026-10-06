<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;remoxipride&quot;}]"></div>

# remoxipride

- **generic name:** remoxipride
- **ATC codes:** `N05AL04`
- **DrugBank:** [DB00409](https://go.drugbank.com/drugs/DB00409) · **PubChem:** [CID 54477](https://pubchem.ncbi.nlm.nih.gov/compound/54477)
- **molar mass:** 371.269 g/mol (C16H23BrN2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Remoxipride is an antipsychotic of the benzamide class that was used to treat schizophrenia. It was later withdrawn from the market because of rare but serious blood disorders, including aplastic anaemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1169059](https://www.wikidata.org/wiki/Q1169059) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| remoxipride | parent | 371.269 | C16H23BrN2O3 | DrugBank | [54477](https://pubchem.ncbi.nlm.nih.gov/compound/54477) | Widerlöv_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:09 | 2:39 | 0/0/1 | 3/0/3 | 0/0/0 | 117,040/11,705 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Widerlöv_1989_reference](drugs/drug_remoxipride/Remoxipride_Widerlv1989_reference.md) | — | 1-compartment (no model) | 3 | Widerlöv E et al., Effect of urinary pH on the plasma and…, European journal of clinica… (1989) | [10.1007/BF00558500](https://doi.org/10.1007/BF00558500) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Taneja_2016_PRL_2](drugs/drug_remoxipride/pd_Taneja_2016_PRL_2.md) | prolactin ← remoxipride · delayed effect through transit (transduction) compartments | — | Taneja A et al., A comparison of two semi-mechanistic mo…, European journal of pharmac… (2016) | [10.1016/j.ejphar.2016.07.005](https://doi.org/10.1016/j.ejphar.2016.07.005) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Taneja_2016_2_Prl](drugs/drug_remoxipride/pd_Taneja_2016_2_Prl.md) | plasma prolactin biomarker turnover ← remoxipride | — | Taneja A et al., Summary data of potency and parameter i…, Data in brief (2016) | [10.1016/j.dib.2016.07.060](https://doi.org/10.1016/j.dib.2016.07.060) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Taneja_2016_2_Prl_2](drugs/drug_remoxipride/pd_Taneja_2016_2_Prl_2.md) | plasma prolactin biomarker turnover ← remoxipride | — | Taneja A et al., Summary data of potency and parameter i…, Data in brief (2016) | [10.1016/j.dib.2016.07.060](https://doi.org/10.1016/j.dib.2016.07.060) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2017_plasma_endogenous_metabolites_44_detected_18_potential_biomarkers](drugs/drug_remoxipride/pd_van_2017_plasma_endogenous_metabolites_44_detected_18_potent.md) | plasma endogenous metabolites (44 detected; 18 potential biomarkers) ← remoxipride · inhibition effect | — | van den Brink WJ et al., Multivariate pharmacokinetic/pharmacody…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.08.031](https://doi.org/10.1016/j.ejps.2017.08.031) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Movin-Osswald_1995_PRL](drugs/drug_remoxipride/pd_Movin_Osswald_1995_PRL.md) | prolactin (PRL) plasma levels biomarker turnover ← remoxipride | — | Movin-Osswald G et al., Prolactin release after remoxipride by…, The Journal of pharmacology… (1995) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span> | [Stevens_2012_PRL](drugs/drug_remoxipride/pd_Stevens_2012_PRL.md) | prolactin plasma concentration biomarker turnover ← remoxipride (free brain extracellular fluid) | — | Stevens J et al., Mechanism-based PK-PD model for the pro…, Journal of pharmacokinetics… (2012) | [10.1007/s10928-012-9262-4](https://doi.org/10.1007/s10928-012-9262-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Taneja_2016_PRL](drugs/drug_remoxipride/pd_Taneja_2016_PRL.md) | prolactin ← remoxipride · indirect response — drug inhibits the production of prolactin | — | Taneja A et al., A comparison of two semi-mechanistic mo…, European journal of pharmac… (2016) | [10.1016/j.ejphar.2016.07.005](https://doi.org/10.1016/j.ejphar.2016.07.005) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2017_2_ACTH](drugs/drug_remoxipride/pd_van_2017_2_ACTH.md) | plasma adrenocorticotrophic hormone ← remoxipride · stimulation effect | — | van den Brink WJ et al., Revealing the Neuroendocrine Response A…, The AAPS journal (2017) | [10.1208/s12248-016-0002-3](https://doi.org/10.1208/s12248-016-0002-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2017_2_PRL](drugs/drug_remoxipride/pd_van_2017_2_PRL.md) | plasma prolactin ← remoxipride · stimulation effect | — | van den Brink WJ et al., Revealing the Neuroendocrine Response A…, The AAPS journal (2017) | [10.1208/s12248-016-0002-3](https://doi.org/10.1208/s12248-016-0002-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=remoxipride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2D6` substrate, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DRD2 (target), DRD3 (target), DRD4 (target), HTR2A (other/unknown), SIGMAR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stevens_2011.pdf` | Stevens J et al., Systemic and direct nose-to-brain trans…, Drug metabolism and disposi… (2011) | popPK | 10 | [10.1124/dmd.111.040782](https://doi.org/10.1124/dmd.111.040782) | [21903866](https://pubmed.ncbi.nlm.nih.gov/21903866) | Population PK model of remoxipride in rats with quantitative bioavailability/absorption parameters, but most parameter values (CL, V, ka) appear only in the full paper/tables not included here; only AUC ratios and bioavailability percentages are in the abstract. |
| `Widerlöv_1989.pdf` | Widerlöv E et al., Effect of urinary pH on the plasma and…, European journal of clinica… (1989) | popPK | 10 | [10.1007/BF00558500](https://doi.org/10.1007/BF00558500) | [2574673](https://pubmed.ncbi.nlm.nih.gov/2574673) | Human crossover study reporting remoxipride half-life, plasma and renal clearance values directly in the abstract. |
| `Movin-Osswald_1995.pdf` | Movin-Osswald G et al., Prolactin release after remoxipride by…, The Journal of pharmacology… (1995) | popPK | 8 | not captured | [7636755](https://pubmed.ncbi.nlm.nih.gov/7636755) | A population/integrated PK-PD model of remoxipride itself in humans, but the evidence contains no numeric parameter values (likely in tables/figures not provided). |
| `Stevens_2012.pdf` | Stevens J et al., Mechanism-based PK-PD model for the pro…, Journal of pharmacokinetics… (2012) | popPK | 8 | [10.1007/s10928-012-9262-4](https://doi.org/10.1007/s10928-012-9262-4) | [22791078](https://pubmed.ncbi.nlm.nih.gov/22791078) | A PK model for remoxipride (brain ECF concentrations) is central, but no numeric parameter values appear in the evidence; they likely reside in figures/tables not provided. |

<sub>queue written 2026-10-06T17:06:56.182059+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ma_2010 | irrelevant | 3 | 2 | This is a PD (prolactin response) modeling study using remoxipride; PK parameters are not reported and any values are not present in the evidence. |
| popPK | Movin-Osswald_1995 | relevant | 8 | 2 | A population/integrated PK-PD model of remoxipride itself in humans, but the evidence contains no numeric parameter values (likely in tables/figures not provided). |
| popPK | Rinken_1999 | irrelevant | 0 | 0 | In vitro receptor binding study in rat striatal membranes; remoxipride is only an antagonist in a potency ranking, with no PK parameters. |
| popPK | Stevens_2011 | relevant | 10 | 4 | Population PK model of remoxipride in rats with quantitative bioavailability/absorption parameters, but most parameter values (CL, V, ka) appear only in the full paper/tables not included here; only AUC ratios and bioavailability percentages are in the abstract. |
| popPK | Stevens_2012 | relevant | 8 | 2 | A PK model for remoxipride (brain ECF concentrations) is central, but no numeric parameter values appear in the evidence; they likely reside in figures/tables not provided. |
| popPK | Taneja_2016 | relevant | 4 | 2 | Population PK-PD modeling of remoxipride in rats, but only PD parameters (EC50, KI) are given numerically; PK disposition values are not shown in the evidence. |
| popPK | van_2017 | irrelevant | 3 | 2 | PKPD modeling of endogenous metabolites in rats dosed with remoxipride; remoxipride PK parameters not reported and numeric values not present in evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:07 UTC</sub>
