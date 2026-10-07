<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04B&quot;,&quot;href&quot;:&quot;atc/J04B.md&quot;},{&quot;label&quot;:&quot;clofazimine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clofazimine_AlShaer2019_reference&quot;,&quot;label&quot;:&quot;Al-Shaer_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clofazimine/Clofazimine_AlShaer2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clofazimine_Kengo2024_reference&quot;,&quot;label&quot;:&quot;Kengo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clofazimine/Clofazimine_Kengo2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# clofazimine

- **generic name:** clofazimine
- **ATC codes:** `J04BA01`, `J04BA51`
- **DrugBank:** [DB00845](https://go.drugbank.com/drugs/DB00845) · **PubChem:** [CID 2794](https://pubchem.ncbi.nlm.nih.gov/compound/2794)
- **molar mass:** 473.396 g/mol (C27H22Cl2N4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Clofazimine is an antibacterial drug used to treat leprosy, and has also been used for other mycobacterial infections and inflammatory skin conditions such as pyoderma gangrenosum. It remains in use and is included on the WHO list of essential medicines, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418611](https://www.wikidata.org/wiki/Q418611) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:51 | 15:17 | 2/3/0 | 1/1/3 | 0/0/0 | 580,950/38,648 | einfracz / qwen3.8-27b | 12 | 0/12 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Al-Shaer_2019_reference](drugs/drug_clofazimine/Clofazimine_AlShaer2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Al-Shaer MH et al., Fluoroquinolones in Drug-Resistant Tube…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.00279-19](https://doi.org/10.1128/AAC.00279-19) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kengo_2024_reference](drugs/drug_clofazimine/Clofazimine_Kengo2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kengo A et al., Assessing potential drug-drug interacti…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01583-23](https://doi.org/10.1128/aac.01583-23) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Abdelwahab_2020_reference](drugs/drug_clofazimine/Clofazimine_Abdelwahab2020_reference.md) | — | 1-compartment (no model) | 0 | Abdelwahab MT et al., Clofazimine pharmacokinetics in patient…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa310](https://doi.org/10.1093/jac/dkaa310) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ali_2024_reference](drugs/drug_clofazimine/Clofazimine_Ali2024_reference.md) | — | 1-compartment (no model) | 0 | Ali AM et al., Pharmacokinetics and cardiac safety of…, Antimicrobial agents and ch… (2024) | [10.1128/aac.00794-23](https://doi.org/10.1128/aac.00794-23) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2024_reference](drugs/drug_clofazimine/Clofazimine_Zhang2024_reference.md) | — | 2-compartment (no model) | 4 | Zhang CX et al., Clofazimine pharmacokinetics in HIV-inf…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13092](https://doi.org/10.1002/psp4.13092) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdelwahab_2021_QTcF](drugs/drug_clofazimine/pd_Abdelwahab_2021_QTcF.md) | Fridericia-corrected QT (QTcF) ← clofazimine · direct Emax (saturable) effect | — | Abdelwahab MT et al., Effect of Clofazimine Concentration on…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02687-20](https://doi.org/10.1128/AAC.02687-20) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Abdelwahab_2026_QTcF](drugs/drug_clofazimine/pd_Abdelwahab_2026_QTcF.md) | QTcF ← Clofazimine · direct Emax (saturable) effect | model (no simulator) | Abdelwahab MT et al., Exposure-QTc modeling of bedaquiline, p…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01399-25](https://doi.org/10.1128/aac.01399-25) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Al-Shaer_2019_culture_conversion](drugs/drug_clofazimine/pd_Al_Shaer_2019_culture_conversion.md) | culture conversion ← clofazimine · time-to-event model | — | Al-Shaer MH et al., Fluoroquinolones in Drug-Resistant Tube…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.00279-19](https://doi.org/10.1128/AAC.00279-19) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Heysell_2023_favorable_treatment_outcome](drugs/drug_clofazimine/pd_Heysell_2023_favorable_treatment_outcome.md) | favorable treatment outcome ← clofazimine · categorical (graded) response model | — | Heysell SK et al., Pharmacokinetic-Pharmacodynamic Determi…, Clinical infectious disease… (2023) | [10.1093/cid/ciac511](https://doi.org/10.1093/cid/ciac511) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Heysell_2023_time_to_sputum_culture_conversion](drugs/drug_clofazimine/pd_Heysell_2023_time_to_sputum_culture_conversion.md) | time to sputum culture conversion ← clofazimine · time-to-event model | — | Heysell SK et al., Pharmacokinetic-Pharmacodynamic Determi…, Clinical infectious disease… (2023) | [10.1093/cid/ciac511](https://doi.org/10.1093/cid/ciac511) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_P](drugs/drug_clofazimine/pd_Zhang_2022_P.md) | probability of achieving success ← clofazimine · categorical (graded) response model | — | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_Rate_of_reduction_in_daily_oocyst_counts](drugs/drug_clofazimine/pd_Zhang_2022_Rate_of_reduction_in_daily_oocyst_counts.md) | Rate of reduction in daily oocyst counts ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_Rate_of_reduction_in_daily_oocyst_counts_2](drugs/drug_clofazimine/pd_Zhang_2022_Rate_of_reduction_in_daily_oocyst_counts_2.md) | Rate of reduction in daily oocyst counts ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_Time_to_90_oocyst_reduction](drugs/drug_clofazimine/pd_Zhang_2022_Time_to_90_oocyst_reduction.md) | Time to &gt;90% oocyst reduction ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_Time_to_90_oocyst_reduction_2](drugs/drug_clofazimine/pd_Zhang_2022_Time_to_90_oocyst_reduction_2.md) | Time to &gt;90% oocyst reduction ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_clinical_evaluation_score_AUC24_192](drugs/drug_clofazimine/pd_Zhang_2022_clinical_evaluation_score_AUC24_192.md) | clinical evaluation score AUC24-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_clinical_evaluation_score_AUC24_192_2](drugs/drug_clofazimine/pd_Zhang_2022_clinical_evaluation_score_AUC24_192_2.md) | clinical evaluation score AUC24-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_fecal_consistency_score_AUC0_192](drugs/drug_clofazimine/pd_Zhang_2022_fecal_consistency_score_AUC0_192.md) | fecal consistency score AUC0-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_fecal_consistency_score_AUC0_192_2](drugs/drug_clofazimine/pd_Zhang_2022_fecal_consistency_score_AUC0_192_2.md) | fecal consistency score AUC0-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_fecal_vol_AUC24_192](drugs/drug_clofazimine/pd_Zhang_2022_fecal_vol_AUC24_192.md) | fecal vol AUC24-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_fecal_vol_AUC24_192_2](drugs/drug_clofazimine/pd_Zhang_2022_fecal_vol_AUC24_192_2.md) | fecal vol AUC24-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_oocyst_count_AUC24_192](drugs/drug_clofazimine/pd_Zhang_2022_oocyst_count_AUC24_192.md) | oocyst count AUC24-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_oocyst_count_AUC24_192_2](drugs/drug_clofazimine/pd_Zhang_2022_oocyst_count_AUC24_192_2.md) | oocyst count AUC24-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_urine_vol_AUC24_192](drugs/drug_clofazimine/pd_Zhang_2022_urine_vol_AUC24_192.md) | urine vol AUC24-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhang_2022_urine_vol_AUC24_192_2](drugs/drug_clofazimine/pd_Zhang_2022_urine_vol_AUC24_192_2.md) | urine vol AUC24-192 ← clofazimine · direct linear effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhang_2022_RR](drugs/drug_clofazimine/pd_Zhang_2022_RR.md) | rate of reduction in daily oocyst shedding ← clofazimine · direct Emax (saturable) effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhang_2022_TTE](drugs/drug_clofazimine/pd_Zhang_2022_TTE.md) | time to achieve 90% reduction in oocyst shedding ← clofazimine · direct Emax (saturable) effect | model (no simulator) | Zhang CX et al., Pharmacokinetics and Pharmacodynamics o…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01560-21](https://doi.org/10.1128/AAC.01560-21) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clofazimine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: KCNA3 (target), PPARG (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cao_2025.pdf` | Cao J et al., Population pharmacokinetics and dose ev…, The international journal o… (2025) | popPK | 10 | [10.5588/ijtld.24.0481](https://doi.org/10.5588/ijtld.24.0481) | [40155790](https://pubmed.ncbi.nlm.nih.gov/40155790) | The paper reports population PK for clofazimine but specific numeric parameter values are not present in the provided abstract/evidence. |

<sub>queue written 2026-10-07T12:37:30.811009+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelwahab_2026 | irrelevant | 5 | 0 | The study is a pharmacodynamic (PK/PD) modeling study focusing on QT prolongation, and while it uses clofazimine exposure data, it does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2 with volume) for clofazimine in the provided evidence; specific PK parameters are referenced as coming from previous publications. |
| popPK | Al-Shaer_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for levofloxacin and moxifloxacin, not clofazimine (which is only mentioned as a concurrent covariate). |
| popPK | Cao_2025 | relevant | 10 | 0 | The paper reports population PK for clofazimine but specific numeric parameter values are not present in the provided abstract/evidence. |
| popPK | Diacon_2015 | irrelevant | 0 | 0 | The study is a 14-day bactericidal activity trial for tuberculosis treatment shortening and does not report pharmacokinetic disposition parameters (CL, V, etc.) for clofazimine. |
| popPK | El-Saber_2020 | irrelevant | 0 | 0 | The study is an in vitro/in vivo antiparasitic efficacy study where clofazimine is used as a comparator/reference drug, not as the subject of a pharmacokinetic analysis. |
| popPK | Heysell_2023 | relevant | 4 | 2 | The study reports a PK-PD target (AUC0-24/MIC) for clofazimine but does not provide standard disposition parameters like clearance or volume of distribution. |
| popPK | Kengo_2024 | irrelevant | 3 | 0 | The study uses a published model to check clofazimine exposures but reports quantitative PK parameters only for the interacting drugs (levofloxacin, linezolid, etc.), not for clofazimine itself. |
| popPK | Maartens_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bedaquiline and its metabolite M2, with clofazimine serving only as a co-administered inhibitor/comparator, and no PK parameters for clofazimine itself are reported. |
| popPK | Radtke_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of moxifloxacin in children, with clofazimine only mentioned as a covariate affecting QTcF prolongation rather than the subject drug for PK modeling. |
| popPK | Srivastava_2018 | irrelevant | 1 | 0 | The study is a mechanistic antimicrobial effect study in an in vitro hollow-fiber model, not a pharmacokinetic study of the drug itself, and it lacks population-PK parameters. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | This is an antiviral efficacy and mechanism of action study in mice and in vitro, not a pharmacokinetic study, and reports no disposition parameters for clofazimine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:37 UTC</sub>
