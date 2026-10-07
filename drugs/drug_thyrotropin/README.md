<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;thyrotropin&quot;}]"></div>

# thyrotropin

- **generic name:** thyrotropin
- **ATC codes:** `V04CJ01`
- **DrugBank:** [DB15263](https://go.drugbank.com/drugs/DB15263) · **PubChem:** not captured
- **groups:** investigational

## About

Thyrotropin (thyroid-stimulating hormone) is a hormone used as a diagnostic agent in tests of thyroid function. It is classed as investigational and is not an approved therapeutic drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q211544](https://www.wikidata.org/wiki/Q211544) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:19 | 27:04 | 0/0/0 | 1/2/0 | 0/0/0 | 716,469/15,444 | ollama / glm-5.3-flash | 38 | 8/28 | 38/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Boutin_2016_ALPL](drugs/drug_thyrotropin/pd_Boutin_2016_ALPL.md) | alkaline phosphatase (ALPL) expression ← thyrotropin (TSH) · stimulation effect | — | Boutin A et al., Multiple Transduction Pathways Mediate…, Endocrinology (2016) | [10.1210/en.2015-2040](https://doi.org/10.1210/en.2015-2040) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Bhargava_1986_3H_Me_TRH_binding](drugs/drug_thyrotropin/pd_Bhargava_1986_3H_Me_TRH_binding.md) | Specific binding of [3H-Me]TRH to rat brain membranes ← thyrotropin-releasing hormone (TRH) · inhibition effect | — | Bhargava HN et al., Evidence for opiate action at the brain…, Brain research (1986) | [10.1016/0006-8993(86)90570-6](https://doi.org/10.1016/0006-8993(86)90570-6) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Grasberger_2007_IP](drugs/drug_thyrotropin/pd_Grasberger_2007_IP.md) | TSH-induced inositol phosphate (IP) accumulation ← thyrotropin (TSH) · direct sigmoid Emax (Hill) effect | — | Grasberger H et al., A familial thyrotropin (TSH) receptor m…, The Journal of clinical end… (2007) | [10.1210/jc.2007-0366](https://doi.org/10.1210/jc.2007-0366) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Grasberger_2007_cAMP](drugs/drug_thyrotropin/pd_Grasberger_2007_cAMP.md) | TSH-induced cAMP accumulation ← thyrotropin (TSH) · direct sigmoid Emax (Hill) effect | — | Grasberger H et al., A familial thyrotropin (TSH) receptor m…, The Journal of clinical end… (2007) | [10.1210/jc.2007-0366](https://doi.org/10.1210/jc.2007-0366) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 481 matched, 155 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Afink_2010 | not_relevant | 0 | 0 | Paper characterizes a novel thyroid gene's expression; no gene variant effect on thyrotropin PK/PD parameters reported. |
| popPK | Akamizu_1993 | irrelevant | 0 | 0 | This is an in-vitro receptor binding/signaling study of chimeric TSH receptors in Cos-7 cells, with no pharmacokinetic disposition parameters (CL, V, half-life, PK model) for thyrotropin. |
| popPK | Albert_1990 | irrelevant | 0 | 0 | This is an in-vitro dopamine D2 receptor study; thyrotropin appears only as thyrotropin-releasing hormone in a prolactin secretion assay, with no PK parameters. |
| popPK | Allen_2011 | irrelevant | 0 | 0 | In-vitro receptor signaling study with no PK disposition parameters for thyrotropin. |
| popPK | Amer_2025 | irrelevant | 0 | 0 | This is a review of oral/buccal peptide delivery barriers and nano-formulations; thyrotropin is not the subject drug and no PK disposition parameters for it appear. |
| popPK | Apfelbaum_1987 | irrelevant | 0 | 0 | In vitro rat pituitary prolactin-release study; TRH is only a stimulus, no thyrotropin PK parameters reported. |
| popPK | Arevalo_2026 | irrelevant | 0 | 0 | This is a scoping review of ENA-001 (a different drug); thyrotropin is only mentioned as thyrotropin-releasing hormone among central stimulants, with no PK parameters for thyrotropin. |
| PGx | Berry_1993 | not_relevant | 3 | 5 | The Dio1 genotype alters T4/T3 metabolism, but thyrotropin (TSH) levels were reported as normal in 5'DI-deficient mice, so no pharmacogenomic effect on TSH PK/PD is shown. |
| popPK | Boutin_2016 | irrelevant | 0 | 0 | In vitro cell signaling study of TSH receptor pathways; no pharmacokinetic disposition parameters for thyrotropin. |
| popPK | Brun_2021 | irrelevant | 2 | 1 | This is a levothyroxine dosing/pharmacodynamic study; thyrotropin (TSH) is only a biomarker/target, and no numeric PK parameters for thyrotropin itself are reported (model details are in supplemental data not provided). |
| popPK | Butler_2017 | irrelevant | 0 | 0 | This is an analytical assay-variability study of DBS TSH measurement, not a pharmacokinetic study of thyrotropin disposition; no CL, V, or half-life parameters are reported. |
| popPK | Costagliola_2002 | irrelevant | 0 | 0 | This is an immunology paper about a monoclonal TSH receptor antibody; no pharmacokinetic parameters for thyrotropin are reported. |
| PGx | Deal_2021 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on PK/PD parameters of thyrotropin are reported; the study examines drug/hormone treatment effects in goldfish without pharmacogenomics. |
| popPK | Duntas_1990 | irrelevant | 0 | 8 | The paper reports PK of thyrotropin-releasing hormone (TRH), a different drug, not thyrotropin itself, though numeric t1/2, MCR, and Vd values are present in the abstract. |
| PGx | Duntas_2002 | not_relevant | 0 | 0 | No pharmacogenomic effect on TSH PK/PD parameters is reported; text covers thyroid disease and lipids only. |
| popPK | EFSA_2021 | irrelevant | 0 | 0 | This is an EFSA dietary risk assessment of HBCDDs with no thyrotropin PK parameters reported. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | This is an EFSA risk assessment on TBBPA with no thyrotropin PK parameters reported. |
| popPK | EFSA_2024_2 | irrelevant | 0 | 0 | This is an EFSA risk assessment of PBDEs in food with no thyrotropin PK parameters reported. |
| popPK | EFSA_2025 | irrelevant | 0 | 0 | This is a toxicological risk assessment of bromide; thyrotropin/thyroid hormones are only mentioned as effect endpoints, with no PK parameters for thyrotropin. |
| popPK | EFSA_2025_2 | irrelevant | 0 | 0 | This is a fluoride risk assessment with no thyrotropin PK parameters reported. |
| popPK | Eriksen_2020 | irrelevant | 0 | 0 | This is a nutrition/trial study measuring TSH as a thyroid function biomarker, not a pharmacokinetic study of thyrotropin; no disposition parameters exist. |
| PGx | Eriksson_1989 | not_relevant | 0 | 0 | No gene variant/genotype or pharmacogenomic effect on thyrotropin PK/PD parameters is reported; the paper describes pregnancy-related GH secretion patterns. |
| PGx | Eriksson_1989_2 | not_relevant | 0 | 0 | No gene variant/genotype or pharmacogenomic effect on thyrotropin PK/PD parameters is reported; the paper concerns GH secretion changes in pregnancy. |
| popPK | Fernández-Guarino_2026 | irrelevant | 0 | 0 | This is a review of psychotropic compounds in skin biology; thyrotropin is only mentioned as a cutaneous neuroendocrine factor, with no PK parameters. |
| popPK | Fisher_2023 | irrelevant | 2 | 1 | This is a BBDR endocrine model predicting endogenous TSH concentrations, not a pharmacokinetic disposition model of thyrotropin with CL/V/ka parameters, and no numeric PK values are present. |
| popPK | Fraile-Martínez_2026 | irrelevant | 0 | 0 | This is a narrative review of intermittent fasting with no thyrotropin PK parameters or any quantitative disposition data. |
| popPK | Friedman_1986 | irrelevant | 0 | 0 | In-vitro enzymology of TRH degradation in GH3 cells with no PK disposition parameters for thyrotropin. |
| PGx | Gottwald-Hostalek_2021 | not_relevant | 2 | 1 | Mentions deiodinase polymorphisms only as a hypothesis; no gene variant effect on a PK/PD parameter of thyrotropin is reported. |
| popPK | Grasberger_2007 | irrelevant | 0 | 0 | This is a receptor mutation/signaling study with no PK disposition parameters for thyrotropin. |
| popPK | Grommen_2006 | irrelevant | 0 | 0 | This is a receptor cloning/characterization study with no PK parameters for thyrotropin; TSH is only a ligand used in vitro. |
| popPK | Handa_2021 | irrelevant | 0 | 0 | The paper models thyroid hormone kinetics and TPO inhibition for methimazole/propylthiouracil, not thyrotropin disposition; no thyrotropin PK parameters are reported. |
| popPK | Hays_1979 | irrelevant | 2 | 3 | TSH is used only as a diagnostic/interventional agent; the compartmental model describes thyroidal pertechnetate trapping, not thyrotropin's own pharmacokinetics, though some numeric rate constants appear in the abstract. |
| PGx | Hennings_2024 | not_relevant | 0 | 0 | TSH is only used as a diagnostic biomarker for hypophosphatasia; no drug PK/PD parameter is linked to any gene variant. |
| popPK | Henningson_2026 | irrelevant | 0 | 0 | This is a spatial transcriptomics study of fluoxetine effects in mouse brain; thyrotropin (Trh gene) is only a gene expression marker, with no PK parameters. |
| popPK | Hidaka_1994 | irrelevant | 0 | 0 | In vitro receptor-binding/signaling study with no pharmacokinetic parameters for thyrotropin. |
| PGx | Hoermann_1989 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on PK or PD parameters; only protein-derived hCG variants studied. |
| popPK | Hoermann_2023 | irrelevant | 2 | 2 | This is a systems-biology ODE model of HPT-axis hormone regulation (TSH as endogenous regulator), not a PK study of thyrotropin disposition; parameter values live in supplementary material not provided. |
| popPK | Holthoff_2020 | irrelevant | 0 | 0 | This is a pharmacodynamic/efficacy study of TSHR fusion proteins in a mouse model; no PK disposition parameters for thyrotropin are reported. |
| popPK | Huidobro-Toro_1984 | irrelevant | 0 | 0 | In vitro guinea-pig ileum pharmacology study; thyrotropin releasing hormone is only a modulator of neurotensin EC50, no PK parameters for thyrotropin. |
| popPK | Ibad_2023 | irrelevant | 0 | 0 | This is an epidemiological association study of thyroid hormone levels and lean body mass, with no pharmacokinetic parameters for thyrotropin. |
| popPK | Kagatani_1998 | irrelevant | 2 | 3 | The subject drug is azetirelin, a thyrotropin-releasing hormone analog, not thyrotropin itself; PK values (bioavailability, two-compartment fit) are for azetirelin in rats. |
| popPK | Kaur_2005 | irrelevant | 0 | 0 | This is a medicinal chemistry/receptor pharmacology study of TRH analogues with EC50 values, not a pharmacokinetic study of thyrotropin with disposition parameters. |
| popPK | Kaur_2006 | irrelevant | 0 | 0 | In vitro receptor binding/activation study of TRH analogues; no pharmacokinetic parameters for thyrotropin. |
| popPK | Kaur_2007 | irrelevant | 0 | 0 | This is a medicinal chemistry/receptor pharmacology study of TRH analogs with EC50/Ki values, not a pharmacokinetic study of thyrotropin disposition. |
| popPK | Kervezee_2016 | irrelevant | 0 | 0 | This is a population PK study of levofloxacin, not thyrotropin; thyrotropin is not mentioned at all. |
| PGx | Klein_2014 | not_relevant | 2 | 3 | Review of TSHβ splice variant biology; no gene variant/genotype effect on PK/PD parameters of thyrotropin is reported. |
| popPK | Koch_2021 | irrelevant | 0 | 0 | The subject drug is levothyroxine (T4); thyrotropin (TSH) appears only as a biomarker/diagnostic measure, not as the drug whose PK is modeled. |
| popPK | Korevaar_2019 | irrelevant | 0 | 0 | This is a clinical meta-analysis of maternal thyroid function tests and preterm birth risk, with no pharmacokinetic parameters for thyrotropin. |
| popPK | Kosugi_1992 | irrelevant | 0 | 0 | In vitro receptor mutagenesis study of TSH receptor binding; no PK disposition parameters for thyrotropin. |
| popPK | Krieger_2015 | irrelevant | 0 | 0 | In vitro cell-culture study of TSH receptor signaling with no pharmacokinetic disposition parameters for thyrotropin. |
| PGx | Kuhla_2010 | not_relevant | 0 | 0 | Study of feed restriction effects on bovine pituitary hormones; no gene variant or pharmacogenomic effect on thyrotropin PK/PD parameters. |
| popPK | Kwon_2025 | irrelevant | 0 | 0 | This is a computational toxicology (Tox21/OECD QSAR) study; thyrotropin appears only as a receptor (TSHR) assay target, with no PK parameters for thyrotropin. |
| PGx | Köhrle_2023 | not_relevant | 2 | 3 | Review on trace elements and thyroid physiology; no gene variant effect on TSH PK/PD parameters reported. |
| PGx | Kühn_1992 | not_relevant | 3 | 4 | Genotype (dwarf vs normal) alters endocrine responses (T3, GH, selenium) to TRH, but no PK/PD parameter of thyrotropin itself is quantified. |
| PGx | Lacámara_2020 | not_relevant | 3 | 4 | Ala92-D2 polymorphism was present but allele dose did not correlate with the TSH/LT4 response phenotype, so no pharmacogenomic effect on a PK/PD parameter is reported. |
| popPK | Latif_2015 | irrelevant | 0 | 0 | This is a drug-discovery/screening study of small-molecule TSHR agonists (MS437/MS438), not a PK study of thyrotropin itself, and no numeric PK parameters for thyrotropin appear in the evidence. |
| popPK | Lauffer_2024 | irrelevant | 0 | 0 | This is a meta-analysis of neonatal free thyroxine reference intervals; thyrotropin is only mentioned as a diagnostic analyte, with no PK parameters for thyrotropin. |
| popPK | Laugwitz_1996 | irrelevant | 0 | 0 | In vitro mechanistic study of TSH receptor G-protein coupling; no PK disposition parameters for thyrotropin. |
| PGx | Lee_2017 | not_relevant | 0 | 0 | Study concerns KLF4 effects on chemoresistance in anaplastic thyroid cancer; thyrotropin receptor is only a differentiation marker, with no pharmacogenomic effect on TSH PK/PD parameters. |
| popPK | Leschik_2013 | irrelevant | 0 | 0 | This is an analytical/clinical comparison of TSH receptor antibody bioassays, not a pharmacokinetic study of thyrotropin; no disposition parameters for thyrotropin are reported. |
| PGx | Liu_2009 | not_relevant | 0 | 0 | Reports TRHR variants associated with lean body mass, not any PK/PD parameter of thyrotropin or a drug. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | This is a bioinformatics/network study of cytokine-disease gene associations with no pharmacokinetic parameters for thyrotropin or any drug. |
| popPK | Ludwig_2026 | irrelevant | 0 | 0 | This is a single-cell transcriptomics/neuroscience study of cagrilintide action in the DVC; no thyrotropin PK parameters are reported anywhere. |
| PGx | Makkonen_2024 | not_relevant | 2 | 3 | TSHR variants alter endogenous TSH signaling/thyroid function, not pharmacokinetic or pharmacodynamic parameters of an administered drug. |
| PGx | Mammen_2013 | not_relevant | 2 | 3 | No gene variant/genotype effect on TSH PK/PD is reported; risk factors are demographic (sex, ethnicity, smoking, baseline TSH), and HCV genotype is viral, not pharmacogenomic. |
| PGx | McDermott_2012 | not_relevant | 3 | 3 | D2 Thr92Ala polymorphism affects symptomatic response to T4/T3 therapy, not a PK or PD parameter of thyrotropin. |
| popPK | Monga_2011 | irrelevant | 0 | 0 | This is a medicinal chemistry/receptor pharmacology study of TRH analogues with no PK disposition parameters for thyrotropin. |
| popPK | Morris_1990 | irrelevant | 0 | 0 | In-vitro receptor binding study of synthetic TSH peptides with no pharmacokinetic disposition parameters. |
| popPK | Nagai_1980 | irrelevant | 0 | 0 | The evidence contains no paper content at all, only GROBID metadata, so no thyrotropin PK parameters are present. |
| popPK | Nagai_1985 | irrelevant | 2 | 4 | The paper reports PK (two-compartment half-lives, AUC) for TRH and its analog DN-1417 in rats, but TRH is thyrotropin-releasing hormone, not thyrotropin (TSH) itself; Table 1 parameter values are referenced but not shown. |
| popPK | Nagayama_1994 | irrelevant | 0 | 0 | In vitro receptor binding study with no pharmacokinetic disposition parameters for thyrotropin. |
| popPK | Nagayama_1998 | irrelevant | 0 | 0 | In vitro cell biology study of TSH receptor glycosylation; no pharmacokinetic parameters for thyrotropin. |
| PGx | Ouchi_2021 | not_relevant | 0 | 0 | No drug or PK/PD parameter of thyrotropin is studied; only gene expression and body temperature effects of an av-UCP SNP in chicks. |
| PGx | Panicker_2010 | not_relevant | 2 | 5 | Reports genetic association with endogenous serum TSH levels, not a pharmacokinetic or pharmacodynamic parameter of a drug. |
| PGx | Paragliola_2020 | not_relevant | 4 | 2 | Narrative review discussing DIO/SECISBP2 variants and thyroid hormone sensitivity, but no quantitative pharmacogenomic effect on a PK/PD parameter of thyrotropin is reported. |
| popPK | Perlman_1995 | irrelevant | 0 | 0 | In-vitro receptor mutagenesis study of TRH receptor binding, not a pharmacokinetic study of thyrotropin with disposition parameters. |
| PGx | Planck_2018 | not_relevant | 0 | 0 | Paper concerns vitamin D genetics in Graves disease, not pharmacogenomic effects on thyrotropin PK/PD parameters. |
| popPK | Rabab_2026 | irrelevant | 2 | 1 | This is a study of endogenous diurnal variation of TSH and thyroid hormones, not a pharmacokinetic study of administered thyrotropin with disposition parameters. |
| PGx | Radović_2010 | not_relevant | 2 | 3 | Xanthohumol (a compound, not a gene variant) alters thyrotropin levels in rats; no pharmacogenomic variant effect on a PK/PD parameter of thyrotropin is reported. |
| PGx | Rawal_2012 | not_relevant | 0 | 0 | TSH is an endogenous biomarker, not a drug; the paper reports genetic loci associated with serum TSH levels, not a pharmacogenomic effect on a PK/PD parameter of thyrotropin as a drug. |
| popPK | Rayalam_2006 | irrelevant | 1 | 1 | This is an in-vitro expression/purification and bioactivity study of recombinant feline TSH with no pharmacokinetic disposition parameters (no CL, V, half-life, or PK model). |
| popPK | Rhee_2017 | irrelevant | 0 | 0 | This is an observational cohort study of serum thyrotropin as a biomarker and quality-of-life outcomes, with no pharmacokinetic parameters for thyrotropin. |
| popPK | Sheehan_1995 | irrelevant | 0 | 0 | In vitro receptor-binding/bioassay study of synthetic TSH antagonist peptides with no pharmacokinetic disposition parameters for thyrotropin. |
| popPK | Simasko_1984 | irrelevant | 0 | 0 | In-vitro receptor binding study of TRH displacement, not a pharmacokinetic study of thyrotropin disposition. |
| popPK | Soldin_2004 | irrelevant | 0 | 0 | This is a clinical endocrine study of pregnancy hormone concentrations, not a pharmacokinetic study of thyrotropin; no disposition parameters are reported. |
| PGx | Spoke_2020 | not_relevant | 3 | 2 | Hypothesized CYP2D6 effect on ATD efficacy in a case report; no PK/PD parameter of thyrotropin quantified. |
| popPK | Stephens_1989 | irrelevant | 1 | 1 | This is a rat study of TRH-glycine's effect on gastric acid secretion with only a CSF conversion rate (0.0072%/min), not thyrotropin disposition parameters; no PK model or clearance/volume values are reported. |
| PGx | Sterenborg_2022 | not_relevant | 0 | 0 | The paper reports genetic associations with endogenous TSH/FT4 concentrations, not effects of gene variants on PK/PD parameters of thyrotropin administered as a drug. |
| popPK | Symeonides_2024 | irrelevant | 0 | 0 | This is an umbrella review of plastic-associated chemical exposures and human health outcomes; no thyrotropin pharmacokinetic parameters are reported (VCL/VSL here refer to sperm velocity measures, not PK clearance/volume). |
| popPK | Szabo_1986 | irrelevant | 0 | 0 | This is an in vitro/in vivo endocrine study of TRH-stimulated GH release with no pharmacokinetic disposition parameters for thyrotropin. |
| popPK | Takahashi_1990 | irrelevant | 0 | 0 | In-vitro cell culture study of TSH mitogenic signaling with no pharmacokinetic disposition parameters for thyrotropin. |
| PGx | Tamada_2018 | not_relevant | 2 | 3 | Mentions CYP3A4 inducers affecting dexamethasone metabolism, but no gene variant/genotype effect on TSH PK/PD parameters is reported. |
| popPK | Taub_1992 | irrelevant | 0 | 0 | This is an immunology/receptor-binding study of anti-idiotypic antibodies, with no pharmacokinetic disposition parameters for thyrotropin. |
| PGx | Thompson_2005 | not_relevant | 3 | 2 | Review abstract discussing GPCR mutations and pharmacogenetics conceptually, with no quantitative PK/PD effect of a variant on thyrotropin reported. |
| PGx | Thompson_2008 | not_relevant | 2 | 2 | Review of GPCR disease mutations mentions thyrotropin receptor but reports no pharmacogenomic effect on PK/PD parameters. |
| popPK | Tonacchera_1996 | irrelevant | 0 | 0 | In vitro receptor mutation study with no pharmacokinetic disposition parameters for thyrotropin. |
| PGx | Ukkola_2001 | not_relevant | 2 | 5 | TSH is an endogenous hormone measured as a PD response to exogenous TRH, not a drug whose PK/PD parameter is altered by genotype; UCP variants associate with TSH response but no fitted effect sizes are given. |
| popPK | Urayama_2001 | irrelevant | 2 | 3 | The subject drugs are TRH analogues (taltirelin, montirelin), not thyrotropin; only a t½ is given with no CL/V or PK model values, and no thyrotropin disposition parameters appear. |
| popPK | Van_2019 | irrelevant | 0 | 5 | The study reports PK parameters (tmax, half-lives, two-compartment model) for liothyronine (T3), a different drug, not thyrotropin. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | Narrative review on oral peptide delivery technologies; thyrotropin is not the subject drug and no PK parameter values are reported. |
| popPK | Venkateswarlu_2025 | irrelevant | 0 | 0 | This is a levothyroxine dosing study; thyrotropin (TSH) is only a biomarker/outcome, with no PK disposition parameters for thyrotropin. |
| PGx | Virreira_2019 | not_relevant | 0 | 0 | Study examines NBCe1 transporter expression regulated by TSH; no gene variant effect on TSH PK/PD parameters reported. |
| PGx | Wadman_2020 | not_relevant | 0 | 0 | Cochrane review of SMA drug treatments; no pharmacogenomic effects on PK/PD parameters of thyrotropin reported. |
| PGx | Wang_2021 | not_relevant | 2 | 3 | MR study of genetic variants on endogenous TSH/lipid levels, not a pharmacogenomic effect on PK/PD parameters of a thyrotropin drug. |
| PGx | Wang_2022 | not_relevant | 1 | 3 | MR study of genetic variants for TSH/FT4 levels vs cardiometabolic disease risk; no drug PK/PD parameter of thyrotropin is reported. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | This is a fecal SCFA study in horses; thyrotropin appears only as a diagnostic stimulation test, with no PK parameters. |
| popPK | Welsh_1986 | irrelevant | 0 | 0 | In vitro rat pituitary cell study of TRH effects on GH release; no PK disposition parameters for thyrotropin. |
| popPK | Wiggenhorn_2023 | irrelevant | 0 | 0 | This is a peptidomics study of capped peptides (CAP-TAC1, CAP-GDF15); thyrotropin is not the subject drug and no PK disposition parameters for it are reported. |
| popPK | Xin_2021 | irrelevant | 0 | 0 | The paper reports population PK of teprotumumab (an IGF-1R antibody), not thyrotropin; thyrotropin receptor is only mentioned mechanistically. |
| PGx | Ye_2017 | not_relevant | 0 | 0 | Toxicology study of DEHP effects on thyroid hormones; no gene variant/genotype altering PK/PD parameter of a drug. |
| popPK | Yokohama_1984 | irrelevant | 0 | 0 | The evidence contains no usable text or numeric PK parameters for thyrotropin; only a GROBID processing header is present. |
| popPK | Yokohama_1984_2 | irrelevant | 0 | 0 | The evidence contains no actual paper content (only a GROBID processing header), so no thyrotropin PK parameters or numeric values are present. |
| PGx | Zerfaoui_1996 | not_relevant | 0 | 0 | Paper discusses glycosylation effects on thyrotropin immunoassay recognition, with no gene variant/genotype effects on PK or PD parameters. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | Study examines triclosan effects on thyroid pathways; no gene variant effect on thyrotropin PK/PD parameters reported. |
| PGx | Zhang_2018_2 | not_relevant | 0 | 0 | Study examines selenium vs DEHP toxicity on thyroid hormones; no gene variant/genotype effect on thyrotropin PK/PD parameters. |
| popPK | van_2018 | irrelevant | 0 | 0 | The drug studied is quinpirole; TSH is only a PD biomarker, and no thyrotropin disposition parameters are reported. |
| PGx | van_2021 | not_relevant | 2 | 5 | Mendelian randomization of TSH/fT4 genetic variants on metabolomics and CAD risk; no drug PK/PD pharmacogenomic effect reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
