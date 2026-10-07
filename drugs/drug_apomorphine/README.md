<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;apomorphine&quot;}]"></div>

# apomorphine

- **generic name:** apomorphine
- **ATC codes:** `G04BE07`, `N04BC07`
- **DrugBank:** [DB00714](https://go.drugbank.com/drugs/DB00714) · **PubChem:** [CID 6005](https://pubchem.ncbi.nlm.nih.gov/compound/6005)
- **molar mass:** 267.3224 g/mol (C17H17NO2) — DrugBank
- **groups:** approved, investigational

## About

Apomorphine is a dopamine agonist used to treat Parkinson's disease and has also been used for erectile dysfunction. It remains an approved medicine, used mainly for Parkinson's disease, though some European products for erectile dysfunction have been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q269111](https://www.wikidata.org/wiki/Q269111) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| apomorphine | parent | 267.322 | C17H17NO2 | DrugBank | [6005](https://pubchem.ncbi.nlm.nih.gov/compound/6005) | Agbo_2021, Gancher_1989, Nasser_2024, Neef_1994 |
| apomorphine-sulfate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:13 | 11:28 | 0/5/1 | 7/0/2 | 0/0/0 | 423,201/23,405 | einfracz / qwen3.8-27b | 10 | 1/8 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Neef_1994_reference](drugs/drug_apomorphine/Apomorphine_Neef1994_reference.md) | — | 1-compartment (no model) | 2 | Neef C et al., Comparison of two software programs to…, International journal of bi… (1994) | [10.1016/0020-7101(94)90107-4](https://doi.org/10.1016/0020-7101(94)90107-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Agbo_2021_reference](drugs/drug_apomorphine/Apomorphine_Agbo2021_reference.md) | — | parent + metabolite (no model) | 8 (+7 cov.) | Agbo F et al., Population pharmacokinetic analysis of…, Clinical and translational… (2021) | [10.1111/cts.13008](https://doi.org/10.1111/cts.13008) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Aymard_2003_reference](drugs/drug_apomorphine/Apomorphine_Aymard2003_reference.md) | — | 1-compartment (no model) | 0 | Aymard G et al., Pharmacokinetic-pharmacodynamic study o…, Fundamental & clinical phar… (2003) | [10.1046/j.1472-8206.2003.00152.x](https://doi.org/10.1046/j.1472-8206.2003.00152.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Gancher_1989_reference](drugs/drug_apomorphine/Apomorphine_Gancher1989_reference.md) | — | 1-compartment (no model) | 3 | Gancher ST et al., Peripheral pharmacokinetics of apomorph…, Annals of neurology (1989) | [10.1002/ana.410260209](https://doi.org/10.1002/ana.410260209) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nasser_2024_subcutaneous](drugs/drug_apomorphine/Apomorphine_Nasser2024_subcutaneous.md) | — | 1-compartment (no model) | 7 | Nasser A et al., Model-based comparison of subcutaneous…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09914-x](https://doi.org/10.1007/s10928-024-09914-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nasser_2024_sublingual](drugs/drug_apomorphine/Apomorphine_Nasser2024_sublingual.md) | — | 1-compartment (no model) | 9 | Nasser A et al., Model-based comparison of subcutaneous…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09914-x](https://doi.org/10.1007/s10928-024-09914-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Aymard_2003_GH](drugs/drug_apomorphine/pd_Aymard_2003_GH.md) | growth hormone secretion ← apomorphine · direct sigmoid Emax (Hill) effect | — | Aymard G et al., Pharmacokinetic-pharmacodynamic study o…, Fundamental & clinical phar… (2003) | [10.1046/j.1472-8206.2003.00152.x](https://doi.org/10.1046/j.1472-8206.2003.00152.x) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brown_2020_3CLpro_inhibition](drugs/drug_apomorphine/pd_Brown_2020_3CLpro_inhibition.md) | 3CLpro inhibition biomarker turnover ← apomorphine | — | Brown AS et al., High-Throughput Screening for Inhibitor…, Molecules (Basel, Switzerla… (2020) | [10.3390/molecules25204666](https://doi.org/10.3390/molecules25204666) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Coronas_2004_cell_numbers](drugs/drug_apomorphine/pd_Coronas_2004_cell_numbers.md) | cell numbers ← apomorphine · direct Emax (saturable) effect | — | Coronas V et al., Dopamine D3 receptor stimulation promot…, Journal of neurochemistry (2004) | [10.1111/j.1471-4159.2004.02823.x](https://doi.org/10.1111/j.1471-4159.2004.02823.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cat</span> | [Dutta_1975_cardiovascular_effects](drugs/drug_apomorphine/pd_Dutta_1975_cardiovascular_effects.md) | cardiovascular effects ← apomorphine · inhibition effect | — | Dutta SN et al., Cardiovascular effects of central micro…, Archives internationales de… (1975) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gardner_1998_stimulation_of_35S_GTPgammaS_binding](drugs/drug_apomorphine/pd_Gardner_1998_stimulation_of_35S_GTPgammaS_binding.md) | stimulation of [35S]-GTPgammaS binding ← apomorphine · stimulation effect | — | Gardner B et al., Agonist action at D2(long) dopamine rec…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0701926](https://doi.org/10.1038/sj.bjp.0701926) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Miyauchi_2019_GDF_15](drugs/drug_apomorphine/pd_Miyauchi_2019_GDF_15.md) | Growth Differentiation Factor-15 ← apomorphine · inhibition effect | — | Miyauchi A et al., Apomorphine rescues reactive oxygen spe…, Mitochondrion (2019) | [10.1016/j.mito.2019.07.006](https://doi.org/10.1016/j.mito.2019.07.006) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Miyauchi_2019_cell_viability_assay_under_oxidative_stress](drugs/drug_apomorphine/pd_Miyauchi_2019_cell_viability_assay_under_oxidative_stress.md) | cell viability assay under oxidative stress ← apomorphine · inhibition effect | — | Miyauchi A et al., Apomorphine rescues reactive oxygen spe…, Mitochondrion (2019) | [10.1016/j.mito.2019.07.006](https://doi.org/10.1016/j.mito.2019.07.006) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Nasser_2024_UPDRS_Part_III](drugs/drug_apomorphine/pd_Nasser_2024_UPDRS_Part_III.md) | UPDRS motor scores ← apomorphine · direct sigmoid Emax (Hill) effect | — | Nasser A et al., Model-based comparison of subcutaneous…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09914-x](https://doi.org/10.1007/s10928-024-09914-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ishima_2025_neurite_outgrowth](drugs/drug_apomorphine/pd_Ishima_2025_neurite_outgrowth.md) | neurite outgrowth biomarker turnover ← APO | — | Ishima T et al., A Highly Potent Apomorphine Derivative…, Antioxidants (Basel, Switze… (2025) | [10.3390/antiox14050537](https://doi.org/10.3390/antiox14050537) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Patel_1995_single_pulse_stimulated_dopamine_release](drugs/drug_apomorphine/pd_Patel_1995_single_pulse_stimulated_dopamine_release.md) | single pulse stimulated dopamine release ← apomorphine · direct Emax (saturable) effect | — | Patel J et al., Biphasic inhibition of stimulated endog…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb16350.x](https://doi.org/10.1111/j.1476-5381.1995.tb16350.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=apomorphine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `COMT` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `CYP2B6` substrate, `CYP2C8` substrate, `CYP3A4` unknown, `CYP3A5` substrate, `SULT1A1` substrate, `SULT1E1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` unknown, `CYP3A5` substrate, `SULT1A1` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (target), ADRA2C (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR2A (target), HTR2B (target), HTR2C (target), SLC18A2 (inducer), SULT1A2 (substrate), SULT1A3 (substrate), SULT1B1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 664 matched, 106 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 0  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aymard_2003.pdf` | Aymard G et al., Pharmacokinetic-pharmacodynamic study o…, Fundamental & clinical phar… (2003) | popPK | 10 | [10.1046/j.1472-8206.2003.00152.x](https://doi.org/10.1046/j.1472-8206.2003.00152.x) | [12914551](https://pubmed.ncbi.nlm.nih.gov/12914551) | The study provides a compartmental PK model for apomorphine in humans and explicitly lists numeric values for half-lives (t1/2alpha, t1/2beta) and Emax/EC50 parameters in the text. |
| `Neef_1994.pdf` | Neef C et al., Comparison of two software programs to…, International journal of bi… (1994) | popPK | 10 | [10.1016/0020-7101(94)90107-4](https://doi.org/10.1016/0020-7101(94)90107-4) | [7927855](https://pubmed.ncbi.nlm.nih.gov/7927855) | The paper reports quantitative population pharmacokinetic parameters (Vslope, Kel, Ka) for apomorphine directly in the abstract/evidence text. |
| `Paalzow_1986.pdf` | Paalzow LK et al., Concentration-response relations for ap…, The Journal of pharmacy and… (1986) | popPK | 10 | [10.1111/j.2042-7158.1986.tb04462.x](https://doi.org/10.1111/j.2042-7158.1986.tb04462.x) | [2869123](https://pubmed.ncbi.nlm.nih.gov/2869123) | The study reports quantitative PK parameters (clearance, volume of distribution, half-life) for apomorphine in rats, with specific numeric values provided in the abstract text. |
| `Gancher_1989.pdf` | Gancher ST et al., Peripheral pharmacokinetics of apomorph…, Annals of neurology (1989) | popPK | 9 | [10.1002/ana.410260209](https://doi.org/10.1002/ana.410260209) | [2774511](https://pubmed.ncbi.nlm.nih.gov/2774511) | The abstract reports specific quantitative pharmacokinetic parameters (distribution half-life 5 min, elimination half-life 33 min) for apomorphine in humans. |
| `Priston_1996.pdf` | Priston MJ et al., Novel liquid chromatographic assay for…, Journal of chromatography.… (1996) | popPK | 9 | [10.1016/0378-4347(95)00534-x](https://doi.org/10.1016/0378-4347(95)00534-x) | [8798925](https://pubmed.ncbi.nlm.nih.gov/8798925) | The study reports specific pharmacokinetic parameters (half-lives, AUC) and model fit (two-compartment) for apomorphine in human plasma. |
| `Melzacka_1979.pdf` | Melzacka M et al., Behavioral effects and cerebral pharmac…, Polish journal of pharmacol… (1979) | popPK | 7 | not captured | [574957](https://pubmed.ncbi.nlm.nih.gov/574957) | The study reports pharmacokinetic modeling of apomorphine in rat brain with specific half-times, but lacks the full suite of quantitative disposition parameters (CL, V) typically required. |

<sub>queue written 2026-10-07T09:09:27.444499+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arbouw_2009 | not_relevant | 2 | 5 | The study reports associations between genetic variants and treatment discontinuation (a clinical outcome), not specific pharmacokinetic or pharmacodynamic parameters of apomorphine. |
| popPK | Atack_2014 | irrelevant | 0 | 0 | The study characterizes a new A2A/A1 antagonist (JNJ-40255293) where apomorphine is used only as a behavioral comparator agent, with no PK parameters for apomorphine reported. |
| popPK | Baas_1998 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of levodopa in the presence of apomorphine, and apomorphine is only used as a co-administered agent rather than the subject of the pharmacokinetic analysis. |
| PGx | Berlin_2000 | not_relevant | 3 | 8 | The study reports no significant effect of the DRD2 Taq IA polymorphism on apomorphine pharmacodynamic parameters (growth hormone, temperature, yawns). |
| popPK | Boddé_1998 | relevant | 4 | 0 | The paper reports that PK parameters were determined for R-apomorphine in patients but is a review/summary that does not display the specific quantitative numeric values (CL, V, etc.) in the provided evidence. |
| popPK | Brennan_2010 | irrelevant | 0 | 0 | The study focuses on the preclinical characterization of WS-50030, using apomorphine only as a comparator agent to test behavioral effects, with no pharmacokinetic data reported for apomorphine. |
| popPK | Brioni_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of penile erection in rats using a D4 agonist (ABT-724), with apomorphine mentioned only as background context without any reported pharmacokinetic parameters. |
| popPK | Brown_2020 | irrelevant | 0 | 0 | The study is an in-vitro high-throughput screen for SARS-CoV-2 protease inhibitors and reports EC50 values for apomorphine, but contains no pharmacokinetic or disposition parameters. |
| PGx | Cacabelos_2017 | not_relevant | 0 | 0 | The paper is a general review of Parkinson's disease pathogenesis and pharmacogenomics but does not report specific data or a fitted effect size for apomorphine pharmacokinetics or pharmacodynamics linked to a specific genetic variant. |
| PGx | Campbell_2017 | not_relevant | 2 | 5 | The paper describes an adverse clinical reaction in a dog with a specific genotype, but it does not provide quantitative pharmacokinetic or pharmacodynamic parameter data (such as Cmax, AUC, or ED50) to establish a pharmacogenomic effect on the drug's PK/PD profile. |
| popPK | Coronas_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of D3 receptor-mediated cell proliferation and does not report pharmacokinetic disposition parameters. |
| popPK | Cosi_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of D2 receptor partial agonism and prolactin release, with no pharmacokinetic parameters reported for apomorphine. |
| popPK | Cubeddu_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release in rabbit brain slices, not a pharmacokinetic study. |
| PGx | Dey_2025 | not_relevant | 0 | 0 | The paper focuses on computational drug-target identification for early-onset Parkinson's disease and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters for apomorphine. |
| popPK | Fici_1997 | irrelevant | 0 | 0 | The study is an in vitro receptor binding and functional assay (cAMP formation) and does not report any pharmacokinetic parameters (CL, V, Ka, etc.) for apomorphine. |
| popPK | Gardner_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ligand binding and receptor function, not a pharmacokinetic study of apomorphine. |
| popPK | Gazi_2000 | irrelevant | 0 | 0 | The study focuses on receptor pharmacology (binding and functional coupling) in cell lines, not pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Gourgiotis_2012 | not_relevant | 0 | 0 | The study investigates the interaction between nitric oxide modulators and apomorphine in rats, focusing on behavioral outcomes (memory deficits) rather than a gene variant's effect on a PK or PD parameter. |
| PGx | Graumann_2002 | not_relevant | 1 | 0 | The paper investigates the neurotoxic mechanism of dopamine oxidation and DT-diaphorase polymorphisms, using apomorphine only as a behavioral challenge in an animal model of Parkinson's, not to assess pharmacokinetic or pharmacodynamic parameters of apomorphine itself. |
| popPK | Hale_2002 | irrelevant | 0 | 0 | Apomorphine is used as a pharmacological challenge agent to assess erectile function, not as the subject of a pharmacokinetic study, and no PK parameters are reported. |
| popPK | Hamblin_1982 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using apomorphine as a radioligand to study dopamine receptor mechanisms, not a pharmacokinetic study. |
| popPK | Harder_1998 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (dose-response and PK-PD) and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for apomorphine. |
| popPK | Hensler_1987 | irrelevant | 0 | 0 | The paper is an in vitro pharmacological study characterizing D-1 dopamine receptors, not a pharmacokinetic study reporting disposition parameters for apomorphine. |
| popPK | Hofstee_1994 | irrelevant | 2 | 0 | Although the study mentions a two-compartment model, it provides no numeric PK parameters (CL, V, Q, ka, t1/2) in the evidence. |
| popPK | Hsieh_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism of YC-1 and uses apomorphine only as a pro-erectile agent for synergy testing, without reporting any quantitative PK parameters for apomorphine. |
| popPK | Ishima_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuroplasticity (neurite outgrowth) in PC12 cells and does not report any pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Jiang_2004 | irrelevant | 0 | 0 | The study focuses on a new prodrug IPX-750, and apomorphine is used only as a behavioral comparator (apomorphine-induced rotation) rather than being the subject of pharmacokinetic analysis. |
| popPK | Kou_2025 | irrelevant | 0 | 0 | This is a systematic review of diagnostic challenge tests (UPDRS improvement rates) in Parkinson's disease, not a pharmacokinetic study, and apomorphine is used only as a diagnostic agent, not as the subject of PK analysis. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The study investigates intracellular signaling mechanisms (DAG and ceramide formation) in cell lines and does not report pharmacokinetic disposition parameters. |
| popPK | Liu_2008 | irrelevant | 0 | 0 | Apomorphine is used only as a behavioral challenge agent (to induce climbing) in mice, and no pharmacokinetic parameters for apomorphine are reported. |
| PGx | Lucht_2001 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomic effect of DRD2 on tiapride, and only mentions apomorphine in a past-tense reference, not as the subject of the study. |
| PGx | Martin_2008 | not_relevant | 0 | 0 | The study investigates the interaction between the angiotensin system and dopaminergic mechanisms on prepulse inhibition (PPI), showing no genetic modulation of apomorphine's effect, and does not report PK/PD parameter changes. |
| popPK | Martres_1984 | irrelevant | 0 | 0 | The study is a pharmacological investigation of dopamine receptor binding and behavioral effects, not a pharmacokinetic study reporting disposition parameters for apomorphine. |
| popPK | Melzacka_1979 | relevant | 7 | 2 | The study reports pharmacokinetic modeling of apomorphine in rat brain with specific half-times, but lacks the full suite of quantitative disposition parameters (CL, V) typically required. |
| popPK | Miyauchi_2019 | irrelevant | 0 | 0 | The study investigates the cell-protective effects of apomorphine on mitochondrial function in fibroblasts, not its pharmacokinetic disposition parameters. |
| popPK | Neef_1999 | irrelevant | 3 | 3 | The paper is a review/narrative summary that cites general literature values (e.g., Vd 1-2x bodyweight, t1/2 30-90 min) rather than reporting original quantitative PK parameters or a fitted model from its own study. |
| popPK | Neve_1984 | irrelevant | 0 | 0 | This is an in-vitro receptor binding study in rat brain sections, not a pharmacokinetic study, and apomorphine is only mentioned as a probe for behavioral supersensitivity, not as a subject drug for PK parameter estimation. |
| popPK | Newman-Tancredi_2008 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and functional assay study, not a pharmacokinetic study reporting disposition parameters for apomorphine. |
| popPK | Nugroho_2004 | irrelevant | 0 | 0 | This is an in-vitro study of iontophoretic transport kinetics across skin, not a pharmacokinetic study reporting in vivo disposition parameters like clearance or volume for apomorphine. |
| popPK | Nugroho_2005 | irrelevant | 2 | 0 | The paper focuses on transdermal iontophoretic transport modeling (flux parameters) rather than reporting standard systemic pharmacokinetic disposition parameters (CL, V) for apomorphine, and no numeric PK values are provided in the evidence. |
| PGx | Nugroho_2005 | not_relevant | 0 | 0 | The paper describes compartmental modeling for transdermal iontophoretic transport of apomorphine but does not investigate the impact of gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ochoa-de_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of GABA receptor modulation, not a pharmacokinetic study of apomorphine. |
| popPK | Onali_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology study characterizing dopamine receptors in rat striatum, not a pharmacokinetic study of apomorphine. |
| popPK | Patel_1995 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study measuring dopamine release in rat brain slices, reporting receptor binding affinities (EC50) rather than pharmacokinetic disposition parameters. |
| popPK | Pich_1986 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats examining anxiety models, with no pharmacokinetic parameters (CL, V, etc.) reported for apomorphine or any other drug. |
| PGx | Rodrigues-Junior_2022 | not_relevant | 0 | 0 | The paper focuses on the in vitro anticancer effects of apomorphine derivatives on glioblastoma cells and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in human subjects. |
| PGx | Salminen_2015 | not_relevant | 0 | 0 | The paper reports on time-dependent inhibition of CYP2C19 by isoquinoline alkaloids (including apomorphine) in vitro, but it does not report on pharmacogenomic effects (gene variants) or changes in pharmacokinetic parameters in humans. |
| popPK | Simiand_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacological profile of SR 57746A, and apomorphine is only mentioned as a reference drug for stereotypy induction, with no PK parameters reported. |
| PGx | Simonsen_2002 | not_relevant | 0 | 0 | The paper is a review on drug-drug interactions and cardiovascular comorbidities related to erectile dysfunction; it does not report any pharmacogenomic effects (gene variants altering PK/PD) of apomorphine. |
| popPK | Smits_2002 | irrelevant | 0 | 0 | The study uses apomorphine as a behavioral probe to characterize stress-susceptible rat lines and measures in-vitro vascular responses to adrenergic agents, not pharmacokinetic parameters for apomorphine. |
| PGx | Suchanecka_2011 | not_relevant | 2 | 0 | The text is a general review of the ANKK1 gene and mentions that ANKK1 is activated by apomorphine, but it does not report any pharmacogenomic study showing how a specific gene variant affects a PK or PD parameter of apomorphine. |
| popPK | Tadori_2014 | irrelevant | 0 | 0 | This is a review comparing therapeutic plasma concentrations with in vitro receptor pharmacology, lacking original quantitative PK disposition parameters (CL, V, ka) for apomorphine. |
| popPK | Thomas_1992 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of dopamine receptor signaling in striatal slices and does not report any pharmacokinetic parameters for apomorphine. |
| popPK | Wallace_2011 | irrelevant | 0 | 0 | Apomorphine is used only as a challenging agent to induce deficits in a behavioral test, and no PK parameters for apomorphine are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:09 UTC</sub>
