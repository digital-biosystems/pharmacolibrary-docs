<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;nilotinib&quot;}]"></div>

# nilotinib

- **generic name:** nilotinib
- **ATC codes:** `L01EA03`
- **DrugBank:** [DB04868](https://go.drugbank.com/drugs/DB04868) · **PubChem:** [CID 644241](https://pubchem.ncbi.nlm.nih.gov/compound/644241)
- **molar mass:** 529.5158 g/mol (C28H22F3N7O) — DrugBank
- **groups:** approved, investigational

## About

Nilotinib is a BCR-ABL tyrosine kinase inhibitor used to treat certain leukemias, notably chronic myelogenous leukemia that is BCR-ABL positive. It is authorised in the European Union and is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412327](https://www.wikidata.org/wiki/Q412327) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nilotinib | parent | 529.516 | C28H22F3N7O | DrugBank | [644241](https://pubchem.ncbi.nlm.nih.gov/compound/644241) | Larson_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:18 | 5:59 | 0/1/0 | 6/0/0 | 0/0/0 | 154,001/31,342 | openai / gpt-6-luna | 7 | 1/6 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Larson_2012_reference](drugs/drug_nilotinib/Nilotinib_Larson2012_reference.md) | — | 1-compartment (no model) | 1 | Larson RA et al., Population pharmacokinetic and exposure…, European journal of clinica… (2012) | [10.1007/s00228-011-1200-7](https://doi.org/10.1007/s00228-011-1200-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [DCunha_2019_BCRP](drugs/drug_nilotinib/pd_DCunha_2019_BCRP.md) | BCRP-mediated afatinib efflux ← nilotinib · inhibition effect | — | D'Cunha RR et al., Nilotinib Alters the Efflux Transporter…, Journal of pharmaceutical s… (2019) | [10.1016/j.xphs.2019.05.028](https://doi.org/10.1016/j.xphs.2019.05.028) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [DCunha_2019_Bcrp1](drugs/drug_nilotinib/pd_DCunha_2019_Bcrp1.md) | Bcrp1-mediated afatinib efflux ← nilotinib · inhibition effect | — | D'Cunha RR et al., Nilotinib Alters the Efflux Transporter…, Journal of pharmaceutical s… (2019) | [10.1016/j.xphs.2019.05.028](https://doi.org/10.1016/j.xphs.2019.05.028) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [DCunha_2019_Pgp](drugs/drug_nilotinib/pd_DCunha_2019_Pgp.md) | Pgp-mediated afatinib efflux ← nilotinib · inhibition effect | — | D'Cunha RR et al., Nilotinib Alters the Efflux Transporter…, Journal of pharmaceutical s… (2019) | [10.1016/j.xphs.2019.05.028](https://doi.org/10.1016/j.xphs.2019.05.028) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Giles_2013_TTP](drugs/drug_nilotinib/pd_Giles_2013_TTP.md) | time to progression ← nilotinib · model not identified | — | Giles FJ et al., Nilotinib population pharmacokinetics a…, European journal of clinica… (2013) | [10.1007/s00228-012-1385-4](https://doi.org/10.1007/s00228-012-1385-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Giles_2013_all_grade_elevations_in_lipase_levels](drugs/drug_nilotinib/pd_Giles_2013_all_grade_elevations_in_lipase_levels.md) | all-grade elevations in lipase levels ← nilotinib · model not identified | — | Giles FJ et al., Nilotinib population pharmacokinetics a…, European journal of clinica… (2013) | [10.1007/s00228-012-1385-4](https://doi.org/10.1007/s00228-012-1385-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Giles_2013_all_grade_elevations_in_total_bilirubin_levels](drugs/drug_nilotinib/pd_Giles_2013_all_grade_elevations_in_total_bilirubin_levels.md) | all-grade elevations in total bilirubin levels ← nilotinib · model not identified | — | Giles FJ et al., Nilotinib population pharmacokinetics a…, European journal of clinica… (2013) | [10.1007/s00228-012-1385-4](https://doi.org/10.1007/s00228-012-1385-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Giles_2013_response_rates](drugs/drug_nilotinib/pd_Giles_2013_response_rates.md) | response rates ← nilotinib · model not identified | — | Giles FJ et al., Nilotinib population pharmacokinetics a…, European journal of clinica… (2013) | [10.1007/s00228-012-1385-4](https://doi.org/10.1007/s00228-012-1385-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Giles_2013_time_to_complete_cytogenetic_response](drugs/drug_nilotinib/pd_Giles_2013_time_to_complete_cytogenetic_response.md) | time to complete cytogenetic response ← nilotinib · model not identified | — | Giles FJ et al., Nilotinib population pharmacokinetics a…, European journal of clinica… (2013) | [10.1007/s00228-012-1385-4](https://doi.org/10.1007/s00228-012-1385-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Giles_2013_time_to_major_molecular_response](drugs/drug_nilotinib/pd_Giles_2013_time_to_major_molecular_response.md) | time to major molecular response ← nilotinib · model not identified | — | Giles FJ et al., Nilotinib population pharmacokinetics a…, European journal of clinica… (2013) | [10.1007/s00228-012-1385-4](https://doi.org/10.1007/s00228-012-1385-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Hoshino-Yoshino_2011_efficacy](drugs/drug_nilotinib/pd_Hoshino_Yoshino_2011_efficacy.md) | efficacy ← nilotinib · direct Emax (saturable) effect | — | Hoshino-Yoshino A et al., Bridging from preclinical to clinical s…, Drug metabolism and pharmac… (2011) | [10.2133/dmpk.DMPK-11-RG-043](https://doi.org/10.2133/dmpk.DMPK-11-RG-043) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ji_2009_CCNB2](drugs/drug_nilotinib/pd_Ji_2009_CCNB2.md) | CCNB2 ← nilotinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Larson_2012_QTcF_change](drugs/drug_nilotinib/pd_Larson_2012_QTcF_change.md) | QTcF change on electrocardiograms from baseline ← nilotinib · stimulation effect | — | Larson RA et al., Population pharmacokinetic and exposure…, European journal of clinica… (2012) | [10.1007/s00228-011-1200-7](https://doi.org/10.1007/s00228-011-1200-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xia_2020_TR4](drugs/drug_nilotinib/pd_Xia_2020_TR4.md) | TR4 transactivation activity ← nilotinib · inhibition effect | — | Xia L et al., Identification of Small-Molecule Regula…, ACS omega (2020) | [10.1021/acsomega.0c04623](https://doi.org/10.1021/acsomega.0c04623) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Larson_2012_MMR](drugs/drug_nilotinib/pd_Larson_2012_MMR.md) | major molecular response at 12 months ← nilotinib · categorical (graded) response model | — | Larson RA et al., Population pharmacokinetic and exposure…, European journal of clinica… (2012) | [10.1007/s00228-011-1200-7](https://doi.org/10.1007/s00228-011-1200-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Larson_2012_total_bilirubin_elevation](drugs/drug_nilotinib/pd_Larson_2012_total_bilirubin_elevation.md) | all-grade total bilirubin elevation ← nilotinib · categorical (graded) response model | — | Larson RA et al., Population pharmacokinetic and exposure…, European journal of clinica… (2012) | [10.1007/s00228-011-1200-7](https://doi.org/10.1007/s00228-011-1200-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nilotinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C8` inducer/inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), CSF3R (inhibitor), DDR2 (inhibitor), KIT (inhibitor), PDGFRA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Giles_2013.pdf` | Giles FJ et al., Nilotinib population pharmacokinetics a…, European journal of clinica… (2013) | popPK | 10 | [10.1007/s00228-012-1385-4](https://doi.org/10.1007/s00228-012-1385-4) | [23052406](https://pubmed.ncbi.nlm.nih.gov/23052406) | This is a human nilotinib population-PK study, but no numeric disposition parameter values are provided in the evidence. |
| `Larson_2012.pdf` | Larson RA et al., Population pharmacokinetic and exposure…, European journal of clinica… (2012) | popPK | 10 | [10.1007/s00228-011-1200-7](https://doi.org/10.1007/s00228-011-1200-7) | [22207416](https://pubmed.ncbi.nlm.nih.gov/22207416) | The human population-PK study reports relative bioavailability of 0.84, but detailed disposition parameter estimates are not provided. |
| `Li_2015.pdf` | Li CH et al., Clinical trial simulation to evaluate p…, Journal of clinical pharmac… (2015) | popPK | 8 | [10.1002/jcph.449](https://doi.org/10.1002/jcph.449) | [25511575](https://pubmed.ncbi.nlm.nih.gov/25511575) | The study simulates nilotinib population pharmacokinetics, but no numeric nilotinib disposition parameter values are provided. |

<sub>queue written 2026-10-07T03:13:33.052653+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alshurafa_2026 | irrelevant | 0 | 0 | This study evaluates renal outcomes and reports no quantitative nilotinib pharmacokinetic parameters. |
| popPK | Banerjee_2021 | irrelevant | 0 | 0 | The study reports computational and cell-culture antiviral results, not nilotinib pharmacokinetic parameters. |
| popPK | Brooks_2021 | irrelevant | 0 | 0 | Nilotinib is administered for survival studies, but no nilotinib disposition parameters or numeric PK values are reported. |
| popPK | DCunha_2019 | irrelevant | 0 | 0 | Nilotinib is a coadministered transporter inhibitor; the reported pharmacokinetic parameters are for afatinib. |
| popPK | Dogra_2024 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| popPK | Giles_2013 | relevant | 10 | 0 | This is a human nilotinib population-PK study, but no numeric disposition parameter values are provided in the evidence. |
| popPK | Hoshino-Yoshino_2011 | irrelevant | 2 | 0 | It compares exposure AUCs but reports no nilotinib disposition parameters or readable numeric values in the provided evidence. |
| popPK | Ji_2009 | irrelevant | 0 | 0 | This is an in-vitro transcriptional dose-response study and reports no nilotinib disposition parameters. |
| popPK | Li_2015 | relevant | 8 | 0 | The study simulates nilotinib population pharmacokinetics, but no numeric nilotinib disposition parameter values are provided. |
| popPK | Mauro_2025 | relevant | 10 | 2 | The human nilotinib PopPK model is relevant, but its numeric model parameter estimates are only in supplementary material not provided here. |
| popPK | Pagan_2019 | relevant | 8 | 1 | This is a human nilotinib PK study, but no numeric disposition parameters are readable here and concentration results appear in figures not provided. |
| popPK | Sy_2025 | irrelevant | 1 | 0 | This is an exposure-response disease-model study and reports no numeric nilotinib disposition parameters. |
| popPK | Xia_2020 | irrelevant | 0 | 0 | The study reports nilotinib binding and activity values, not pharmacokinetic disposition parameters. |
| popPK | de_2014 | irrelevant | 0 | 0 | The study models sunitinib and its metabolite; nilotinib is only mentioned as prior comparative evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:13 UTC</sub>
