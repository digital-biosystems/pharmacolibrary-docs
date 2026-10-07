<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;umeclidinium bromide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;UmeclidiniumBromide_Yang2017_reference&quot;,&quot;label&quot;:&quot;Yang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# umeclidinium bromide

- **generic name:** umeclidinium bromide
- **ATC codes:** `R03AL03`, `R03AL08`, `R03BB07`
- **DrugBank:** [DB09076](https://go.drugbank.com/drugs/DB09076) · **PubChem:** [CID 11519070](https://pubchem.ncbi.nlm.nih.gov/compound/11519070)
- **molar mass:** 428.595 g/mol (C29H34NO2) — DrugBank
- **groups:** approved, investigational

## About

Umeclidinium bromide is a muscarinic antagonist used to treat chronic obstructive pulmonary disease. It is authorised in the European Union, typically inhaled alone or in combination with adrenergic bronchodilators.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21011235](https://www.wikidata.org/wiki/Q21011235) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| umeclidinium (umeclidinium_bromide) | parent | 428.595 | C29H34NO2 | DrugBank | [11519070](https://pubchem.ncbi.nlm.nih.gov/compound/11519070) | Goyal_2014, Mehta_2018, Mehta_2020, Pene_2016, Yang_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:25 | 6:13 | 5/4/1 | 1/1/0 | 0/0/0 | 381,495/18,903 | ollama / glm-5.3-flash | 13 | 1/12 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2018_historical_model_parameter_estimates](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2018_historical_model_parameter_est.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2018_historical_model_parameter_estimates_rse](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2018_historical_model_parameter_est.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2018_model_parameter_estimates_with_combined_dataset](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2018_model_parameter_estimates_with.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2018_model_parameter_estimates_with_combined_dataset_rse](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2018_model_parameter_estimates_with.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yang_2017_reference](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Yang S et al., Population Pharmacokinetics Modeling of…, European journal of drug me… (2017) | [10.1007/s13318-016-0331-8](https://doi.org/10.1007/s13318-016-0331-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2020_reference](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2020_reference.md) | — | 1-compartment (no model) | 2 | Mehta R et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00794-w](https://doi.org/10.1007/s40262-019-00794-w) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Goyal_2014_reference](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Goyal2014_reference.md) | — | 1-compartment (no model) | 2 | Goyal N et al., Population pharmacokinetics of inhaled…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0143-4](https://doi.org/10.1007/s40262-014-0143-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2018_combined_model_ln_estimates](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2018_combined_model_ln_estimates.md) | — | 1-compartment (no model) | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2018_historical_model_ln_estimates](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2018_historical_model_ln_estimates.md) | — | 1-compartment (no model) | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Pene_2016_reference](drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Pene2016_reference.md) | — | 2-compartment (no model) | 7 | Pene Dumitrescu T et al., A Novel Method for Studying the Pharmac…, Clinical and translational… (2016) | [10.1111/cts.12406](https://doi.org/10.1111/cts.12406) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Calzetta_2017_relaxation](drugs/drug_umeclidinium_bromide/pd_Calzetta_2017_relaxation.md) | relaxation of cholinergic contractile tone (10 Hz EFS) in human isolated bronchi — umeclidinium alone ← umeclidinium · direct Emax (saturable) effect | — | Calzetta L et al., Pharmacological characterization of the…, European journal of pharmac… (2017) | [10.1016/j.ejphar.2017.07.026](https://doi.org/10.1016/j.ejphar.2017.07.026) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Calzetta_2017_relaxation_2](drugs/drug_umeclidinium_bromide/pd_Calzetta_2017_relaxation_2.md) | relaxation of cholinergic contractile tone (10 Hz EFS) in human isolated bronchi — umeclidinium + vilanterol at 55:22 concentration ratio ← umeclidinium + vilanterol · direct Emax (saturable) effect | — | Calzetta L et al., Pharmacological characterization of the…, European journal of pharmac… (2017) | [10.1016/j.ejphar.2017.07.026](https://doi.org/10.1016/j.ejphar.2017.07.026) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gong_2022_trough_FEV1](drugs/drug_umeclidinium_bromide/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← umeclidinium (vilanterol/umeclidinium FDC) · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=umeclidinium_bromide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `SLC22A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` substrate | DrugBank actor |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 18 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 10  ·  extracted 5  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Goyal_2014.pdf` | Goyal N et al., Population pharmacokinetics of inhaled…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0143-4](https://doi.org/10.1007/s40262-014-0143-4) | [24756395](https://pubmed.ncbi.nlm.nih.gov/24756395) | Population PK model for umeclidinium with numeric CL/F (218 L/h) and V2/F (1,160 L) reported directly in the abstract. |
| `Yang_2017.pdf` | Yang S et al., Population Pharmacokinetics Modeling of…, European journal of drug me… (2017) | popPK | 10 | [10.1007/s13318-016-0331-8](https://doi.org/10.1007/s13318-016-0331-8) | [27026339](https://pubmed.ncbi.nlm.nih.gov/27026339) | Population PK model for umeclidinium with numeric CL/F (257 L/h) and Vc/F (804 L) reported directly in the abstract. |
| `Yang_2021.pdf` | Yang S et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-00988-1](https://doi.org/10.1007/s40262-021-00988-1) | [33598874](https://pubmed.ncbi.nlm.nih.gov/33598874) | Population PK model for UMEC in humans is described, but no numeric parameter values (CL, V, etc.) appear in the evidence; they likely reside in tables/supplement not provided. |

<sub>queue written 2026-10-07T15:20:35.792118+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bjermer_2021 | irrelevant | 0 | 0 | This is a clinical efficacy/safety trial of umeclidinium/vilanterol in COPD with no pharmacokinetic modeling or disposition parameters (CL, V, half-life, etc.) reported. |
| popPK | Calzetta_2017 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of bronchorelaxation in human isolated airways; no PK disposition parameters for umeclidinium. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) meta-analysis of FEV1 for COPD drug combinations, not a PK study; no disposition parameters (CL, V, ka, half-life) for umeclidinium are reported. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | Clinical effectiveness study of UMEC/VI in COPD with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model) reported. |
| popPK | Kerwin_2020 | irrelevant | 0 | 0 | This is a clinical efficacy (symptom outcomes) trial of umeclidinium/vilanterol in COPD with no pharmacokinetic parameters reported. |
| popPK | Kerwin_2023 | irrelevant | 0 | 0 | Clinical COPD trial review of umeclidinium/vilanterol efficacy with no PK parameters (no CL, V, ka, half-life, or PK model) reported. |
| popPK | Maltais_2019 | irrelevant | 0 | 0 | This is a COPD efficacy trial (EMAX) reporting lung function and symptom outcomes, with no PK parameters for umeclidinium. |
| popPK | Maltais_2022 | irrelevant | 0 | 0 | Clinical COPD efficacy trial (EMAX) with no PK parameters for umeclidinium; only FEV1/symptom outcomes reported. |
| popPK | Mehta_2016 | irrelevant | 2 | 1 | This is a concentration-QTc analysis, not a PK disposition study; no CL/V/ka or population-PK parameters for umeclidinium are reported, only QT effect estimates. |
| popPK | Shukla_2021 | irrelevant | 0 | 0 | This is a health-economic cost-effectiveness (GALAXY) model of COPD outcomes, not a pharmacokinetic study; no PK parameters for umeclidinium are reported. |
| popPK | Vogelmeier_2021 | irrelevant | 0 | 0 | Clinical outcomes study of COPD patient-reported outcomes with umeclidinium as treatment arm; no PK parameters (CL, V, half-life, or PK model) reported anywhere. |
| popPK | Vogelmeier_2021_2 | irrelevant | 0 | 0 | This is a COPD efficacy (FEV1/reversibility) post hoc analysis of umeclidinium/vilanterol, not a pharmacokinetic study; no PK parameters (CL, V, ka, half-life, population-PK model) are reported. |
| popPK | Yang_2021 | relevant | 10 | 3 | Population PK model for UMEC in humans is described, but no numeric parameter values (CL, V, etc.) appear in the evidence; they likely reside in tables/supplement not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:20 UTC</sub>
