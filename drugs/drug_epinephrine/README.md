<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;epinephrine&quot;}]"></div>

# epinephrine

- **generic name:** epinephrine
- **ATC codes:** `A01AD01`, `B02BC09`, `C01CA24`, `R01AA14`, `R03AA01`, `R03AK01`, `S01EA01`
- **DrugBank:** [DB00668](https://go.drugbank.com/drugs/DB00668) · **PubChem:** [CID 5816](https://pubchem.ncbi.nlm.nih.gov/compound/5816)
- **molar mass:** 183.2044 g/mol (C9H13NO3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Epinephrine (adrenaline) is used for emergencies and conditions such as anaphylaxis, cardiac arrest, severe low blood pressure, airway obstruction, and glaucoma. It is widely used in human medicine and also approved for veterinary use, with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q132621](https://www.wikidata.org/wiki/Q132621) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| epinephrine | parent | 183.204 | C9H13NO3 | DrugBank | [5816](https://pubchem.ncbi.nlm.nih.gov/compound/5816) | Frechen_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 01:24 | 15:28 | 0/2/1 | 1/0/0 | 0/0/0 | 210,479/48,431 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 1/16 | 14/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Frechen_2015_reference](drugs/drug_epinephrine/Epinephrine_Frechen2015_reference.md) | — | 1-compartment (no model) | 6 | Frechen S et al., Population pharmacokinetic and pharmaco…, Drug metabolism and pharmac… (2015) | [10.1016/j.dmpk.2015.08.002](https://doi.org/10.1016/j.dmpk.2015.08.002) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Heradstveit_2023_reference](drugs/drug_epinephrine/Epinephrine_Heradstveit2023_reference.md) | — | 1-compartment (no model) | 0 | Heradstveit BE et al., Pharmacokinetics of Epinephrine During…, Resuscitation:110025 (2023) | [10.1016/j.resuscitation.2023.110025](https://doi.org/10.1016/j.resuscitation.2023.110025) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Knych_2023_reference](drugs/drug_epinephrine/Epinephrine_Knych2023_reference.md) | — | 2-compartment (no model) | 4 | Knych HK et al., Pharmacokinetics and metabolism of lido…, BMC veterinary research (2023) | [10.1186/s12917-023-03787-x](https://doi.org/10.1186/s12917-023-03787-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Yoo_2015_BI](drugs/drug_epinephrine/pd_Yoo_2015_BI.md) | Bispectral index ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Yoo_2015_DAP](drugs/drug_epinephrine/pd_Yoo_2015_DAP.md) | Diastolic arterial pressure ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Yoo_2015_HR](drugs/drug_epinephrine/pd_Yoo_2015_HR.md) | Heart rate ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Yoo_2015_SAP](drugs/drug_epinephrine/pd_Yoo_2015_SAP.md) | Systolic arterial pressure ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Yoo_2015_SE_Drow](drugs/drug_epinephrine/pd_Yoo_2015_SE_Drow.md) | Subjective effects: Drowsiness ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Yoo_2015_SE_Drug](drugs/drug_epinephrine/pd_Yoo_2015_SE_Drug.md) | Subjective effects: Drug effect ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Yoo_2015_SE_Perf](drugs/drug_epinephrine/pd_Yoo_2015_SE_Perf.md) | Subjective effects: Performance ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=epinephrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `COMT` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `CYP2C9` inhibitor, `CYP3A4` inhibitor, `MAOA` substrate, `SLC22A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `MAOA` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRB1 (target), ADRB2 (target), TNF (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 621 matched, 66 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Frechen_2015.pdf` | Frechen S et al., Population pharmacokinetic and pharmaco…, Drug metabolism and pharmac… (2015) | popPK | 10 | [10.1016/j.dmpk.2015.08.002](https://doi.org/10.1016/j.dmpk.2015.08.002) | [26615448](https://pubmed.ncbi.nlm.nih.gov/26615448) | The paper reports a population PK model for epinephrine with specific half-lives and bioavailability, but full clearance and volume parameters are likely in the body or supplementary material not fully detailed in the abstract. |
| `Heradstveit_2023.pdf` | Heradstveit BE et al., Pharmacokinetics of Epinephrine During…, Resuscitation:110025 (2023) | popPK | 9 | [10.1016/j.resuscitation.2023.110025](https://doi.org/10.1016/j.resuscitation.2023.110025) | [39491088](https://pubmed.ncbi.nlm.nih.gov/39491088) | The study reports a quantitative half-life (2.6 minutes) and decline rate for epinephrine in humans during cardiac arrest, with values explicitly stated in the abstract. |
| `Tanimoto_2023.pdf` | Tanimoto S et al., Pharmacokinetic and pharmacodynamic com…, Annals of allergy, asthma &… (2023) | popPK | 9 | [10.1016/j.anai.2022.10.024](https://doi.org/10.1016/j.anai.2022.10.024) | [36334720](https://pubmed.ncbi.nlm.nih.gov/36334720) | The study is a PK/PD comparison of epinephrine formulations in humans, but the evidence only provides Cmax and PD endpoints, lacking specific clearance, volume, or half-life values. |
| `Fleischer_2025.pdf` | Fleischer DM et al., Pharmacokinetics and Pharmacodynamics o…, The journal of allergy and… (2025) | popPK | 8 | [10.1016/j.jaip.2025.03.019](https://doi.org/10.1016/j.jaip.2025.03.019) | [40120808](https://pubmed.ncbi.nlm.nih.gov/40120808) | The study reports PK parameters for epinephrine, but the evidence only provides Cmax values, lacking clearance, volume, or half-life data. |
| `McIntyre_1996.pdf` | McIntyre RC et al., Pulmonary vascular smooth muscle contra…, The Journal of surgical res… (1996) | pd | 4 | [10.1006/jsre.1996.0100](https://doi.org/10.1006/jsre.1996.0100) | [8769962](https://www.ncbi.nlm.nih.gov/pubmed/8769962) | metadata signals extractable PD data (EC50) |
| `Nyman_2015.pdf` | Nyman E et al., Mathematical modeling improves EC50 est…, The FEBS journal (2015) | pd | 4 | [10.1111/febs.13194](https://doi.org/10.1111/febs.13194) | [25586512](https://www.ncbi.nlm.nih.gov/pubmed/25586512) | metadata signals extractable PD data (EC50) |
| `García-Quetglas_2007.pdf` | García-Quetglas E et al., Pharmacokinetics of tramadol enantiomer…, Pharmacological research (2007) | pgx | 8 | [10.1016/j.phrs.2006.11.003](https://doi.org/10.1016/j.phrs.2006.11.003) | [17175164](https://www.ncbi.nlm.nih.gov/pubmed/17175164) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Isbister_2016.pdf` | Isbister GK et al., Zero-order metoprolol pharmacokinetics…, Clinical toxicology (Philad… (2016) | pgx | 8 | [10.1080/15563650.2016.1209768](https://doi.org/10.1080/15563650.2016.1209768) | [27442605](https://www.ncbi.nlm.nih.gov/pubmed/27442605) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Larsen_2023.pdf` | Larsen FB et al., Rare Catechol-O-methyltransferase Misse…, Biochemistry (2023) | pgx | 8 | [10.1021/acs.biochem.3c00008](https://doi.org/10.1021/acs.biochem.3c00008) | [36976271](https://www.ncbi.nlm.nih.gov/pubmed/36976271) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Darakjian_2019.pdf` | Darakjian LI et al., Physiologically Based Pharmacokinetic/P…, Molecular pharmaceutics (2019) | pgx | 7 | [10.1021/acs.molpharmaceut.8b01276](https://doi.org/10.1021/acs.molpharmaceut.8b01276) | [30689395](https://www.ncbi.nlm.nih.gov/pubmed/30689395) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Muslimova_2017.pdf` | Muslimova EF et al., [Association of ITGB3, P2RY12, and CYP2…, Terapevticheskii arkhiv (2017) | pgx | 5 | [10.17116/terarkh201789574-78](https://doi.org/10.17116/terarkh201789574-78) | [28631703](https://www.ncbi.nlm.nih.gov/pubmed/28631703) | metadata signals extractable PGX data (CYP2C19) |
| `Palatini_2009.pdf` | Palatini P et al., CYP1A2 genotype modifies the associatio…, Journal of hypertension (2009) | pgx | 5 | [10.1097/HJH.0b013e32832ba850](https://doi.org/10.1097/HJH.0b013e32832ba850) | [19451835](https://www.ncbi.nlm.nih.gov/pubmed/19451835) | metadata signals extractable PGX data (CYP1A2) |
| `Tatarunas_2014.pdf` | Tatarunas V et al., The role of clinical parameters and of…, Blood coagulation & fibrino… (2014) | pgx | 5 | [10.1097/MBC.0000000000000053](https://doi.org/10.1097/MBC.0000000000000053) | [24418943](https://www.ncbi.nlm.nih.gov/pubmed/24418943) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-04T01:09:45.837937+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agúndez_1998 | not_relevant | 0 | 0 | The paper studies the inhibition of CYP1A2 by endogenous indoleamines (serotonin/tryptamine) and does not report pharmacogenomic effects on the PK/PD of epinephrine. |
| popPK | Araneda_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for levobupivacaine, with epinephrine acting only as an adjuvant to modify absorption, not as the subject drug. |
| PGx | Babol_2005 | not_relevant | 0 | 0 | The paper discusses the association between beta3-AR gene polymorphisms and metabolic diseases (obesity, diabetes), not the pharmacokinetic or pharmacodynamic parameters of epinephrine. |
| popPK | Bodtger_2023 | irrelevant | 0 | 0 | The paper describes a diagnostic procedure (thoracoscopy) where epinephrine is used as a local anesthetic adjunct, not as a subject of pharmacokinetic analysis. |
| popPK | Britto-Júnior_2024 | irrelevant | 0 | 0 | The study investigates the pharmacology of 6-nitrodopamine in human seminal vesicles and does not report pharmacokinetic parameters for epinephrine. |
| PD | Britto-Júnior_2024 | not_relevant | 0 | 0 | The paper studies 6-nitrodopamine and noradrenaline, not epinephrine, and does not report PD parameters for epinephrine. |
| PGx | Butcher_1986 | not_relevant | 0 | 0 | The paper studies cAMP metabolism in a mouse lymphoma cell line variant, not a human pharmacogenomic effect on epinephrine PK/PD. |
| PGx | Cacabelos_2017 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of antiparkinsonian drugs (e.g., Atremorine, L-DOPA) and does not report pharmacokinetic or pharmacodynamic effects of epinephrine. |
| popPK | Cavaillon_2006 | irrelevant | 0 | 0 | The paper is a review of inflammatory pathophysiology and mentions epinephrine only as a neuromediator, without reporting any pharmacokinetic parameters. |
| popPK | Darakjian_2019 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PD | Darakjian_2019 | not_relevant | 0 | 0 | The paper focuses on caffeine PK/PD in pregnancy and does not report any pharmacodynamic or exposure-response data for epinephrine. |
| PGx | Darakjian_2019 | not_relevant | 0 | 0 | The paper focuses on caffeine disposition in pregnancy and does not involve epinephrine or pharmacogenomic effects. |
| PGx | Despres_1984 | not_relevant | 2 | 5 | The paper studies the genetic basis of the physiological response to training on lipolysis, not the pharmacogenomic effect of a specific gene variant on the PK/PD of epinephrine as a therapeutic drug. |
| PGx | Fidler_2017 | not_relevant | 0 | 0 | The paper investigates the role of GLUT3 in platelet activation and does not report pharmacokinetic or pharmacodynamic parameters of epinephrine. |
| popPK | Fleischer_2025 | relevant | 8 | 2 | The study reports PK parameters for epinephrine, but the evidence only provides Cmax values, lacking clearance, volume, or half-life data. |
| PGx | García-Quetglas_2007 | not_relevant | 1 | 5 | The paper reports a pharmacogenomic effect on the PK of tramadol, not epinephrine; epinephrine is only mentioned as a secondary biomarker. |
| PGx | Godeneche_2009 | not_relevant | 0 | 0 | The paper investigates aspirin non-response and platelet function, not the pharmacokinetics or pharmacodynamics of epinephrine. |
| popPK | Grech_2022 | irrelevant | 0 | 0 | The study investigates platelet reactivity and aggregation in response to epinephrine as an agonist, not the pharmacokinetic disposition parameters (CL, V, etc.) of epinephrine as a drug. |
| PGx | Hall_2016 | not_relevant | 2 | 5 | The paper reports pharmacogenomic effects of COMT on the clinical response to clonidine (steps, sleep, QoL) and changes in catecholamine levels, but it does not report the pharmacokinetics (PK) or pharmacodynamics (PD) of epinephrine itself. |
| PGx | He_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of gemcitabine resistance mediated by adrenergic signaling in cancer cells, not the pharmacokinetics or pharmacodynamics of epinephrine itself. |
| PGx | Hori_1993 | not_relevant | 0 | 0 | The study investigates microvascular mechanisms of tumor blood flow in rats using vasopressors and does not report any pharmacogenomic effects or gene variants. |
| PGx | Isbister_2016 | not_relevant | 0 | 0 | The paper discusses metoprolol pharmacokinetics and CYP2D6 status, not epinephrine. |
| PGx | Ji_2005 | not_relevant | 2 | 5 | The paper studies the enzyme (PNMT) that synthesizes epinephrine, not the pharmacokinetics or pharmacodynamics of exogenous epinephrine as a drug. |
| popPK | Knych_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lidocaine (the subject drug), while epinephrine is only a co-administered vasoconstrictor agent. |
| PGx | Kong_2022 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial evaluating a Traditional Chinese Medicine formula in COPD and does not report pharmacogenomic effects on the PK or PD of epinephrine. |
| PGx | Larsen_2023 | not_relevant | 2 | 0 | The paper focuses on the structural stability and proteasomal degradation of COMT variants, not on the pharmacokinetic or pharmacodynamic parameters of epinephrine. |
| PGx | Latremoliere_2011 | not_relevant | 0 | 0 | The paper discusses GCH1 variants affecting endogenous BH4 levels and pain physiology, not the pharmacokinetics or pharmacodynamics of exogenous epinephrine administration. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper investigates glucose-mediated signaling in yeast and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of epinephrine. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of hypoglycemia-associated autonomic failure using chemogenetics in rats and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of epinephrine. |
| PGx | Liggett_2000 | not_relevant | 2 | 0 | The text is a general overview of beta-adrenergic receptor pharmacogenetics and does not report specific quantitative PK/PD parameter changes for epinephrine. |
| PGx | Ljungström_2024 | not_relevant | 0 | 0 | The paper is a case report on the treatment of Chronic Fatigue Syndrome with AMPT and does not report pharmacogenomic effects on the PK or PD of epinephrine. |
| PGx | Lockette_1996 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of alpha-2 agonists on lactate efflux in cell lines and rat models, but does not report a pharmacogenomic effect of a specific gene variant on the PK or PD parameters of epinephrine in humans. |
| PGx | Lozinski_2013 | not_relevant | 0 | 0 | The paper reviews the clinical pharmacology and safety of tumescent liposuction but does not report any pharmacogenomic effects on epinephrine PK/PD parameters. |
| PGx | Lymperopoulos_2014 | not_relevant | 2 | 0 | The text is an abstract for a review article discussing general pharmacogenetics of cardiac inotropy and does not report specific quantitative pharmacokinetic or pharmacodynamic parameters for epinephrine. |
| PGx | Martineau_1994 | not_relevant | 0 | 0 | The study investigates associations between gene variants and autism status in the context of endogenous catecholamine levels, not the pharmacokinetics or pharmacodynamics of exogenous epinephrine administration. |
| popPK | McIntyre_1996 | irrelevant | 0 | 0 | no_text gate: only 44 chars of text extracted (&lt; 400) |
| PD | McIntyre_1996 | not_relevant | 0 | 0 | The provided text is a title fragment regarding pulmonary vascular smooth muscle contraction and contains no data, analysis, or mention of epinephrine or pharmacodynamic parameters. |
| PGx | Muslimova_2017 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of antiplatelet therapy (clopidogrel/ASA) and uses epinephrine only as an agonist for platelet aggregation testing, not as the drug of interest for PK/PD analysis. |
| popPK | Nijat_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of compounds in Danhong Injection (e.g., danshensu, salvianolic acid B) in rats, not epinephrine. |
| popPK | Nyman_2015 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Nyman_2015 | not_relevant | 4 | 5 | The paper focuses on methodological improvements for estimating EC50 from classical dose-response curves, likely using simulated or generic data rather than reporting a specific pharmacodynamic relationship for epinephrine with extractable drug-specific parameters. |
| PGx | Palatini_2009 | not_relevant | 0 | 0 | The study investigates the effect of CYP1A2 genotype on the relationship between coffee intake and hypertension risk, not the pharmacokinetics or pharmacodynamics of epinephrine. |
| PGx | Poehlman_1986 | not_relevant | 0 | 0 | The study investigates the genetic influence on adipose tissue metabolic adaptation to overfeeding, not the pharmacokinetics or pharmacodynamics of epinephrine as a therapeutic drug. |
| PGx | Poehlman_1987 | not_relevant | 0 | 0 | The paper investigates the genetic influence on exercise-induced changes in body composition and adipose tissue metabolism, not the pharmacokinetics or pharmacodynamics of epinephrine as a drug. |
| popPK | Rajnák_2024 | irrelevant | 0 | 0 | The paper is a quantum-chemical study of molecular properties and redox potentials, not a pharmacokinetic study. |
| PD | Rajnák_2024 | not_relevant | 0 | 0 | The paper is a quantum-chemical study of molecular properties (redox potentials, ionization energies) of catecholamines and does not report any pharmacodynamic, exposure-response, or dose-response relationships. |
| popPK | Riff_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lidocaine, not epinephrine, which is only a co-administered agent in the tumescent solution. |
| PGx | Russell_2016 | not_relevant | 0 | 0 | The paper is a review discussing the potential for pharmacogenomics in sepsis and does not report specific gene-variant effects on epinephrine PK/PD parameters. |
| PGx | Samsonov_1977 | not_relevant | 0 | 0 | The paper investigates the effect of diet on catecholamine excretion in patients with ischemic heart disease and does not report any pharmacogenomic effects (gene variants) on the PK or PD of epinephrine. |
| PGx | Shen_2014 | not_relevant | 0 | 0 | The paper studies meat quality and gene expression in pigs, not the pharmacokinetics or pharmacodynamics of epinephrine as a drug. |
| PGx | Sim_2025 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and pharmacodynamics of epinephrine in anaphylaxis but does not report any effects of gene variants or genotypes on these parameters. |
| PGx | Sue_2015 | not_relevant | 0 | 0 | The paper investigates the prevalence of SDHB mutations in patients with phaeochromocytoma and their association with tumor metastasis patterns, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of exogenous epinephrine administration. |
| PGx | Takahara_1984 | not_relevant | 0 | 0 | The paper reports clinical associations between catecholamine levels and platelet aggregation in angina patients, but does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of exogenous epinephrine. |
| PGx | Tandale_2016 | not_relevant | 2 | 5 | The paper reports in silico molecular dynamics simulations of binding free energy and structural changes, not experimental pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Taneyama_1989 | not_relevant | 0 | 0 | The study investigates the hemodynamic and catecholamine effects of db-cAMP and dopamine in dogs, containing no data on gene variants or pharmacogenomics. |
| popPK | Tanimoto_2023 | relevant | 9 | 2 | The study is a PK/PD comparison of epinephrine formulations in humans, but the evidence only provides Cmax and PD endpoints, lacking specific clearance, volume, or half-life values. |
| PGx | Tatarunas_2014 | not_relevant | 0 | 0 | The paper investigates the effect of CYP4F2 genotype on platelet aggregation induced by epinephrine, which is a pharmacodynamic response to an agonist, not a PK/PD parameter of epinephrine itself (e.g., clearance, half-life, or receptor binding affinity). |
| PGx | Tjioe_2022 | not_relevant | 0 | 0 | The study investigates the effect of norepinephrine on cisplatin resistance in cancer cells, not the pharmacokinetics or pharmacodynamics of epinephrine itself. |
| PGx | Tjurmina_2002 | not_relevant | 0 | 0 | The study examines the effect of a gene knockout on endogenous epinephrine release in response to stress, not the pharmacokinetics or pharmacodynamics of exogenous epinephrine administration. |
| PGx | Wei_2017 | not_relevant | 0 | 0 | The paper investigates the effect of a stress-induced depression model on repaglinide pharmacokinetics, not the effect of a gene variant on epinephrine pharmacokinetics or pharmacodynamics. |
| PD | Worm_2023 | not_relevant | 2 | 1 | The paper is a review comparing PK parameters (Cmax, Tmax) of different auto-injectors but does not report PD parameters (e.g., Emax, EC50) or quantitative exposure-response relationships. |
| PGx | Yao_2009 | not_relevant | 0 | 0 | The paper investigates the effect of adrenaline on cancer cell chemoresistance (ABCB1 expression) and does not report any pharmacogenomic effects on the PK or PD parameters of epinephrine itself. |
| popPK | Yoo_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dexmedetomidine, and epinephrine is only measured as a biomarker for pharmacodynamic effects, not as the subject drug. |
| PGx | Yu_2020 | not_relevant | 0 | 0 | The paper investigates the physiological regulation of adiponectin by POMC and the sympathetic nervous system, not the pharmacokinetics or pharmacodynamics of epinephrine as a drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 01:10 UTC</sub>
