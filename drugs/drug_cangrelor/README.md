<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;cangrelor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cangrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# cangrelor

- **generic name:** cangrelor
- **ATC codes:** `B01AC25`
- **DrugBank:** [DB06441](https://go.drugbank.com/drugs/DB06441) · **PubChem:** [CID 9854012](https://pubchem.ncbi.nlm.nih.gov/compound/9854012)
- **molar mass:** 776.35 g/mol (C17H25Cl2F3N5O12P3S2) — DrugBank
- **groups:** approved, investigational

## About

Cangrelor is a platelet aggregation inhibitor used to prevent blood clots in patients with acute coronary syndrome or undergoing vascular surgical procedures. It is an approved medicine with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3655338](https://www.wikidata.org/wiki/Q3655338) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| AR-C69712XX | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:37 | 15:49 | 0/2/1 | 1/0/1 | 0/0/1 | 299,712/39,150 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 13/10 | 5/11 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.619). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Henrich_2021_reference](drugs/drug_cangrelor/Cangrelor_Henrich2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.6). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Vargas_2021_cohort_1](drugs/drug_cangrelor/Cangrelor_Vargas2021_cohort_1.md) | — | parent + metabolite (no model) | 0 | Vargas D et al., Cangrelor PK/PD analysis in post-operat…, Journal of thrombosis and h… (2021) | [10.1111/jth.15141](https://doi.org/10.1111/jth.15141) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.6). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Vargas_2021_cohort_2](drugs/drug_cangrelor/Cangrelor_Vargas2021_cohort_2.md) | — | parent + metabolite (no model) | 0 | Vargas D et al., Cangrelor PK/PD analysis in post-operat…, Journal of thrombosis and h… (2021) | [10.1111/jth.15141](https://doi.org/10.1111/jth.15141) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Gupta_2020_Mpro_activity](drugs/drug_cangrelor/pd_Gupta_2020_Mpro_activity.md) | Mpro activity biomarker turnover ← cangrelor | — | Gupta A et al., Structure-Based Virtual Screening and B…, ACS omega (2020) | [10.1021/acsomega.0c04808](https://doi.org/10.1021/acsomega.0c04808) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Gupta_2020_Mpro_binding](drugs/drug_cangrelor/pd_Gupta_2020_Mpro_binding.md) | Mpro binding biomarker turnover ← cangrelor | — | Gupta A et al., Structure-Based Virtual Screening and B…, ACS omega (2020) | [10.1021/acsomega.0c04808](https://doi.org/10.1021/acsomega.0c04808) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vargas_2021_LTA](drugs/drug_cangrelor/pd_Vargas_2021_LTA.md) | maximal platelet aggregation ← cangrelor · direct Emax (saturable) effect | model (no simulator) | Vargas D et al., Cangrelor PK/PD analysis in post-operat…, Journal of thrombosis and h… (2021) | [10.1111/jth.15141](https://doi.org/10.1111/jth.15141) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vargas_2021_MF](drugs/drug_cangrelor/pd_Vargas_2021_MF.md) | thrombus growth ← cangrelor · direct Emax (saturable) effect | model (no simulator) | Vargas D et al., Cangrelor PK/PD analysis in post-operat…, Journal of thrombosis and h… (2021) | [10.1111/jth.15141](https://doi.org/10.1111/jth.15141) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **P2RY12** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bouman_2010](drugs/drug_cangrelor/pgx_Bouman_2010_P2RY12_Q100.md) | Bouman HJ et al., The influence of variation in the P2Y12…, Thrombosis and haemostasis (2010) | [10.1160/TH09-06-0367](https://doi.org/10.1160/TH09-06-0367) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cangrelor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: P2RY12 (inhibitor), P2RY12 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 110 matched, 50 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdennour_2020 | irrelevant | 0 | 0 | The paper is a clinical case series regarding the use of cangrelor for intracranial aneurysms and does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Alexopoulos_2018 | irrelevant | 0 | 0 | The paper is a clinical review discussing the use of cangrelor in PCI and does not report any quantitative pharmacokinetic parameters. |
| PD | Alexopoulos_2018 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical trial outcomes and guidelines, containing no specific pharmacodynamic models, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Angiolillo_2017 | irrelevant | 0 | 0 | The paper is an expert consensus document on switching antiplatelet therapies and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Angiolillo_2017 | not_relevant | 1 | 0 | The paper is an expert consensus document on switching therapies and does not report specific numeric PD parameters or exposure-response data for cangrelor. |
| popPK | Capranzano_2019 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic studies regarding P2Y12 inhibitor switching and does not report quantitative pharmacokinetic parameters for cangrelor. |
| PD | Capranzano_2019 | not_relevant | 1 | 0 | The text is a review overview of pharmacodynamic studies regarding P2Y12 inhibitor switching and does not present original data, numeric PD parameters, or specific exposure-response curves for cangrelor. |
| popPK | Capranzano_2019_2 | irrelevant | 0 | 0 | The paper is a review of switching strategies between P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Capranzano_2019_2 | not_relevant | 1 | 0 | The text is a qualitative review summarizing switching strategies and clinical consequences, without presenting specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Cattaneo_2012 | irrelevant | 0 | 0 | The paper is a mechanistic hypothesis regarding dyspnea and does not report any quantitative pharmacokinetic parameters for cangrelor. |
| popPK | Chattaraj_2001 | irrelevant | 0 | 0 | The text is a drug development overview that mentions cangrelor's mechanism and trial status but contains no pharmacokinetic parameters or quantitative disposition data. |
| PD | Chattaraj_2001 | not_relevant | 1 | 0 | The text is a drug development overview that mentions an IC50 for a derivative compound but provides no exposure-response or dose-response data for cangrelor itself. |
| PGx | Dash_2015 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapies and does not report specific pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| popPK | Droppa_2018 | irrelevant | 1 | 0 | The paper is a review article discussing the clinical role of cangrelor without reporting original quantitative pharmacokinetic parameter values. |
| popPK | Elhorany_2021 | irrelevant | 0 | 0 | The paper is a clinical case series regarding safety and efficacy in stroke patients, not a pharmacokinetic study, and does not report quantitative disposition parameters like clearance or volume. |
| PGx | Fabre_2010 | not_relevant | 0 | 0 | The paper is a review of anti-platelet mechanisms and does not report pharmacogenomic effects on cangrelor PK/PD. |
| popPK | Fahnhorst_2021 | irrelevant | 2 | 0 | The study is a clinical pilot cohort focusing on dosing and platelet function outcomes rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for cangrelor. |
| PGx | Fayaz_2012 | not_relevant | 0 | 0 | The paper is a review of P2Y12 inhibitors and discusses pharmacogenetics for clopidogrel and prasugrel, but it does not report any pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| PGx | Ferri_2013 | not_relevant | 0 | 0 | The paper is a general review of P2Y12 inhibitors and does not report specific pharmacogenomic effects (gene variants) on cangrelor's PK or PD parameters. |
| popPK | Gargiulo_2025 | irrelevant | 0 | 0 | The study focuses exclusively on pharmacodynamic effects (platelet inhibition) and clinical outcomes, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Gargiulo_2025 | not_relevant | 3 | 2 | The paper reports descriptive pharmacodynamic outcomes (mean platelet inhibition percentages and rates of high residual platelet reactivity) at specific time points, but it does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) or an effect-vs-concentration curve. |
| popPK | Gargiulo_2026 | irrelevant | 0 | 0 | The study reports pharmacodynamic (platelet reactivity) parameters, not pharmacokinetic disposition parameters (CL, V, etc.) for cangrelor. |
| PD | Gargiulo_2026 | not_relevant | 3 | 2 | The study reports descriptive pharmacodynamic outcomes (platelet inhibition percentages) at fixed time points and compares groups, but it does not model an exposure-response or dose-response relationship, nor does it provide numeric PD parameters like Emax or EC50. |
| popPK | Gasecka_2019 | irrelevant | 1 | 0 | The paper is a narrative review discussing clinical switching strategies and pharmacological properties, containing no original quantitative pharmacokinetic parameter values for cangrelor. |
| PD | Gasecka_2019 | not_relevant | 2 | 1 | The text is a review introduction discussing switching strategies and mentions pharmacodynamics studies generally, but it does not present specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Gelbenegger_2022 | irrelevant | 0 | 0 | The paper is a review of antiplatelet drugs and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Gelbenegger_2022 | not_relevant | 1 | 0 | The text is a general review of antiplatelet drugs and does not contain specific numeric PD parameters or exposure-response data for cangrelor. |
| popPK | Gelbenegger_2022_2 | irrelevant | 2 | 1 | The study is a pharmacodynamic trial focusing on platelet function assays (MEA, VASP-P) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Q) for cangrelor, with only a cited half-life mentioned in the supplementary rationale. |
| popPK | Gupta_2020 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study on SARS-CoV-2 main protease inhibition, where cangrelor is used only as a comparator agent for binding affinity (KD/IC50), not for pharmacokinetic parameter estimation. |
| popPK | Henrich_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of selatogrel and its interactions with oral P2Y12 antagonists (clopidogrel, prasugrel, ticagrelor); cangrelor is only mentioned in the introduction as a comparator for drug interaction mechanisms and no PK parameters for cangrelor are reported. |
| popPK | Hochholzer_2017 | irrelevant | 0 | 0 | The study is a clinical trial focused on platelet inhibition and transition strategies, not a pharmacokinetic study reporting quantitative disposition parameters for cangrelor. |
| popPK | Holden_2021 | irrelevant | 1 | 0 | The study focuses on platelet function testing and dose-response for antiplatelet effect, not on quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Kubica_2024 | irrelevant | 2 | 1 | The paper is a clinical review that discusses cangrelor's pharmacokinetics qualitatively (e.g., half-life, volume of distribution) but does not report quantitative disposition parameters like clearance (CL) or specific volume values, nor does it present a population-PK model. |
| PD | Kubica_2024 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical trial outcomes and general pharmacological properties (e.g., &gt;90% inhibition, half-life) without presenting specific numeric PD parameters (Emax, EC50) or an exposure-response model. |
| PGx | Laine_2016 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy and does not report specific pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| popPK | Langer_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on VPAC receptor modulation where cangrelor is used only as an inactive comparator to ticagrelor, with no pharmacokinetic parameters reported. |
| popPK | Linfante_2021 | irrelevant | 0 | 0 | The paper is a clinical feasibility and safety study of cangrelor use in neuroendovascular procedures and does not report any quantitative pharmacokinetic parameters. |
| popPK | Liu_2024 | irrelevant | 1 | 0 | The paper is a case report discussing clinical management and guidelines, not a pharmacokinetic study, and only mentions a general half-life range without providing quantitative disposition parameters or model values. |
| popPK | Marnat_2021 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study comparing cangrelor to glycoprotein IIb/IIIa inhibitors, reporting no pharmacokinetic parameters. |
| popPK | Masyuk_2018 | irrelevant | 2 | 0 | The study is a pharmacosimulation based on known parameters but does not report original quantitative PK values for cangrelor in the provided evidence. |
| PGx | Michelson_2009 | not_relevant | 0 | 0 | The paper is a review of P2Y12 antagonists; it discusses pharmacogenomics for clopidogrel (CYP2C19) but does not report any pharmacogenomic effects on the PK or PD of cangrelor. |
| popPK | Milnerowicz_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing cangrelor to GPIIb/IIIa inhibitors in stroke, reporting no pharmacokinetic parameters. |
| PD | Milnerowicz_2026 | not_relevant | 0 | 0 | The paper is a retrospective clinical trial comparing clinical outcomes (efficacy/safety) of cangrelor vs GPIIb/IIIa inhibitors, with no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters reported. |
| popPK | Motovska_2024 | irrelevant | 0 | 0 | The paper is a clinical trial rationale and design document for a comparative efficacy study, containing no quantitative pharmacokinetic parameters or disposition data for cangrelor. |
| PD | Motovska_2024 | not_relevant | 0 | 0 | The paper is a trial protocol/rationale describing a future study design and endpoints, containing no actual data, PK/PD analysis, or numeric PD parameters. |
| popPK | Norgard_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function reporting an IC50 value, not a pharmacokinetic study with disposition parameters. |
| popPK | Oestreich_2009 | irrelevant | 1 | 0 | The text is a qualitative overview of cangrelor's mechanism and clinical status without reporting any quantitative pharmacokinetic parameters. |
| popPK | Ortega-Paz_2024 | irrelevant | 0 | 0 | The paper is a review on switching P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Ortega-Paz_2024 | not_relevant | 1 | 0 | The text is a review providing qualitative guidance on switching therapies and does not report specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Pampuch_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay comparing platelet function tests, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper is a computational text-mining study on drug-gene relationships and contains no pharmacokinetic data for cangrelor. |
| PD | Percha_2015 | not_relevant | 0 | 0 | The paper describes a text mining algorithm for extracting drug-gene relationships from biomedical literature and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for cangrelor. |
| PGx | Qureshi_2013 | not_relevant | 0 | 0 | The paper is a review focused on clopidogrel resistance and pharmacogenomics; cangrelor is only mentioned as a keyword for a literature search on new agents, with no specific pharmacogenomic data reported for it. |
| popPK | Rollini_2017 | irrelevant | 0 | 0 | The paper is a review of clinical switching strategies for P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Rollini_2017 | not_relevant | 1 | 0 | The text is a review of switching strategies and does not report specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Rymer_2024 | irrelevant | 0 | 0 | The paper is a clinical registry study focusing on dosing duration and clinical outcomes (MACE/bleeding) rather than pharmacokinetic parameters. |
| PD | Rymer_2024 | not_relevant | 0 | 0 | The paper is an observational registry analyzing clinical outcomes (MACE, bleeding) and infusion duration, reporting no concentration-effect data, PK/PD modeling, or numeric PD parameters. |
| popPK | Schneider_2014 | irrelevant | 0 | 0 | The study reports only pharmacodynamic effects (platelet aggregation) and does not provide any quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2014 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic outcomes (platelet reactivity) during drug transition but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Schneider_2015 | irrelevant | 0 | 0 | The study reports only pharmacodynamic effects (platelet aggregation) and contains no quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2015 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic effects (platelet aggregation) and timing of recovery but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Schneider_2015_2 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (platelet reactivity) and drug interaction timing, reporting no quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2015_2 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of platelet reactivity recovery times under different dosing schedules but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve for cangrelor. |
| popPK | Seider_2019 | irrelevant | 1 | 0 | This is a clinical case report describing the use of cangrelor for anticoagulation, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Serhan_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of cangrelor on HDL-cholesterol metabolism in mice and does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Shrestha_2022 | irrelevant | 1 | 0 | This is a clinical case series regarding the use of cangrelor as a bridge to surgery, not a pharmacokinetic study, and it does not report quantitative disposition parameters like clearance or volume. |
| popPK | Sible_2017 | irrelevant | 2 | 0 | The paper is a review article discussing cangrelor's mechanism and clinical use, and the provided evidence contains no quantitative pharmacokinetic parameter values. |
| PD | Sible_2017 | not_relevant | 2 | 1 | The text is a general review of cangrelor's mechanism and clinical trials, lacking specific numeric PD parameters or detailed exposure-response data. |
| popPK | Siller-Matula_2010 | irrelevant | 0 | 0 | The paper is a narrative review of antiplatelet drugs and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 1 | The paper is a review article summarizing the pharmacological profiles of various antiplatelet drugs, including cangrelor, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for cangrelor. |
| popPK | Steinhubl_2008 | irrelevant | 0 | 0 | The study reports pharmacodynamic (platelet function) outcomes rather than quantitative pharmacokinetic parameters (CL, V, etc.) for cangrelor. |
| popPK | Storey_2016 | irrelevant | 3 | 4 | The paper is a review that cites PK parameters (clearance, half-life) from other studies rather than reporting original quantitative disposition data or compartmental models. |
| PD | Storey_2016 | not_relevant | 1 | 0 | The text is a narrative review describing the background and clinical evidence for cangrelor, but it does not present original pharmacodynamic modeling or specific numeric PD parameters (e.g., Emax, EC50) in the provided abstract or captions. |
| popPK | Södergren_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of platelet lysosomal exocytosis where cangrelor is used only as a functional inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Tamborini_2015 | irrelevant | 1 | 0 | The paper is a narrative review summarizing clinical data and pharmacological characteristics without reporting original quantitative pharmacokinetic parameter values. |
| PD | Tamborini_2015 | not_relevant | 2 | 1 | The text is a qualitative review summary that discusses the pharmacological characteristics and clinical outcomes of cangrelor but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data. |
| popPK | Tunströmer_2023 | irrelevant | 0 | 0 | The study is an ex vivo mechanistic investigation of thrombus remodelling and does not report pharmacokinetic parameters for cangrelor. |
| popPK | Valenti_2022 | irrelevant | 0 | 0 | The paper is a clinical review/consensus document on personalized antiplatelet bridging therapy and does not report any quantitative pharmacokinetic parameters for cangrelor. |
| PD | Valenti_2022 | not_relevant | 1 | 0 | The text is a review/consensus document proposing a clinical algorithm for personalized cangrelor bridging therapy and does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Van_2019 | irrelevant | 1 | 0 | The paper is a clinical review of perioperative bridging strategies and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PGx | Wallentin_2009 | not_relevant | 0 | 0 | The paper is a systematic review that discusses pharmacogenetics for thienopyridines (like clopidogrel) but does not report any gene variant effects on the PK or PD of cangrelor. |
| PGx | Wichaiyo_2026 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet drugs and does not report specific pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| popPK | Wzorek_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cangrelor binding to human serum albumin (reporting KD and thermodynamic parameters) and does not provide pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| PD | Wzorek_2021 | not_relevant | 2 | 1 | The paper focuses on in vitro protein binding interactions (HSA) and does not report a pharmacodynamic exposure-response or dose-response model with numeric PD parameters like Emax or EC50. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic cardioprotection experiment in rats where cangrelor is used only as a co-administered comparator agent, and no pharmacokinetic parameters for cangrelor are reported. |
| PD | Xiao_2021 | not_relevant | 0 | 0 | The paper investigates the cardioprotective efficacy of nicotinamide riboside in the presence of cangrelor, but does not report any pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationship for cangrelor itself. |
| PGx | Yousuf_2011 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy evolution and does not report specific pharmacogenomic effects on cangrelor PK/PD parameters. |
| popPK | Yun_2022 | irrelevant | 0 | 0 | The study is a clinical safety and efficacy comparison of cangrelor versus eptifibatide for periprocedural bridging and does not report any pharmacokinetic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for cangrelor. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 12:22 UTC</sub>
