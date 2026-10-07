<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;sofosbuvir&quot;}]"></div>

# sofosbuvir

- **generic name:** sofosbuvir
- **ATC codes:** `J05AP08`, `J05AP51`, `J05AP55`, `J05AX15`
- **DrugBank:** [DB08934](https://go.drugbank.com/drugs/DB08934) · **PubChem:** [CID 45375808](https://pubchem.ncbi.nlm.nih.gov/compound/45375808)
- **molar mass:** 529.458 g/mol (C22H29FN3O9P) — DrugBank
- **groups:** approved, investigational

## About

Sofosbuvir is an antiviral medicine used to treat hepatitis C, including chronic infection and related liver cirrhosis. It is widely used and is included on the WHO list of essential medicines, with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2502747](https://www.wikidata.org/wiki/Q2502747) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sofosbuvir triphosphate | metabolite | 500.158 | C10H16FN2O14P3 | PubChem | [23725128](https://pubchem.ncbi.nlm.nih.gov/compound/23725128) | Rower_2015_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:59 | 34:18 | 0/1/0 | 5/1/0 | 0/0/0 | 1,485,338/62,451 | ollama / glm-5.3-flash | 45 | 8/35 | 44/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Rower_2015_2_reference](drugs/drug_sofosbuvir/Sofosbuvir_Rower2015v2_reference.md) | — | 1-compartment (no model) | 2 | Rower JE et al., Validation and Application of a Liquid…, Antimicrobial agents and ch… (2015) | [10.1128/aac.01693-15](https://doi.org/10.1128/aac.01693-15) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dragoni_2020_IA_IC50](drugs/drug_sofosbuvir/pd_Dragoni_2020_IA_IC50.md) | WNV antigen (Immunodetection Assay IC50) ← sofosbuvir · inhibition effect | — | Dragoni F et al., Evaluation of sofosbuvir activity and r…, Antiviral research (2020) | [10.1016/j.antiviral.2020.104708](https://doi.org/10.1016/j.antiviral.2020.104708) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Dragoni_2020_PA_IC50](drugs/drug_sofosbuvir/pd_Dragoni_2020_PA_IC50.md) | WNV plaque reduction (plaque assay IC50) ← sofosbuvir · inhibition effect | — | Dragoni F et al., Evaluation of sofosbuvir activity and r…, Antiviral research (2020) | [10.1016/j.antiviral.2020.104708](https://doi.org/10.1016/j.antiviral.2020.104708) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Dragoni_2020_RdRp_IC50](drugs/drug_sofosbuvir/pd_Dragoni_2020_RdRp_IC50.md) | WNV RdRp enzymatic activity ← sofosbuvir · inhibition effect | — | Dragoni F et al., Evaluation of sofosbuvir activity and r…, Antiviral research (2020) | [10.1016/j.antiviral.2020.104708](https://doi.org/10.1016/j.antiviral.2020.104708) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Franco_2021_AUCviral_burden](drugs/drug_sofosbuvir/pd_Franco_2021_AUCviral_burden.md) | Viral burden AUC (DENV2, HUH-7 cells) ← sofosbuvir · direct sigmoid Emax (Hill) effect | — | Franco EJ et al., Antiviral Evaluation of UV-4B and Inter…, Viruses (2021) | [10.3390/v13050771](https://doi.org/10.3390/v13050771) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mumtaz_2017_ZIKV_replication_inhibition_antiviral_activity](drugs/drug_sofosbuvir/pd_Mumtaz_2017_ZIKV_replication_inhibition_antiviral_activity.md) | ZIKV replication inhibition (antiviral activity) ← sofosbuvir · inhibition effect | — | Mumtaz N et al., Cell-line dependent antiviral activity…, Antiviral research (2017) | [10.1016/j.antiviral.2017.09.004](https://doi.org/10.1016/j.antiviral.2017.09.004) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xu_2017_CPE_protection](drugs/drug_sofosbuvir/pd_Xu_2017_CPE_protection.md) | Cytopathic effect protection (DENV infectivity in Huh7 cells) ← Sofosbuvir (SOF) · direct Emax (saturable) effect | — | Xu HT et al., Evaluation of Sofosbuvir (β-D-2'-deoxy-…, Scientific reports (2017) | [10.1038/s41598-017-06612-2](https://doi.org/10.1038/s41598-017-06612-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xu_2017_DENV_RNA](drugs/drug_sofosbuvir/pd_Xu_2017_DENV_RNA.md) | DENV viral RNA production (qRT-PCR) ← Sofosbuvir (SOF) · direct Emax (saturable) effect | — | Xu HT et al., Evaluation of Sofosbuvir (β-D-2'-deoxy-…, Scientific reports (2017) | [10.1038/s41598-017-06612-2](https://doi.org/10.1038/s41598-017-06612-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xu_2017_VYR](drugs/drug_sofosbuvir/pd_Xu_2017_VYR.md) | Virus yield reduction (TCID50 in Huh7 cells) ← Sofosbuvir (SOF) · direct Emax (saturable) effect | — | Xu HT et al., Evaluation of Sofosbuvir (β-D-2'-deoxy-…, Scientific reports (2017) | [10.1038/s41598-017-06612-2](https://doi.org/10.1038/s41598-017-06612-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [de_2019_YFV_titer](drugs/drug_sofosbuvir/pd_de_2019_YFV_titer.md) | YFV replication (viral titer yield-reduction, vaccine strain) ← sofosbuvir · direct sigmoid Emax (Hill) effect | — | de Freitas CS et al., Yellow fever virus is susceptible to so…, PLoS neglected tropical dis… (2019) | [10.1371/journal.pntd.0007072](https://doi.org/10.1371/journal.pntd.0007072) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [de_2019_YFV_titer_2](drugs/drug_sofosbuvir/pd_de_2019_YFV_titer_2.md) | YFV replication (viral titer yield-reduction, wild-type strain) ← sofosbuvir · direct sigmoid Emax (Hill) effect | — | de Freitas CS et al., Yellow fever virus is susceptible to so…, PLoS neglected tropical dis… (2019) | [10.1371/journal.pntd.0007072](https://doi.org/10.1371/journal.pntd.0007072) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ruiz_2021_SGR_replication](drugs/drug_sofosbuvir/pd_Ruiz_2021_SGR_replication.md) | HCV genotype 2a subgenomic replicon replication (luciferase activity) susceptibility to sofosbuvir ← sofosbuvir · direct sigmoid Emax (Hill) effect | — | Ruiz I et al., Real-world efficacy and safety of direc…, European journal of gastroe… (2021) | [10.1097/MEG.0000000000002003](https://doi.org/10.1097/MEG.0000000000002003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sofosbuvir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CES1A1a (substrate), CMPK1 (substrate), CTSA (substrate), Genome polyprotein (modulator), HINT1 (substrate), NME1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1167 matched, 164 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `AbdelMagid_2025.pdf` | AbdelMagid AM et al., Population Pharmacokinetics of Ledipasv…, Clinical therapeutics (2025) | popPK | 9 | [10.1016/j.clinthera.2024.11.022](https://doi.org/10.1016/j.clinthera.2024.11.022) | [39706761](https://pubmed.ncbi.nlm.nih.gov/39706761) | Population PK models for sofosbuvir and its metabolite GS-331007 in children are developed, but no numeric parameter values (CL, V, Q) appear in the evidence — they presumably live in tables/supplementary material not provided. |
| `Brooks_2022.pdf` | Brooks KM et al., Predictors of 007 triphosphate concentr…, The Journal of antimicrobia… (2022) | popPK | 7 | [10.1093/jac/dkac051](https://doi.org/10.1093/jac/dkac051) | [35194648](https://pubmed.ncbi.nlm.nih.gov/35194648) | Reports the terminal half-life of sofosbuvir's active metabolite 007-TP (142 h) in humans, but no CL/V or population-PK compartmental parameters; the half-life value is present in the abstract. |
| `Indolfi_2022.pdf` | Indolfi G et al., Sofosbuvir-velpatasvir-voxilaprevir in…, Hepatology (Baltimore, Md.) (2022) | popPK | 7 | [10.1002/hep.32393](https://doi.org/10.1002/hep.32393) | [35112372](https://pubmed.ncbi.nlm.nih.gov/35112372) | Human adolescent PK study of sofosbuvir with intensive and population PK sampling, but no numeric CL/V values appear in the evidence (likely in tables/supplement not provided). |
| `Jonas_2024.pdf` | Jonas MM et al., Sofosbuvir-velpatasvir in children 3-17…, Journal of pediatric gastro… (2024) | popPK | 7 | [10.1002/jpn3.12045](https://doi.org/10.1002/jpn3.12045) | [38644678](https://pubmed.ncbi.nlm.nih.gov/38644678) | Population PK of sofosbuvir/GS-331007 in children is mentioned, but no numeric parameter values are given in the evidence. |
| `Rower_2015_2.pdf` | Rower JE et al., Validation and Application of a Liquid…, Antimicrobial agents and ch… (2015) | popPK | 7 | [10.1128/aac.01693-15](https://doi.org/10.1128/aac.01693-15) | [26416874](https://pubmed.ncbi.nlm.nih.gov/26416874) | Reports quantitative disposition (half-lives via NCA and nonlinear mixed-effect modeling) of sofosbuvir's phosphorylated anabolites in human cells, with numeric values present in the abstract. |

<sub>queue written 2026-10-07T17:40:22.385878+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abaalkhail_2017 | not_relevant | 0 | 0 | No pharmacogenomic variant/genotype effect on sofosbuvir PK/PD is reported; only HCV genotype and clinical outcomes. |
| popPK | AbdelMagid_2025 | relevant | 9 | 2 | Population PK models for sofosbuvir and its metabolite GS-331007 in children are developed, but no numeric parameter values (CL, V, Q) appear in the evidence — they presumably live in tables/supplementary material not provided. |
| PGx | Abraham_2014 | not_relevant | 0 | 0 | Narrative review with no gene variant/genotype effects on sofosbuvir PK/PD parameters. |
| popPK | Ahmed_2019 | irrelevant | 4 | 2 | Reports metabolite GS331007 concentrations and NONMEM modeling but no numeric PK disposition parameters (CL, V, ka, half-life) are given in the evidence; values appear summarized only as concentration ranges. |
| popPK | Al-Nahari_2020 | irrelevant | 1 | 0 | The subject drug is daclatasvir; sofosbuvir is only a co-administered agent and no sofosbuvir PK parameters are reported. |
| PGx | Al-Nahari_2020 | not_relevant | 0 | 0 | The paper reports daclatasvir PK in adolescents with covariates body weight and albumin, but no gene variant/genotype effects on sofosbuvir PK/PD. |
| PGx | Ampuero_2015 | not_relevant | 0 | 0 | Review of HCV genotype treatment outcomes; no pharmacogenomic effect on sofosbuvir PK/PD parameters reported. |
| PGx | Ampuero_2016 | not_relevant | 0 | 0 | Meta-analysis of SVR rates by treatment regimen; no gene variant effects on sofosbuvir PK/PD parameters. |
| PGx | Asselah_2015 | not_relevant | 0 | 0 | Review abstract on HCV genotype 4 treatment with no pharmacogenomic PK/PD data for sofosbuvir. |
| popPK | Assmus_2022 | irrelevant | 1 | 0 | Sofosbuvir is only listed among sourced test compounds in a COVID-19 repurposing platform; no PK parameters for sofosbuvir are reported, and any exposure data live in supplementary tables not provided. |
| PGx | Balatow_2021 | not_relevant | 0 | 0 | Review abstract mentions HCV viral genotypes only, no pharmacogenomic effect on sofosbuvir PK/PD parameters. |
| popPK | Camarasa_2016 | irrelevant | 0 | 0 | Medicinal chemistry study of HCV inhibitors; sofosbuvir only appears as an EC50 comparator, with no PK parameters. |
| popPK | Camus_2018 | irrelevant | 0 | 0 | This is a virology/resistance study of ledipasvir and velpatasvir with no sofosbuvir PK parameters reported. |
| popPK | Canini_2016 | irrelevant | 0 | 0 | This is a viral kinetics model of HCV RNA decline, not a PK study of sofosbuvir; sofosbuvir is not involved and no disposition parameters appear. |
| popPK | Canini_2018 | irrelevant | 0 | 0 | The paper models setrobuvir, a different drug; sofosbuvir is not the subject and no sofosbuvir parameters appear. |
| popPK | Carson_2026 | irrelevant | 0 | 0 | Machine learning prediction of HCV treatment response; sofosbuvir only mentioned mechanistically, no PK parameters reported. |
| PGx | Casado_2014 | not_relevant | 0 | 0 | Mentions sofosbuvir only as lacking PK interactions with rilpivirine; no gene variant effect on sofosbuvir PK/PD reported. |
| PGx | Chahine_2018 | not_relevant | 0 | 0 | Review of clinical efficacy/safety of SOF/VEL/VOX; no pharmacogenomic effects on PK or PD parameters reported. |
| popPK | Chan_2017 | irrelevant | 3 | 0 | The evidence contains only plot symbols/garbled text with no readable PK parameters or even confirmation that sofosbuvir is the subject drug; any values likely live in figures not provided. |
| PGx | Chan_2017 | not_relevant | 0 | 0 | Text contains only plot artifacts/axis labels with no pharmacogenomic or PK/PD content for sofosbuvir. |
| popPK | Cheng_2016 | irrelevant | 0 | 0 | In vitro antiviral potency/resistance study of ledipasvir; sofosbuvir only mentioned as a combination partner, no PK parameters. |
| PGx | Cholongitas_2014 | not_relevant | 0 | 0 | Review of sofosbuvir efficacy/safety; mentions IL28B genotype only as baseline characteristic, no pharmacogenomic effect on PK/PD parameters. |
| PGx | Chopp_2015 | not_relevant | 2 | 2 | Mentions Q80K affecting simeprevir efficacy, not sofosbuvir PK/PD; no gene variant effect on sofosbuvir parameters reported. |
| PGx | Chua_2021 | not_relevant | 3 | 0 | IL28B genotype was assessed only for association with SVR12 (efficacy), not with any PK or PD parameter of sofosbuvir; no genotype-PK/PD effect reported. |
| PGx | Chuang_2016 | not_relevant | 0 | 0 | Efficacy/safety study of ledipasvir/sofosbuvir in Taiwanese HCV patients with no pharmacogenomic analysis of PK or PD parameters. |
| popPK | Cressey_2021 | irrelevant | 0 | 0 | The population PK model and all reported parameters (AUC, Cmax, Cmin, clearance) concern daclatasvir; sofosbuvir is only a co-administered agent with no PK parameters reported for it. |
| PGx | Dao_2016 | not_relevant | 0 | 0 | In vitro antiviral study of sofosbuvir against HEV; no gene variant/genotype effect on sofosbuvir PK/PD parameters. |
| popPK | Dhanalakshmi_2021 | irrelevant | 0 | 0 | Computational docking/SOM virtual screening study of furin inhibitors (GS-441524, grazoprevir); no PK disposition parameters for sofosbuvir. |
| popPK | Dhanalakshmi_2022 | irrelevant | 0 | 0 | Computational docking/ANN virtual screening study of GS-441524 against furin; no sofosbuvir PK parameters reported. |
| PGx | Dietz_2021 | not_relevant | 0 | 0 | Study covers HCV retreatment efficacy and NS5A resistance substitutions, not pharmacogenomic effects on sofosbuvir PK/PD parameters. |
| popPK | Dvory-Sobol_2019 | irrelevant | 0 | 0 | In vitro virology resistance study of velpatasvir; no PK parameters for sofosbuvir. |
| popPK | Evon_2022 | irrelevant | 0 | 0 | This is a patient-reported outcomes trial comparing symptom improvements after HCV treatment; no PK parameters for sofosbuvir are reported. |
| popPK | Fenaux_2016 | irrelevant | 0 | 0 | In vitro toxicology study of a different nucleotide prodrug (compound 1); sofosbuvir only mentioned as context, no PK parameters. |
| popPK | Franco_2021 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/CC50) with sofosbuvir as one of several test agents; no PK disposition parameters reported. |
| popPK | Friborg_2014 | irrelevant | 0 | 0 | In vitro replicon antiviral potency study (EC50 values), not a PK study; no disposition parameters for sofosbuvir. |
| PGx | Gamal_2016 | not_relevant | 0 | 0 | Review of LDV/SOF efficacy and safety with no pharmacogenomic effects on PK/PD parameters reported. |
| popPK | Gane_2019 | irrelevant | 0 | 0 | This is a PK study of glecaprevir/pibrentasvir, not sofosbuvir; sofosbuvir appears only as prior treatment history, and no sofosbuvir disposition parameters are reported. |
| PGx | Gentile_2014 | not_relevant | 0 | 0 | Paper reviews asunaprevir PK/PD; sofosbuvir only mentioned as combination therapy, no gene variant effect on sofosbuvir PK/PD reported. |
| PGx | Gentile_2014_2 | not_relevant | 0 | 0 | Review of investigational HCV polymerase inhibitors with no pharmacogenomic effects on sofosbuvir PK/PD reported. |
| PGx | Gohel_2020 | not_relevant | 0 | 0 | Study reports HCV genotype and efficacy of sofosbuvir therapy, not pharmacogenomic effects on sofosbuvir PK/PD parameters. |
| popPK | Good_2020 | irrelevant | 0 | 0 | This is a preclinical PK study of AT-527/AT-511, a different drug; sofosbuvir appears only as a comparator with EC50 values, not as the subject of PK parameter reporting. |
| popPK | Guinan_2022 | irrelevant | 0 | 0 | This is a chemistry/synthesis and antiviral activity paper; sofosbuvir is only a comparator and no PK parameters are reported. |
| popPK | Guo_2019 | irrelevant | 1 | 0 | Medicinal chemistry study of sofosbuvir derivatives with in vitro potency data only; no PK disposition parameters for sofosbuvir. |
| PGx | Hafez_2018 | not_relevant | 0 | 0 | Review of ravidasvir (not sofosbuvir) with no pharmacogenomic effects on PK/PD parameters reported. |
| popPK | Han_2019 | irrelevant | 0 | 0 | This is an in vitro virology susceptibility study (EC50 in replicons), not a pharmacokinetic study with disposition parameters. |
| PGx | He_2015 | not_relevant | 0 | 0 | Paper concerns chlorcyclizine's anti-HCV activity; no gene variant effects on sofosbuvir PK/PD reported. |
| PGx | Huang_2025 | not_relevant | 0 | 0 | Trial compares treatment regimens for HCV genotype 3b; no host gene variant effect on sofosbuvir PK/PD parameters reported. |
| popPK | Indolfi_2022 | relevant | 7 | 3 | Human adolescent PK study of sofosbuvir with intensive and population PK sampling, but no numeric CL/V values appear in the evidence (likely in tables/supplement not provided). |
| PGx | Indolfi_2022 | not_relevant | 0 | 0 | The paper reports PK of sofosbuvir-velpatasvir-voxilaprevir in adolescents vs adults, with no gene variant/genotype/phenotype effects on PK or PD parameters. |
| popPK | Jonas_2020 | irrelevant | 0 | 0 | This is a population-PK study of glecaprevir/pibrentasvir in adolescents; sofosbuvir is only mentioned as an approved comparator regimen, with no sofosbuvir PK parameters reported. |
| popPK | Jonas_2024 | relevant | 7 | 2 | Population PK of sofosbuvir/GS-331007 in children is mentioned, but no numeric parameter values are given in the evidence. |
| PGx | Jonas_2024 | not_relevant | 0 | 0 | Paper reports pediatric PK and dosing by age/weight, with no gene variant/genotype effects on sofosbuvir PK/PD parameters. |
| popPK | Jukič_2021 | irrelevant | 0 | 0 | In silico virtual screening/docking study on SARS-CoV-2 RdRp; sofosbuvir is only a structural reference ligand, with no PK parameters reported. |
| PGx | Kao_2016 | not_relevant | 2 | 2 | IL28B genotyping was collected but no genotype effect on sofosbuvir/GS-331007 PK or PD parameters is reported; only creatinine clearance (non-genetic) affected GS-331007 exposure. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | This is a review of pharmacokinetic interactions among antiepileptic drugs (CBD, cenobamate, etc.); sofosbuvir is not mentioned anywhere in the evidence. |
| PGx | Keating_2016 | not_relevant | 0 | 0 | Review of daclatasvir/sofosbuvir efficacy with no pharmacogenomic effects on PK/PD parameters reported. |
| PGx | Khosa_2021 | not_relevant | 0 | 0 | not captured |
| popPK | Kirby_2015 | irrelevant | 3 | 1 | A narrative review of sofosbuvir clinical PK with only AUC percentage changes; no quantitative CL/V/ka or population-PK parameter values present in the evidence. |
| popPK | Kohli_2015 | irrelevant | 0 | 0 | Clinical efficacy trial of DAA regimens with no PK parameters for sofosbuvir reported. |
| popPK | Kumaree_2023 | irrelevant | 0 | 0 | In silico docking study of papaya phytochemicals against Zika virus NS5; sofosbuvir is only a docking reference ligand, with no PK disposition parameters. |
| popPK | Lampejo_2022 | irrelevant | 0 | 0 | A narrative review of sofosbuvir for hepatitis E with no PK parameters or numeric disposition values reported. |
| popPK | Laouénan_2014 | irrelevant | 0 | 0 | This is a PK-viral kinetic study of telaprevir/boceprevir, Peg-IFN and RBV; sofosbuvir is only mentioned as an approved comparator and no sofosbuvir PK parameters are reported. |
| popPK | Lee_2016 | irrelevant | 0 | 0 | Sofosbuvir is only a co-administered comparator in an antiviral efficacy study of vitisin B; no PK parameters for sofosbuvir are reported. |
| PGx | Lee_2017 | not_relevant | 0 | 0 | Abstract only discusses HCV treatment efficacy; no pharmacogenomic effects on sofosbuvir PK/PD parameters reported. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | Clinical nephrotoxicity (eGFR) study with no PK disposition parameters for sofosbuvir. |
| PGx | Llaneras_2017 | not_relevant | 0 | 0 | Review of HCV genotype 4 treatment efficacy; no pharmacogenomic effects on sofosbuvir PK/PD parameters reported. |
| popPK | Maiti_2016 | irrelevant | 0 | 0 | This is a chemistry/antiviral activity paper about prodrugs of 2'-C-Me-uridine; sofosbuvir is only mentioned as an EC50 comparator, with no PK parameters. |
| PGx | Maughan_2018 | not_relevant | 3 | 1 | Abstract mentions pharmacogenetics of IFN outcomes generally, but no gene variant effect on a PK/PD parameter of sofosbuvir is reported. |
| PGx | McQuaid_2015 | not_relevant | 0 | 0 | Review of sofosbuvir pharmacology; no gene variant/genotype effect on PK/PD parameters reported (IL-28B mentioned only as efficacy predictor, not PK/PD). |
| PGx | Miller_2017 | not_relevant | 0 | 0 | Narrative review of sofosbuvir-velpatasvir efficacy/safety with no pharmacogenomic effects on PK or PD parameters. |
| PGx | Mir_2017 | not_relevant | 2 | 3 | Discusses HCV genotype (viral) and drug–drug interactions, not host gene variants affecting sofosbuvir PK/PD parameters. |
| popPK | Mogalian_2018 | irrelevant | 3 | 1 | Sofosbuvir is only a co-administered drug while the study focuses on velpatasvir; no numeric sofosbuvir disposition parameters appear in the evidence. |
| PGx | Moshyk_2016 | not_relevant | 0 | 0 | Cost-effectiveness modeling study with no pharmacogenomic or PK/PD data for sofosbuvir. |
| PGx | Nakamura_2016 | not_relevant | 0 | 0 | Review of sofosbuvir efficacy/safety with no pharmacogenomic effect on PK/PD parameters reported. |
| PGx | Narayanan_2014 | not_relevant | 0 | 0 | Paper compares adverse events and SVR between regimens; no gene variant/genotype effect on sofosbuvir PK/PD parameters reported. |
| popPK | Netzler_2019 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study; sofosbuvir is only a test compound with EC50/CC50, no PK parameters. |
| popPK | Nguyen_2019 | irrelevant | 0 | 0 | In vitro antiviral study of a tylophorine intermediate; sofosbuvir is only a co-treatment comparator, with no PK parameters for sofosbuvir. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | In vitro virology study of NS5A inhibitor EC50s against HCV subtypes; sofosbuvir is only mentioned as a co-administered drug, with no PK parameters. |
| popPK | Nyström_2025 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50 values) with no PK parameters for sofosbuvir. |
| popPK | Panjasawatwong_2024 | irrelevant | 0 | 0 | This is a population PK study of ravidasvir; sofosbuvir is only a co-administered drug with no PK parameters reported for it. |
| popPK | Perazzo_2020 | irrelevant | 0 | 0 | Systematic review/meta-analysis of generic DAA efficacy (SVR rates) with no PK parameters for sofosbuvir; no numeric disposition values present. |
| PGx | Piekarska_2020 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on sofosbuvir PK or PD parameters are reported; only HCV genotype and treatment history effects on SVR. |
| PGx | Pol_2017 | not_relevant | 0 | 0 | No pharmacogenomic/genotype-variant effect on sofosbuvir PK or PD parameters is reported; only clinical predictors of SVR. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | This is a Cochrane review of ivermectin for COVID-19 with no sofosbuvir PK parameters. |
| PGx | Punzalan_2015 | not_relevant | 0 | 0 | Clinical efficacy study of sofosbuvir+simeprevir post-transplant; no pharmacogenomic effects on PK/PD parameters reported. |
| popPK | Qing_2016 | irrelevant | 0 | 0 | In-vitro antiviral efficacy/resistance study of NITD008; sofosbuvir is only a comparator with EC50 fold-changes, no PK parameters. |
| popPK | Rower_2015 | irrelevant | 0 | 0 | The PK model is for ribavirin (and its phosphates), not sofosbuvir, which is only a co-administered drug; no sofosbuvir disposition parameters are reported. |
| PGx | Rower_2015 | not_relevant | 0 | 0 | Paper reports ribavirin PK/PD associations, not a gene variant/genotype effect on sofosbuvir PK/PD. |
| popPK | Ruiz_2021 | irrelevant | 0 | 0 | Clinical efficacy/safety study of DAA regimens with in-vitro EC50 resistance data; no PK disposition parameters (CL, V, ka, half-life, or population-PK model) for sofosbuvir are reported. |
| popPK | Saha_2022 | irrelevant | 0 | 0 | This is a review on electron diffraction crystallography with no sofosbuvir PK content or parameters. |
| popPK | Sahuc_2019 | irrelevant | 0 | 0 | In-vitro antiviral study of dehydrojuncusol; sofosbuvir only mentioned as combination partner, no PK parameters. |
| PGx | Saxena_2016 | not_relevant | 0 | 0 | eGFR is a clinical covariate, not a gene variant/genotype/phenotype; no pharmacogenomic effect on SOF PK/PD reported. |
| PGx | Schwarz_2020 | not_relevant | 0 | 0 | PK data are compared by age/weight vs adults; no gene variant/genotype effect on sofosbuvir PK/PD reported (HCV genotype is viral, not host pharmacogenomics). |
| PGx | Serfaty_2015 | not_relevant | 3 | 2 | Discusses IFNL3 genotype and viral variants as predictors of treatment response, not effects on sofosbuvir PK/PD parameters. |
| PGx | Shiha_2021 | not_relevant | 0 | 0 | Clinical trial comparing Catvira vs SOF+RBV efficacy/safety; no gene variant, genotype, or pharmacogenomic effect on sofosbuvir PK/PD reported. |
| PGx | Smirne_2021 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on sofosbuvir PK/PD parameters are reported; only clinical factors (weight, RBV dose) and HCV genotype. |
| PGx | Smith_2016 | not_relevant | 0 | 0 | Review of daclatasvir/sofosbuvir efficacy; no pharmacogenomic effects on PK/PD parameters reported. |
| PGx | Swallow_2016 | not_relevant | 0 | 0 | Indirect efficacy comparison of DAA regimens; no gene variant effect on sofosbuvir PK/PD reported. |
| PGx | Talavera_2017 | not_relevant | 2 | 1 | Review of DAA drug-drug interactions; no gene variant/genotype effects on sofosbuvir PK/PD parameters reported. |
| PGx | Thiagarajan_2015 | not_relevant | 0 | 0 | Review of HCV treatment efficacy in difficult-to-treat groups; no pharmacogenomic effects on sofosbuvir PK/PD parameters reported. |
| popPK | Tong_2014 | irrelevant | 0 | 0 | This is a viral resistance study (NS5B mutations, EC50 shifts), not a PK study reporting sofosbuvir disposition parameters. |
| PGx | Toussaint-Miller_2015 | not_relevant | 0 | 0 | Review of HCV treatment in special populations; no pharmacogenomic effects on sofosbuvir PK/PD parameters reported. |
| popPK | Tsai_2023 | irrelevant | 0 | 0 | This is a retrospective clinical study of eGFR changes in HIV/HCV-coinfected patients; no PK parameters (CL, V, ka, half-life, or a population-PK model) for sofosbuvir are reported. |
| popPK | Tseng_2017 | irrelevant | 0 | 0 | In-vitro antiviral study of celastrol; sofosbuvir is only a co-administered comparator with no PK parameters. |
| popPK | Turki_2024 | irrelevant | 0 | 0 | This is a biomedical relation classification/NLP paper; sofosbuvir appears only as a MeSH example, with no PK parameters. |
| popPK | Vicenti_2018 | irrelevant | 0 | 0 | In-vitro antiviral potency study (EC50) with no PK disposition parameters for sofosbuvir. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiviral synergy study; sofosbuvir is only a co-administered comparator with no PK parameters reported. |
| popPK | Wisløff_2018 | irrelevant | 0 | 0 | This is a health-economic cost-effectiveness evaluation of hepatitis C treatments; sofosbuvir appears only as a treatment comparator with prices and SVR rate ratios, with no PK parameters (CL, V, ka, half-life, or population-PK model) reported. |
| PGx | Wong_2021 | not_relevant | 0 | 0 | The paper reports SVR12 efficacy and safety of SOF/VEL in genotype 3 HCV patients, with no pharmacogenomic effects on PK or PD parameters. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | In vitro SARS-CoV-2 antiviral screening study; sofosbuvir only tested as an inactive compound, no PK parameters reported. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | In-vitro antiviral/biochemical study of sofosbuvir against DENV; no PK disposition parameters (CL, V, ka, half-life, population-PK model) reported. |
| PGx | Younossi_2018 | not_relevant | 0 | 0 | Paper reports HRQL outcomes and SVR rates by treatment regimen, with no gene variant/genotype effects on sofosbuvir PK or PD parameters. |
| PGx | Yun_2020 | not_relevant | 0 | 0 | This is a cost-utility modeling study of DAA regimens; no gene variant/genotype/phenotype effects on sofosbuvir PK or PD parameters are reported. |
| PGx | Zalawadiya_2020 | not_relevant | 0 | 0 | No pharmacogenomic data; tables only report HCV viral loads by CKD stage in transplant recipients. |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | No pharmacogenomic analysis; "genotype" refers to HCV genotype 1b, not host gene variants affecting sofosbuvir PK/PD. |
| popPK | Zhai_2018 | irrelevant | 0 | 0 | PK parameters (AUC, half-life, clearance) are for GP205, a protease inhibitor; sofosbuvir is only a combination/co-administered agent with no PK parameters of its own. |
| popPK | Zhen_2017 | irrelevant | 1 | 0 | This is a medicinal chemistry/in vitro potency study of new prodrugs; sofosbuvir is only a comparator and no PK disposition parameters are reported. |
| popPK | Zhou_2016 | irrelevant | 0 | 0 | Study of NS5A polymorphisms and daclatasvir resistance/SVR, with no sofosbuvir PK parameters reported. |
| popPK | Zitzmann_2026 | irrelevant | 0 | 0 | This is a viral-kinetic (HCV RNA dynamics) modeling study of bemnifosbuvir/ruzasvir, not a population-PK study of sofosbuvir; sofosbuvir is only mentioned as an in-vitro comparator and no sofosbuvir PK parameters appear. |
| PGx | deLemos_2014 | not_relevant | 0 | 0 | Review commentary with no pharmacogenomic data on sofosbuvir PK/PD parameters. |
| popPK | de_2019 | irrelevant | 0 | 0 | This is an in vitro/in vivo antiviral efficacy study of sofosbuvir against yellow fever virus in mice; no PK disposition parameters (CL, V, ka, half-life, or population-PK model) for sofosbuvir are reported. |
| popPK | van_2021 | irrelevant | 0 | 1 | The paper models uprifosbuvir (a different prodrug) and its metabolites M5/M6, not sofosbuvir; no sofosbuvir PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:40 UTC</sub>
