<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;defibrotide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Defibrotide_Noseda1986_reference&quot;,&quot;label&quot;:&quot;Noseda_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/Defibrotide_Noseda1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Defibrotide_Tocchetti2016_reference&quot;,&quot;label&quot;:&quot;Tocchetti_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/Defibrotide_Tocchetti2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# defibrotide

- **generic name:** defibrotide
- **ATC codes:** `B01AX01`
- **DrugBank:** [DB04932](https://go.drugbank.com/drugs/DB04932) · **PubChem:** none
- **groups:** approved, investigational

## About

Defibrotide, a mixture of single-stranded DNA fragments from pig intestinal mucosa, is an antithrombotic medicine used to treat hepatic veno-occlusive disease. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3704725](https://www.wikidata.org/wiki/Q3704725) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Noseda_1986_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy volunteers, n = ,
  "condition": "healthy",
  "species": "human",
  "compounds": [
    {"name": "defibrotide", "role": "parent", "dosed": "yes", "measured": "yes", "has_parameters": "yes"}
  ],
  "links": []}  # Note: JSON cannot contain lists of strings separated by pipes as per YAML schema, converting to array of objects or strings as appropriate for JSON schema. The prompt asks for JSON object matching supplied schema. I will format the compounds as a list of strings or objects based on standard JSON interpretation of the requested format. Given the strict instruction "Put each value in its OWN named field", I will use a list of objects for compounds to be safe, or a list of strings if the schema implies simple values. The prompt example shows a YAML list. I will convert to a JSON array of strings to match the 'flat' nature or objects. Let's use objects for clarity or strings if that's how 'flat' is interpreted in JSON. Usually 'flat' JSON means no deep nesting. I will use an array of objects for compounds. Wait, the prompt says "Output ONLY a JSON object matching the supplied schema." It doesn't give the schema, but implies a key-value structure. I will map the keys directly. For compounds and links, I will use arrays.. [Run it in the simulator](drugs/drug_defibrotide/Defibrotide_Noseda1986_reference.md?tab=Simulation) · [record](drugs/drug_defibrotide/Defibrotide_Noseda1986_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Noseda_1986 · V ·/kg</text><circle cx="339.1" cy="30.0" r="4" fill="#2e7d32"><title>Noseda_1986 · V ·/kg: 2.667 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Tocchetti_2016 · V</text><circle cx="463.1" cy="46.0" r="4" fill="#2e7d32"><title>Tocchetti_2016 · V: 6.03 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Noseda_1986_reference](drugs/drug_defibrotide/Defibrotide_Noseda1986_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Noseda G et al., Pharmacokinetics of defibrotide in heal…, Haemostasis 16 Suppl (1986) | [10.1159/000215336](https://doi.org/10.1159/000215336) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tocchetti_2016_reference](drugs/drug_defibrotide/Defibrotide_Tocchetti2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Tocchetti P et al., Pharmacokinetic profile of defibrotide…, Drug design, development an… (2016) | [10.2147/DDDT.S112181](https://doi.org/10.2147/DDDT.S112181) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Pescador_1983_reference](drugs/drug_defibrotide/Defibrotide_Pescador1983_reference.md) | — | 2-compartment (no model) | 8 | Pescador R et al., Pharmacokinetics of Defibrotide and of…, Thrombosis research (1983) | [10.1016/0049-3848(83)90391-2](https://doi.org/10.1016/0049-3848(83)90391-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=defibrotide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADORA1 (target), ADORA2A (target), ADORA2B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:43 | 2:50 | 2/1/0 | 0/0/0 | 0/0/0 | 55,411/11,183 | einfracz / qwen3.8-27b | 19 | 10/11 | 9/10 | 0 |

## Coverage

