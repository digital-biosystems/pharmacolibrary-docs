<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;indacaterol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Indacaterol_Jiang2015_reference&quot;,&quot;label&quot;:&quot;Jiang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indacaterol/Indacaterol_Jiang2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# indacaterol

- **generic name:** indacaterol
- **ATC codes:** `R03AC18`, `R03AK14`, `R03AL04`
- **DrugBank:** [DB05039](https://go.drugbank.com/drugs/DB05039) · **PubChem:** [CID 6918554](https://pubchem.ncbi.nlm.nih.gov/compound/6918554)
- **molar mass:** 392.4907 g/mol (C24H28N2O3) — DrugBank
- **groups:** approved, investigational

## About

Indacaterol is an inhaled long-acting beta-2 agonist used to treat chronic obstructive pulmonary disease. It is authorised in the European Union, where several products are available, and is used as a single agent and in combination with other respiratory medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425654](https://www.wikidata.org/wiki/Q425654) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| indacaterol | parent | 392.491 | C24H28N2O3 | DrugBank | [6918554](https://pubchem.ncbi.nlm.nih.gov/compound/6918554) | Bartels_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:11 | 10:45 | 1/1/0 | 8/1/1 | 0/0/0 | 428,986/27,612 | ollama / glm-5.3-flash | 12 | 1/7 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jiang_2015_reference](drugs/drug_indacaterol/Indacaterol_Jiang2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Jiang J et al., Single- and multiple-dose pharmacokinet…, European journal of drug me… (2015) | [10.1007/s13318-014-0197-6](https://doi.org/10.1007/s13318-014-0197-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Bartels_2021_reference](drugs/drug_indacaterol/Indacaterol_Bartels2021_reference.md) | — | 1-compartment (no model) | 2 (+2 cov.) | Bartels C et al., Population Pharmacokinetic Analysis of…, European journal of drug me… (2021) | [10.1007/s13318-021-00689-x](https://doi.org/10.1007/s13318-021-00689-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.80).">human + animal</span> | [Battram_2006_Emax_vs_isoprenaline](drugs/drug_indacaterol/pd_Battram_2006_Emax_vs_isoprenaline.md) | human beta2 adrenoceptor agonist effect (relative to maximal isoprenaline effect) ← indacaterol · direct Emax (saturable) effect | — | Battram C et al., In vitro and in vivo pharmacological ch…, The Journal of pharmacology… (2006) | [10.1124/jpet.105.098251](https://doi.org/10.1124/jpet.105.098251) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.70).">rat</span> | [Hendrickx_2018_Bronchoprotection](drugs/drug_indacaterol/pd_Hendrickx_2018_Bronchoprotection.md) | Inhibition of histamine-induced bronchoconstriction (guinea pig lung efficacy) ← indacaterol · direct sigmoid Emax (Hill) effect | — | Hendrickx R et al., Translational model to predict pulmonar…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12270](https://doi.org/10.1002/psp4.12270) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.70).">rat</span> | [Hendrickx_2018_FEV1](drugs/drug_indacaterol/pd_Hendrickx_2018_FEV1.md) | Placebo-corrected change in trough FEV1 from baseline (COPD patients, beta-2 agonist class) ← indacaterol · direct Emax (saturable) effect | — | Hendrickx R et al., Translational model to predict pulmonar…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12270](https://doi.org/10.1002/psp4.12270) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Jiang_2026_NETs](drugs/drug_indacaterol/pd_Jiang_2026_NETs.md) | NETosis (extracellular DNA release) ← indacaterol · inhibition effect | — | Jiang Y et al., Repurposing indacaterol as a novel NETs…, Biochemical pharmacology 25… (2026) | [10.1016/j.bcp.2026.118106](https://doi.org/10.1016/j.bcp.2026.118106) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Llanos-Paez_2023_ER](drugs/drug_indacaterol/pd_Llanos_Paez_2023_ER.md) | Mean annual rate of moderate or severe exacerbations ← indacaterol · inhibition effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Llanos-Paez_2023_FEV1](drugs/drug_indacaterol/pd_Llanos_Paez_2023_FEV1.md) | Morning trough FEV1 ← indacaterol · direct Emax (saturable) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Naline_2007_EFS_contraction_inhibition](drugs/drug_indacaterol/pd_Naline_2007_EFS_contraction_inhibition.md) | Inhibition of EFS-induced cholinergic neural contraction ← indacaterol · direct Emax (saturable) effect | — | Naline E et al., Effect of indacaterol, a novel long-act…, The European respiratory jo… (2007) | [10.1183/09031936.00032806](https://doi.org/10.1183/09031936.00032806) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Naline_2007_relaxation](drugs/drug_indacaterol/pd_Naline_2007_relaxation.md) | Relaxant effect of isolated human bronchi at resting tone ← indacaterol · direct Emax (saturable) effect | — | Naline E et al., Effect of indacaterol, a novel long-act…, The European respiratory jo… (2007) | [10.1183/09031936.00032806](https://doi.org/10.1183/09031936.00032806) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Scola_2009_histamine_release](drugs/drug_indacaterol/pd_Scola_2009_histamine_release.md) | IgE-dependent release of histamine from human lung mast cells ← indacaterol · direct sigmoid Emax (Hill) effect | — | Scola AM et al., The long-acting beta-adrenoceptor agoni…, British journal of pharmaco… (2009) | [10.1111/j.1476-5381.2009.00178.x](https://doi.org/10.1111/j.1476-5381.2009.00178.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2012_FEV1](drugs/drug_indacaterol/pd_Wang_2012_FEV1.md) | trough FEV1 (dose response) ← indacaterol · direct Emax (saturable) effect | — | Wang Y et al., Limitations of model based dose selecti…, International journal of cl… (2012) | [10.5414/CP201758](https://doi.org/10.5414/CP201758) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2020_EROD](drugs/drug_indacaterol/pd_Wang_2020_EROD.md) | CYP1B1 inhibitory activity (EROD assay) ← indacaterol · inhibition effect | — | Wang Y et al., Carvedilol serves as a novel CYP1B1 inh…, European journal of medicin… (2020) | [10.1016/j.ejmech.2020.112235](https://doi.org/10.1016/j.ejmech.2020.112235) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Renard_2011_FEV1](drugs/drug_indacaterol/pd_Renard_2011_FEV1.md) | trough FEV1 (improvement vs placebo, steady state) ← indacaterol · direct Emax (saturable) effect | model (no simulator) | Renard D et al., Characterization of the bronchodilatory…, Respiratory research (2011) | [10.1186/1465-9921-12-54](https://doi.org/10.1186/1465-9921-12-54) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Renard_2011_FEV1_2](drugs/drug_indacaterol/pd_Renard_2011_FEV1_2.md) | trough FEV1 (patient-level, improvement over placebo) ← indacaterol · direct Emax (saturable) effect | model (no simulator) | Renard D et al., Characterization of the bronchodilatory…, Respiratory research (2011) | [10.1186/1465-9921-12-54](https://doi.org/10.1186/1465-9921-12-54) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gong_2022_trough_FEV1](drugs/drug_indacaterol/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← indacaterol/glycopyrronium · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=indacaterol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 64 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Demin_2016.pdf` | Demin I et al., Population pharmacokinetics of IND/GLY…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202558](https://doi.org/10.5414/CP202558) | [27049057](https://pubmed.ncbi.nlm.nih.gov/27049057) | Population PK model of indacaterol in COPD patients, but numeric parameter values (CL, V, covariate effects) are not present in the evidence text. |
| `Ren_2017.pdf` | Ren S et al., Pharmacokinetics and safety of indacate…, International journal of cl… (2017) | popPK | 7 | [10.5414/CP202640](https://doi.org/10.5414/CP202640) | [27841152](https://pubmed.ncbi.nlm.nih.gov/27841152) | Human NCA PK of indacaterol with numeric tmax, accumulation ratios, and effective half-life reported in the abstract; no CL/V or population model parameters given. |

<sub>queue written 2026-10-07T14:04:52.829007+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aparici_2012 | irrelevant | 1 | 0 | This is a pharmacodynamic characterization of abediterol; indacaterol is only a comparator and no PK parameters for indacaterol are reported. |
| popPK | Babu_2017 | irrelevant | 0 | 0 | This is a review of umeclidinium/vilanterol, not indacaterol, with no quantitative PK parameters. |
| popPK | Bartels_2013 | irrelevant | 0 | 0 | This is a population PK study of glycopyrronium, not indacaterol; no indacaterol parameters are reported. |
| popPK | Battram_2006 | irrelevant | 1 | 0 | This is a pharmacodynamic characterization (in vitro potency, duration of bronchoprotection) with no PK disposition parameters like CL, V, or ka for indacaterol. |
| popPK | Beeh_2011 | irrelevant | 0 | 0 | Clinical efficacy study of indacaterol in COPD with no PK parameters reported. |
| popPK | Borghardt_2016 | irrelevant | 0 | 0 | The study models olodaterol, a different drug; indacaterol is not the subject. |
| PGx | Cazzola_2014 | not_relevant | 2 | 3 | Mentions UGT1A1/CYP3A enzyme activity may affect indacaterol PK, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| popPK | Demin_2016 | relevant | 10 | 3 | Population PK model of indacaterol in COPD patients, but numeric parameter values (CL, V, covariate effects) are not present in the evidence text. |
| popPK | Diderichsen_2013 | irrelevant | 0 | 0 | This is a PKPD heart-rate model for PF-00610355, a different LABA; indacaterol is not the subject drug and no indacaterol PK parameters appear. |
| PGx | Fricke-Galindo_2022 | not_relevant | 5 | 2 | Only states drug labels indicate no influence of genetic variants on indacaterol PK; no effect size or parameter data reported. |
| popPK | Frojuello_2026 | irrelevant | 0 | 0 | Medicinal chemistry/SAR paper on MABA analogues; indacaterol is only a scaffold reference, no PK parameters reported. |
| popPK | Ge_2018 | irrelevant | 0 | 0 | Medicinal chemistry/pharmacology study of β2-agonist analogs; no PK parameters for indacaterol. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) MBMA of FEV1 for LABA/LAMA combinations, not a PK study; no indacaterol disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Hendrickx_2018 | relevant | 7 | 2 | Indacaterol is one of 12 bronchodilators modeled with a compartmental PK model, but its numeric parameter values (CL, CLD, k32, etc.) reside in supplementary tables (S2–S6) not included in the evidence; only an accumulation ratio (1.3–2.6-fold) appears. |
| popPK | Kempsford_2014 | irrelevant | 0 | 0 | This is a TQT study of fluticasone furoate/vilanterol; indacaterol is not the subject drug and no indacaterol PK parameters appear. |
| popPK | Llanos-Paez_2023 | irrelevant | 1 | 1 | This is a model-based meta-analysis of FEV1 and exacerbation rate in COPD trials; indacaterol appears only as a treatment arm with efficacy (ED50/Effref) parameters, not PK disposition parameters, and new parameter estimates are in supplementary material. |
| popPK | Mathioudakis_2026 | irrelevant | 0 | 0 | Clinical outcomes study of COPD exacerbations after treatment discontinuation; no PK parameters for indacaterol reported. |
| popPK | Naline_2007 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of bronchial relaxation; no PK disposition parameters for indacaterol. |
| popPK | Peach_2012 | irrelevant | 0 | 0 | A review of metabolism prediction databases/software with no indacaterol PK parameters. |
| popPK | Rebello_2022 | irrelevant | 3 | 1 | Systematic review of inhaled-drug models with no numeric indacaterol PK parameters in the evidence; any values would live in the reviewed articles/supplements not provided. |
| popPK | Renard_2011 | irrelevant | 1 | 0 | This is a pharmacodynamic (Emax) dose-response analysis of trough FEV1 in COPD patients, not a PK study; no clearance, volume, or disposition parameters for indacaterol are reported. |
| popPK | Scola_2009 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of mast cell mediator release; no PK parameters for indacaterol. |
| popPK | Summerhill_2008 | irrelevant | 0 | 0 | In vitro receptor pharmacodynamics assay (EC50/persistence), no PK disposition parameters for indacaterol. |
| popPK | Wang_2012 | irrelevant | 2 | 0 | This is a dose-response (Emax) efficacy model critique for COPD patients, not a PK study reporting clearance, volume, or other disposition parameters, and no numeric PK values appear. |
| popPK | Xing_2019 | irrelevant | 0 | 0 | Medicinal chemistry study of novel β2-agonists with no indacaterol PK parameters reported. |
| popPK | Xing_2021 | irrelevant | 0 | 0 | Medicinal chemistry study of β2-agonist analogues with no PK parameters for indacaterol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:04 UTC</sub>
