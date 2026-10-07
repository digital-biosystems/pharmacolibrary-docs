<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;formoterol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Formoterol_Back2020_reference&quot;,&quot;label&quot;:&quot;Back_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_formoterol/Formoterol_Back2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# formoterol

- **generic name:** formoterol
- **ATC codes:** `R03AC13`, `R03AK07`, `R03AK08`, `R03AK09`, `R03AK11`, `R03AL05`, `R03AL07`, `R03AL10`, `R03CC15`
- **DrugBank:** [DB00983](https://go.drugbank.com/drugs/DB00983) · **PubChem:** [CID 3410](https://pubchem.ncbi.nlm.nih.gov/compound/3410)
- **molar mass:** 344.4049 g/mol (C19H24N2O4) — DrugBank
- **groups:** approved, investigational

## About

Formoterol is a long-acting inhaled beta-2 agonist used to treat asthma and chronic obstructive pulmonary disease. It is widely used, both alone and in combination inhalers with corticosteroids or anticholinergics, and is an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q637247](https://www.wikidata.org/wiki/Q637247) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| formoterol | parent | 344.405 | C19H24N2O4 | DrugBank | [3410](https://pubchem.ncbi.nlm.nih.gov/compound/3410) | van_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:44 | 6:12 | 1/0/1 | 7/1/0 | 0/0/0 | 283,909/23,539 | ollama / glm-5.3-flash | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Back_2020_reference](drugs/drug_formoterol/Formoterol_Back2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [van_1998_reference](drugs/drug_formoterol/Formoterol_van1998_reference.md) | — | 1-compartment (no model) | 5 | van den Berg BT et al., Pharmacokinetics and effects of formote…, European journal of clinica… (1998) | [10.1007/s002280050494](https://doi.org/10.1007/s002280050494) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Back_2020_ACT](drugs/drug_formoterol/pd_Back_2020_ACT.md) | Asthma control test score ← formoterol · disease-progression model | — | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cazzola_2015_relaxation_of_human_isolated_bronchi_pre_contracted_with_ACh](drugs/drug_formoterol/pd_Cazzola_2015_relaxation_of_human_isolated_bronchi_pre_contra.md) | relaxation of human isolated bronchi pre-contracted with ACh ← formoterol · direct Emax (saturable) effect | — | Cazzola M et al., Searching for the synergistic effect be…, Respiratory medicine (2015) | [10.1016/j.rmed.2015.08.005](https://doi.org/10.1016/j.rmed.2015.08.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Donnelly_2010_GM_CSF](drugs/drug_formoterol/pd_Donnelly_2010_GM_CSF.md) | LPS-stimulated GM-CSF release from monocyte-derived macrophages ← formoterol · direct Emax (saturable) effect | — | Donnelly LE et al., Effects of formoterol and salmeterol on…, The European respiratory jo… (2010) | [10.1183/09031936.00158008](https://doi.org/10.1183/09031936.00158008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Donnelly_2010_TNF_alpha](drugs/drug_formoterol/pd_Donnelly_2010_TNF_alpha.md) | LPS-stimulated TNF-alpha release from monocyte-derived macrophages ← formoterol · direct Emax (saturable) effect | — | Donnelly LE et al., Effects of formoterol and salmeterol on…, The European respiratory jo… (2010) | [10.1183/09031936.00158008](https://doi.org/10.1183/09031936.00158008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kume_2018_MCh_10_M_glycopyrronium_inhibition](drugs/drug_formoterol/pd_Kume_2018_MCh_10_M_glycopyrronium_inhibition.md) | Percent inhibition of methacholine (10 μM)-induced contraction in the presence of glycopyrronium (1 nM) ← formoterol · direct sigmoid Emax (Hill) effect | — | Kume H et al., Involvement of Allosteric Effect and K, International journal of mo… (2018) | [10.3390/ijms19071999](https://doi.org/10.3390/ijms19071999) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kume_2018_MCh_10_M_inhibition](drugs/drug_formoterol/pd_Kume_2018_MCh_10_M_inhibition.md) | Percent inhibition of methacholine (10 μM)-induced contraction ← formoterol · direct sigmoid Emax (Hill) effect | — | Kume H et al., Involvement of Allosteric Effect and K, International journal of mo… (2018) | [10.3390/ijms19071999](https://doi.org/10.3390/ijms19071999) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kume_2018_MCh_1_M_inhibition](drugs/drug_formoterol/pd_Kume_2018_MCh_1_M_inhibition.md) | Percent inhibition of methacholine (1 μM)-induced contraction ← formoterol · direct sigmoid Emax (Hill) effect | — | Kume H et al., Involvement of Allosteric Effect and K, International journal of mo… (2018) | [10.3390/ijms19071999](https://doi.org/10.3390/ijms19071999) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Naline_1994_relaxation](drugs/drug_formoterol/pd_Naline_1994_relaxation.md) | bronchial relaxation (concentration-response to formoterol) ← formoterol · direct Emax (saturable) effect | — | Naline E et al., Relaxant effects and durations of actio…, The European respiratory jo… (1994) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Wallman_2022_HR](drugs/drug_formoterol/pd_Wallman_2022_HR.md) | heart rate ← formoterol · direct sigmoid Emax (Hill) effect | — | Wallman M et al., An integrative pharmacokinetic-cardiova…, Journal of pharmacological… (2022) | [10.1016/j.vascn.2022.107171](https://doi.org/10.1016/j.vascn.2022.107171) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Wallman_2022_MAP](drugs/drug_formoterol/pd_Wallman_2022_MAP.md) | mean arterial pressure ← formoterol · direct sigmoid Emax (Hill) effect | — | Wallman M et al., An integrative pharmacokinetic-cardiova…, Journal of pharmacological… (2022) | [10.1016/j.vascn.2022.107171](https://doi.org/10.1016/j.vascn.2022.107171) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Wallman_2022_QTc](drugs/drug_formoterol/pd_Wallman_2022_QTc.md) | QT interval duration (QTc) ← formoterol · direct sigmoid Emax (Hill) effect | — | Wallman M et al., An integrative pharmacokinetic-cardiova…, Journal of pharmacological… (2022) | [10.1016/j.vascn.2022.107171](https://doi.org/10.1016/j.vascn.2022.107171) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_1999_eosinophils](drugs/drug_formoterol/pd_van_1999_eosinophils.md) | plasma eosinophil concentration (eosinopenic effect) ← formoterol · direct sigmoid Emax (Hill) effect | — | van den Berg BT et al., Pharmacokinetic/pharmacodynamic modelli…, Pulmonary pharmacology & th… (1999) | [10.1006/pupt.1999.0199](https://doi.org/10.1006/pupt.1999.0199) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Back_2020_FEV1](drugs/drug_formoterol/pd_Back_2020_FEV1.md) | Forced expiratory volume (FEV1) ← formoterol · indirect response — drug stimulates the production of Forced expiratory volume (FEV1) | model (no simulator) | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [van_1999_potassium](drugs/drug_formoterol/pd_van_1999_potassium.md) | plasma potassium concentration (hypokalemic effect) ← formoterol · direct sigmoid Emax (Hill) effect | model (no simulator) | van den Berg BT et al., Pharmacokinetic/pharmacodynamic modelli…, Pulmonary pharmacology & th… (1999) | [10.1006/pupt.1999.0199](https://doi.org/10.1006/pupt.1999.0199) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gong_2022_FEV1](drugs/drug_formoterol/pd_Gong_2022_FEV1.md) | change from baseline in trough FEV1 ← formoterol/aclidinium and formoterol/glycopyrronium fixed-dose combinations · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=formoterol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `SLC22A1` inhibitor/substrate, `UGT1A1` substrate, `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_1998.pdf` | van den Berg BT et al., Pharmacokinetics and effects of formote…, European journal of clinica… (1998) | popPK | 10 | [10.1007/s002280050494](https://doi.org/10.1007/s002280050494) | [9776436](https://pubmed.ncbi.nlm.nih.gov/9776436) | Human oral PK study reporting numeric ka, t1/2, V, AUC for formoterol directly in the abstract. |
| `Soulele_2018.pdf` | Soulele K et al., On the pharmacokinetics of two inhaled…, Pulmonary pharmacology & th… (2018) | popPK | 9 | [10.1016/j.pupt.2017.12.002](https://doi.org/10.1016/j.pupt.2017.12.002) | [29223508](https://pubmed.ncbi.nlm.nih.gov/29223508) | Population PK model of inhaled formoterol (five-compartment with enterohepatic recirculation) in asthma patients, but no numeric parameter values appear in the evidence — they likely reside in tables/supplementary material not provided. |
| `van_1999.pdf` | van den Berg BT et al., Pharmacokinetic/pharmacodynamic modelli…, Pulmonary pharmacology & th… (1999) | popPK | 5 | [10.1006/pupt.1999.0199](https://doi.org/10.1006/pupt.1999.0199) | [10419838](https://pubmed.ncbi.nlm.nih.gov/10419838) | PK/PD modelling of formoterol in healthy men, but the evidence shows only PD parameters (Emax, EC50); the actual PK disposition values (CL, V, ka) are not present and likely reside in the full paper or supplementary material. |

<sub>queue written 2026-10-07T13:38:41.669333+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cazzola_2015 | irrelevant | 0 | 0 | This is a pharmacodynamic synergy study (in vitro bronchi and FEV1 in COPD patients) with no PK disposition parameters for formoterol. |
| popPK | Donnelly_2010 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of cytokine inhibition with EC50 values, no PK disposition parameters for formoterol. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) MBMA of FEV1 for LABA/LAMA combinations, not a PK study; no formoterol disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Herbert_2019 | irrelevant | 0 | 0 | In vitro pharmacodynamic study of formoterol in rat lung slices; no PK parameters reported. |
| popPK | Huang_2020 | irrelevant | 3 | 4 | Non-compartmental AUC/Cmax bioavailability comparison only; no clearance, volume, or population-PK model parameters for formoterol are reported, and detailed values appear only as summary ratios. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | This is a clinical effectiveness study of COPD therapies; formoterol is only a co-administered comparator drug with no PK parameters reported. |
| popPK | Kume_2018 | irrelevant | 0 | 0 | In vitro pharmacodynamics study of bronchodilator synergism in guinea pig trachealis; formoterol is only a test agonist with EC50 values, no PK disposition parameters. |
| popPK | Mehta_2018 | irrelevant | 0 | 0 | Formoterol appears only as the co-administered comparator (budesonide/formoterol arm); the population PK models and parameters (CL/F, Q/F, KA) are for fluticasone furoate, umeclidinium, and vilanterol, not formoterol. |
| popPK | Mhanna_2007 | irrelevant | 1 | 1 | In-vitro pharmacodynamic study of formoterol enantiomers on rat tracheal rings; no PK disposition parameters reported. |
| popPK | Miller_2016 | relevant | 4 | 3 | Formoterol is a subject compound with uptake/elimination rate constants and BCF modelled in Gammarus pulex, but the numeric k1/k2/BCF values for formoterol are in Table 1/Fig. 1 which are not included in the evidence; also this is environmental bioconcentration toxicokinetics rather than classical disposition PK. |
| popPK | Naline_1994 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of bronchial relaxation; no PK disposition parameters for formoterol. |
| popPK | Soulele_2018 | relevant | 9 | 2 | Population PK model of inhaled formoterol (five-compartment with enterohepatic recirculation) in asthma patients, but no numeric parameter values appear in the evidence — they likely reside in tables/supplementary material not provided. |
| popPK | Wallman_2022 | irrelevant | 3 | 1 | Formoterol is one of five reference compounds in a dog PK/CV safety-pharmacology model; the focus is cardiovascular (EC50, Emax) parameters, and no numeric formoterol PK disposition values (CL, V, ka) appear in the evidence. |
| popPK | van_1999 | relevant | 5 | 2 | PK/PD modelling of formoterol in healthy men, but the evidence shows only PD parameters (Emax, EC50); the actual PK disposition values (CL, V, ka) are not present and likely reside in the full paper or supplementary material. |
| popPK | van_2024 | irrelevant | 0 | 0 | This is a drug-disease Poisson model of reliever (SABA) use in asthma, not a PK study; formoterol appears only as part of a maintenance combination therapy with no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:38 UTC</sub>