- **PubMed hits:** 48 matched, 41 returned
- **screened:** 11  ·  **relevant:** 4
- **records:** 3  ·  extracted 2  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gryglewski_1989.pdf` | Gryglewski RJ et al., Prostacyclin and the mechanism of actio…, Eicosanoids (1989) | pd | 4 |  | [2517030](https://www.ncbi.nlm.nih.gov/pubmed/2517030) | metadata signals extractable PD data (IC50) |
| `Zhang_2022.pdf` | Zhang F et al., Potential Anti-SARS-CoV-2 Activity of P…, Pharmaceuticals (Basel, Swi… (2022) | pd | 4 | [10.3390/ph15020258](https://doi.org/10.3390/ph15020258) | [35215371](https://www.ncbi.nlm.nih.gov/pubmed/35215371) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05 14:22 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnold_2023 | irrelevant | 0 | 0 | The study investigates heparan sulfate oligosaccharides, not defibrotide. |
| popPK | Asako_1994 | irrelevant | 0 | 0 | The paper studies histamine-induced leukocyte rolling and albumin clearance in rat mesentery and does not involve defibrotide or report pharmacokinetic parameters for it. |
| PD | Aziz_2018 | not_relevant | 0 | 0 | The provided text is an introductory section describing the clinical syndrome of Sinusoidal Obstruction Syndrome and diagnostic criteria; it contains no pharmacokinetic data, pharmacodynamic analysis, or exposure-response relationship for defibrotide. |
| PD | Bagal_2018 | not_relevant | 1 | 0 | The paper reports clinical outcomes for a fixed low dose of defibrotide in VOD but does not provide drug concentrations, PK/PD modeling, or numeric exposure-response parameters. |
| popPK | Bartelink_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and clinical outcomes of busulfan, not defibrotide. |
| PD | Bartelink_2016 | not_relevant | 0 | 0 | The paper analyzes busulfan exposure-response relationships, not defibrotide. |
| popPK | Berti_1991 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic effects of defibrotide on prostacyclin release and renal function in rabbits, not on quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bi_2023 | irrelevant | 0 | 0 | The paper focuses on curcumin nanoemulsions and does not involve defibrotide or its pharmacokinetics. |
| popPK | Botting_1989 | irrelevant | 0 | 0 | The paper is a review of endothelial mediators and mentions defibrotide only as a drug that may release prostacyclin, without reporting any pharmacokinetic parameters. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper focuses on the preparation and properties of a thymol-chitooligosaccharide complex for food storage, with no mention of defibrotide or pharmacokinetic parameters. |
| popPK | Cella_2001 | irrelevant | 2 | 1 | The study focuses on the mechanism of TFPI release and reports only a single plasma concentration point for defibrotide, lacking a full pharmacokinetic model or standard disposition parameters like clearance and volume. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is about sewage sludge pretreatment for lipid production and does not involve defibrotide or pharmacokinetics. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper studies zinc bioavailability using nanoparticles and does not involve defibrotide or pharmacokinetic parameters. |
| PGx | Coppell_2003 | not_relevant | 0 | 0 | The paper is a review of the pathogenesis of hepatic veno-occlusive disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of defibrotide. |
| PD | Glusa_2001 | not_relevant | 2 | 1 | The paper reports an IC50 for defibrotide as an inhibitor of cathepsin G-induced relaxation in a biological assay, but it does not report a pharmacodynamic model, exposure-response relationship, or dose-response curve for defibrotide's own therapeutic effect. |
| popPK | Gross_1987 | irrelevant | 0 | 0 | The paper studies the clearance of rat liver secretory glycoproteins and does not involve defibrotide. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper studies naringin nanoparticles and does not involve defibrotide or its pharmacokinetics. |
| popPK | Halbeek_1993 | irrelevant | 0 | 0 | The paper is a review on NMR spectroscopy for glycoprotein characterization and does not contain any pharmacokinetic data for defibrotide. |
| popPK | Harenberg_2010 | irrelevant | 0 | 0 | The paper discusses idraparinux and idrabiotaparinux, not defibrotide. |
| popPK | Hong_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclophosphamide, not defibrotide. |
| PD | Hong_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cyclophosphamide and its metabolites, not defibrotide; while defibrotide is mentioned in supplementary tables regarding VOD treatment, no pharmacodynamic or exposure-response analysis for defibrotide is presented. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The study focuses on curcumin as a model drug for solid dispersion formulation, not defibrotide. |
| popPK | Imber_1981 | irrelevant | 0 | 0 | The paper studies the clearance of alpha 2-macroglobulin in mice, not the pharmacokinetics of defibrotide. |
| popPK | Koehl_2007 | irrelevant | 0 | 0 | The study focuses on the anti-angiogenic mechanism of defibrotide in vitro and in vivo, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life values. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper studies lutein-stachyose derivatives and does not involve defibrotide. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study focuses on the oral delivery of doxorubicin, not defibrotide. |
| popPK | Loganathan_2023 | irrelevant | 0 | 0 | The paper is a review of non-coding RNAs in human health and disease and contains no pharmacokinetic data for defibrotide. |
| PD | Loganathan_2023 | not_relevant | 0 | 0 | The paper is a review on non-coding RNAs as biomarkers and therapeutic targets and does not contain any pharmacodynamic or exposure-response analysis for defibrotide. |
| popPK | Lu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sodium oligomannate, not defibrotide. |
| popPK | Lunghi_2025 | irrelevant | 0 | 0 | The paper investigates the effects of OligoGM1 on microglial activation and alpha-synuclein clearance in an in vitro model, and does not involve defibrotide or report any pharmacokinetic parameters. |
| popPK | Magner_1984 | irrelevant | 0 | 0 | The paper is a mechanistic study on carbohydrate processing of thyrotropin in mouse pituitary tumors and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Natale_2022 | irrelevant | 0 | 0 | This is a Cochrane review of antiplatelet agents in CKD that mentions defibrotide only as a comparator in limited head-to-head data, without reporting any pharmacokinetic parameters. |
| PD | Noseda_1986 | not_relevant | 0 | 0 | The study reports dose-dependent pharmacokinetic parameters (saturation of elimination) but provides no pharmacodynamic effect data or concentration-effect relationship. |
| popPK | Oltolini_2023 | irrelevant | 0 | 0 | The paper is a clinical case report regarding SARS-CoV-2 management in a transplant patient where defibrotide is mentioned only as a treatment for veno-occlusive disease, with no pharmacokinetic parameters reported. |
| PD | Palmer_1993 | not_relevant | 2 | 0 | The paper is a clinical review that provides a general description of defibrotide's pharmacodynamic mechanisms (e.g., increased prostaglandins, fibrinolytic activity) and PK parameters (half-life, AUC), but it does not report specific numeric exposure-response or dose-response parameters (such as EC50, Emax, or regression slopes) linking concentration to effect. |
| popPK | Pennesi_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of inotuzumab ozogamicin, not defibrotide. |
| popPK | Pérez-González_2025 | irrelevant | 0 | 0 | The study focuses on a dexamethasone nanosystem and does not involve defibrotide or report any pharmacokinetic parameters for it. |
| popPK | Rigotti_1991 | irrelevant | 0 | 0 | The study measures renal function and urinary prostanoid excretion, not the pharmacokinetic disposition parameters (CL, V, t1/2) of defibrotide. |
| popPK | Shah_2018 | irrelevant | 0 | 0 | The paper is a case series discussing Sinusoidal Obstruction Syndrome and mentions defibrotide only as a treatment, without reporting any pharmacokinetic parameters for it. |
| popPK | Strous_1985 | irrelevant | 0 | 0 | The paper studies the effect of monensin on glycosylation in HeLa cells and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Tanabe_2020 | irrelevant | 0 | 0 | The paper studies the bioavailability of maltobionic acid, not defibrotide. |
| popPK | Thotakura_1991 | irrelevant | 0 | 0 | The paper studies recombinant human thyrotropin (TSH), not defibrotide. |
| popPK | Tian_2024 | irrelevant | 0 | 0 | The paper studies xylooligosaccharides from rice husks and contains no information regarding defibrotide or its pharmacokinetics. |
| popPK | Tollefsen_1988 | irrelevant | 0 | 0 | The paper studies the clearance of human glycosylated alpha-amylase in rats, not defibrotide. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper focuses on the synthesis of heparan sulfate oligosaccharides and their anticoagulant properties, not the pharmacokinetics of defibrotide. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper focuses on the analysis of heparan sulfate structural motifs and heparin/enoxaparin, not the pharmacokinetics of defibrotide. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper studies heparan sulfate in Alzheimer's disease models and does not involve defibrotide or its pharmacokinetics. |
| popPK | Wu_2022_2 | irrelevant | 0 | 0 | The paper investigates heparan sulfate for Alzheimer's disease and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Wyss_2020 | irrelevant | 0 | 0 | The paper focuses on the renal clearance of polymeric nanoparticles and does not involve defibrotide or report any pharmacokinetic parameters for it. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text contains abstracts for oxycodone, esomeprazole/IL-6, daridorexant, bile acids, and atorvastatin, but does not contain any information regarding defibrotide. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for Pentosan Polysulfate (PPS) and Mucopolysaccharide Polysulfate (MPS), but only mentions defibrotide as part of the tested library without providing any specific numeric PD parameters (IC50, Emax, etc.) or concentration-effect data for it. |
| popPK | de_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for busulfan, not defibrotide. |
| PD | de_2015 | not_relevant | 0 | 0 | The paper focuses on busulfan PK and dosing algorithms, not defibrotide, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for defibrotide. |
| popPK | unknown_2015_2 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | unknown_2015_2 | not_relevant | 0 | 0 | The provided text is a header for a poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts for G-CSF, Clofarabine/Mitoxantrone, DFMO, Genomic Profiling, Gemcitabine/Nab-paclitaxel, Nanomedicine, and CVL management, but does not contain any information regarding defibrotide or its pharmacodynamic parameters. |
| popPK | unknown_2016_2 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2016_2 | not_relevant | 0 | 0 | The provided text is a header ("Physicians Abstracts") and contains no scientific content, data, or analysis regarding defibrotide or any pharmacodynamic relationship. |
| popPK | unknown_2016_3 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | unknown_2016_3 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text contains abstracts regarding VZV vaccine, fludarabine exposure, G-CSF, plerixafor, and CD34 counts, but does not contain any information or data regarding defibrotide. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text contains abstracts regarding bone marrow transplantation outcomes and risk scores, with no mention of defibrotide or any pharmacodynamic modeling. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdefibrotide%5D&body=Drug%3A%20defibrotide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_defibrotide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-13 12:42 UTC</sub>
