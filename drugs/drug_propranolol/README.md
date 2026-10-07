<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;propranolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propranolol_Takechi2018_reference&quot;,&quot;label&quot;:&quot;Takechi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/Propranolol_Takechi2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# propranolol

- **generic name:** propranolol
- **ATC codes:** `C07AA05`, `C07BA05`, `C07FX01`
- **DrugBank:** [DB00571](https://go.drugbank.com/drugs/DB00571) · **PubChem:** [CID 4946](https://pubchem.ncbi.nlm.nih.gov/compound/4946)
- **molar mass:** 259.3434 g/mol (C16H21NO2) — DrugBank
- **groups:** approved, investigational

## About

Propranolol is a non-selective beta blocker used for conditions such as high blood pressure, angina, heart rhythm problems, migraine, anxiety, essential tremor, and infantile hemangioma. It remains widely used, is listed among WHO essential medicines, and is authorised in the European Union, where an approved product is indicated for hemangioma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423364](https://www.wikidata.org/wiki/Q423364) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| propranolol | parent | 259.343 | C16H21NO2 | DrugBank | [4946](https://pubchem.ncbi.nlm.nih.gov/compound/4946) | Marques_2026, Salehifar_2017, Takechi_2018 |
| hydroxy-omeprazole | metabolite | 361.416 | C17H19N3O4S | PubChem | [119560](https://pubchem.ncbi.nlm.nih.gov/compound/119560) | Marques_2026 |
| omeprazole | metabolite | 345.417 | C17H19N3O3S | PubChem | [4594](https://pubchem.ncbi.nlm.nih.gov/compound/4594) | Marques_2026 |
| omeprazole sulphone | metabolite | 361.416 | C17H19N3O4S | PubChem | [145900](https://pubchem.ncbi.nlm.nih.gov/compound/145900) | Marques_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:18 | 4:04 | 2/0/5 | 0/0/1 | 0/0/0 | 273,169/27,196 | einfracz / qwen3.8-27b | 24 | 6/2 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Marques_2026_reference](drugs/drug_propranolol/Propranolol_Marques2026_reference.md) | model (no simulator) | 2-compartment general linear | 5 | Marques L et al., Model-Based Virtual Clinical Trial Reve…, Pharmaceutics (2026) | [10.3390/pharmaceutics18060636](https://doi.org/10.3390/pharmaceutics18060636) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Takechi_2018_reference](drugs/drug_propranolol/Propranolol_Takechi2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+2 cov.) | Takechi T et al., Population Pharmacokinetics and Pharmac…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1149](https://doi.org/10.1002/jcph.1149) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.933). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.0526)</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Salehifar_2017_female](drugs/drug_propranolol/Propranolol_Salehifar2017_female.md) | — | 1-compartment (no model) | 11 | Salehifar E et al., Pharmacokinetic Parameters and Over-Res…, Advanced pharmaceutical bul… (2017) | [10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.933). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.0599)</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Salehifar_2017_male](drugs/drug_propranolol/Propranolol_Salehifar2017_male.md) | — | 1-compartment (no model) | 11 | Salehifar E et al., Pharmacokinetic Parameters and Over-Res…, Advanced pharmaceutical bul… (2017) | [10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.0173)</sub><br><sub>route_to: `human_review`</sub> | [Salehifar_2017_mean_of_differences](drugs/drug_propranolol/Propranolol_Salehifar2017_mean_of_differences.md) | — | 1-compartment (no model) | 3 | Salehifar E et al., Pharmacokinetic Parameters and Over-Res…, Advanced pharmaceutical bul… (2017) | [10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.0173)</sub><br><sub>route_to: `human_review`</sub> | [Salehifar_2017_other_sources](drugs/drug_propranolol/Propranolol_Salehifar2017_other_sources.md) | — | 1-compartment (no model) | 3 | Salehifar E et al., Pharmacokinetic Parameters and Over-Res…, Advanced pharmaceutical bul… (2017) | [10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.0553)</sub><br><sub>route_to: `human_review`</sub> | [Salehifar_2017_this_study](drugs/drug_propranolol/Propranolol_Salehifar2017_this_study.md) | — | 1-compartment (no model) | 3 | Salehifar E et al., Pharmacokinetic Parameters and Over-Res…, Advanced pharmaceutical bul… (2017) | [10.15171/apb.2017.024](https://doi.org/10.15171/apb.2017.024) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Snelder_2013_CO](drugs/drug_propranolol/pd_Snelder_2013_CO.md) | cardiac output ← Propranolol · indirect response — drug inhibits the production of cardiac output | model (no simulator) | Snelder N et al., PKPD modelling of the interrelationship…, British journal of pharmaco… (2013) | [10.1111/bph.12190](https://doi.org/10.1111/bph.12190) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propranolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown, `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate, `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target), HTR1A (other/unknown), HTR1B (other/unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 571 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 7  ·  extracted 2  ·  needs_review 5  ·  rejected 0  ·  stale 6
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jacobs_1997.pdf` | Jacobs G et al., Pharmacokinetics of propranolol in heal…, American journal of veterin… (1997) | popPK | 9 | not captured | [9099387](https://pubmed.ncbi.nlm.nih.gov/9099387) | The study reports quantitative pharmacokinetic parameters (clearance, AUC, Cmax, bioavailability) for propranolol in cats, with specific numeric values provided in the abstract. |
| `Wójcicki_2003.pdf` | Wójcicki J et al., Comparative pharmacokinetics and pharma…, Biopharmaceutics & drug dis… (2003) | popPK | 8 | [10.1002/bdd.357](https://doi.org/10.1002/bdd.357) | [12784321](https://pubmed.ncbi.nlm.nih.gov/12784321) | The study reports population pharmacokinetic parameters for propranolol in humans, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-07T15:14:52.362927+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aramaki_2000 | irrelevant | 0 | 0 | The provided evidence contains only software metadata (GROBID) and no scientific content or pharmacokinetic data for propranolol. |
| popPK | Biswal_2015 | irrelevant | 2 | 0 | Propranolol is used as a co-administered probe/comparator in a study of siponimod, and no specific pharmacokinetic parameters (CL, V, t1/2) for propranolol are reported in the evidence. |
| PD | Biswal_2015 | not_relevant | 2 | 1 | The paper reports group-level mean changes in heart rate and blood pressure (interaction effects) but does not provide individual concentration-effect data, dose-response curves, or fitted PD parameters (e.g., Emax, EC50) for propranolol. |
| popPK | Brawley_2000 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of beta-adrenoceptor subtypes in rat aorta, not a pharmacokinetic study. |
| popPK | Kousar_2022 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of tartaric acid on blood pressure, using propranolol only as a pharmacological antagonist to block beta-receptors, not as the subject of pharmacokinetic analysis. |
| PD | Kousar_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of tartaric acid, not propranolol; propranolol is only used as a pretreatment agent to characterize the mechanism of tartaric acid. |
| popPK | Lalonde_1987 | irrelevant | 1 | 0 | This study models pharmacodynamics (concentration-effect relationship) and reports Emax/EC50 parameters, but does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, half-life) for propranolol. |
| popPK | Lee_1991 | irrelevant | 0 | 0 | The study focuses on in-vitro chemical binding interactions between propranolol and a polymer, reporting no pharmacokinetic disposition parameters. |
| PD | Lee_1991 | not_relevant | 0 | 0 | The paper describes a physicochemical binding interaction between propranolol and a polymer, not a pharmacodynamic or exposure-response relationship in a biological system. |
| popPK | Lemmer_1997 | irrelevant | 0 | 0 | This is a review or commentary discussing general principles of chronopharmacology without reporting original quantitative PK parameter values for propranolol. |
| PD | Lemmer_1997 | not_relevant | 1 | 0 | The text is a qualitative review discussing the concept of chronopharmacology and stating that dose-response relationships are time-dependent, but it provides no specific numeric PD parameters, curves, or data for propranolol. |
| popPK | Li_2010 | irrelevant | 0 | 0 | The study investigates the vasodilatory mechanism of paeonol, and propranolol is used only as a beta-blocker co-administered to test mechanisms, with no pharmacokinetic parameters reported. |
| PD | Li_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of paeonol's vasodilatory effect; propranolol is only mentioned as a non-effective pretreatment agent, and no PD parameters are reported for propranolol. |
| popPK | Mak_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant properties, not a pharmacokinetic study, and contains no disposition parameters like clearance or volume. |
| popPK | Rosen_1990 | irrelevant | 1 | 0 | The study models the pharmacokinetics of norepinephrine (a neurotransmitter) in the presence of propranolol, not the pharmacokinetic parameters (CL, V, ka) of propranolol itself. |
| popPK | Snelder_2013 | irrelevant | 1 | 0 | Propranolol is used as one of six comparator drugs to build a cardiovascular homeostasis model, and the paper does not report its specific PK disposition parameters (CL, Vd), using literature-derived concentration profiles instead. |
| popPK | Tilen_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacogenetics of voriconazole, with propranolol appearing only as a covariate for co-administration effects rather than the subject of PK analysis. |
| popPK | Winkle_1975 | irrelevant | 0 | 0 | The text is a general clinical overview of antiarrhythmic therapy that mentions propranolol's pharmacokinetics qualitatively but provides no quantitative disposition parameters or specific model values. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | This is a study on the mechanism of action of a new vasodilator (compound D1) where propranolol is used only as a comparator agent to block beta-adrenergic receptors, with no pharmacokinetic data for propranolol reported. |
| PD | Wu_2022 | not_relevant | 0 | 0 | The paper reports PD parameters (Emax, EC50) for a novel dehydroabietic acid derivative (D1), not for propranolol; propranolol is only mentioned as a pharmacological inhibitor used in the mechanism study. |
| popPK | Wójcicki_2003 | relevant | 8 | 0 | The study reports population pharmacokinetic parameters for propranolol in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | van_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of thyroid hormones (T4, T3, rT3) in subjects treated with propranolol, not the pharmacokinetics of propranolol itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:15 UTC</sub>
