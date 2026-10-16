<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;defibrotide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Defibrotide_Tocchetti2016_reference&quot;,&quot;label&quot;:&quot;Tocchetti_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/Defibrotide_Tocchetti2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# defibrotide

- **generic name:** defibrotide
- **ATC codes:** `B01AX01`
- **DrugBank:** [DB04932](https://go.drugbank.com/drugs/DB04932) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Defibrotide, a mixture of single-stranded DNA fragments from pig intestinal mucosa, is an antithrombotic medicine used to treat hepatic veno-occlusive disease. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3704725](https://www.wikidata.org/wiki/Q3704725) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:03 | 5:38 | 1/2/0 | 0/0/0 | 0/0/0 | 310,292/25,369 | einfracz / qwen3.8-27b | 19 | 10/11 | 9/10 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | [Tocchetti_2016_reference](drugs/drug_defibrotide/Defibrotide_Tocchetti2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Tocchetti P et al., Pharmacokinetic profile of defibrotide…, Drug design, development an… (2016) | [10.2147/DDDT.S112181](https://doi.org/10.2147/DDDT.S112181) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Noseda_1986_reference](drugs/drug_defibrotide/Defibrotide_Noseda1986_reference.md) | — | 1-compartment (no model) | 3 | Noseda G et al., Pharmacokinetics of defibrotide in heal…, Haemostasis 16 Suppl (1986) | [10.1159/000215336](https://doi.org/10.1159/000215336) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.308), gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Pescador_1983_reference](drugs/drug_defibrotide/Defibrotide_Pescador1983_reference.md) | — | 1-compartment (no model) | 7 | Pescador R et al., Pharmacokinetics of Defibrotide and of…, Thrombosis research (1983) | [10.1016/0049-3848(83)90391-2](https://doi.org/10.1016/0049-3848(83)90391-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=defibrotide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADORA1 (target), ADORA2A (target), ADORA2B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 41 returned
- **screened:** 11  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gryglewski_1989.pdf` | Gryglewski RJ et al., Prostacyclin and the mechanism of actio…, Eicosanoids (1989) | pd | 4 | not captured | [2517030](https://www.ncbi.nlm.nih.gov/pubmed/2517030) | metadata signals extractable PD data (IC50) |
| `Zhang_2022.pdf` | Zhang F et al., Potential Anti-SARS-CoV-2 Activity of P…, Pharmaceuticals (Basel, Swi… (2022) | pd | 4 | [10.3390/ph15020258](https://doi.org/10.3390/ph15020258) | [35215371](https://www.ncbi.nlm.nih.gov/pubmed/35215371) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T22:58:36.337411+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnold_2023 | irrelevant | 0 | 0 | The study investigates heparan sulfate oligosaccharides, not defibrotide. |
| popPK | Asako_1994 | irrelevant | 0 | 0 | The paper studies histamine-induced leukocyte rolling and albumin clearance in rat mesentery and does not involve defibrotide or report pharmacokinetic parameters for it. |
| PD | Aziz_2018 | not_relevant | 0 | 0 | The provided text is an introductory section describing the clinical syndrome of Sinusoidal Obstruction Syndrome and diagnostic criteria; it contains no pharmacokinetic data, pharmacodynamic analysis, or exposure-response relationship for defibrotide. |
| PD | Bagal_2018 | not_relevant | 1 | 0 | The paper reports clinical outcomes for a fixed low dose of defibrotide in VOD but does not provide drug concentrations, PK/PD modeling, or numeric exposure-response parameters. |
| popPK | Bartelink_2016 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and outcomes, not defibrotide. |
| PD | Bartelink_2016 | not_relevant | 0 | 0 | The paper analyzes busulfan exposure-response relationships, not defibrotide. |
| popPK | Berti_1991 | irrelevant | 0 | 0 | This is a mechanistic study in rabbits focusing on prostacyclin release and renal protection, not a pharmacokinetic study reporting disposition parameters for defibrotide. |
| popPK | Bi_2023 | irrelevant | 0 | 0 | The paper focuses on curcumin nanoemulsions and does not involve defibrotide or its pharmacokinetics. |
| popPK | Botting_1989 | irrelevant | 0 | 0 | The paper is a review of vasoactive mediators (prostacyclin, EDRF, endothelin) and mentions defibrotide only as a drug that may release prostacyclin, without reporting any pharmacokinetic parameters. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper focuses on the preparation and properties of a thymol-chitooligosaccharide complex for food storage, with no mention of defibrotide or pharmacokinetic parameters. |
| popPK | Cella_2001 | irrelevant | 1 | 1 | The study focuses on the mechanism of action (TFPI release) rather than pharmacokinetic parameters, and only provides qualitative concentration trends for defibrotide without reporting clearance, volume, or half-life values. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is about sewage sludge pretreatment for lipid production and does not involve defibrotide or pharmacokinetics. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper studies zinc bioavailability using nanoparticles and does not involve defibrotide or pharmacokinetic parameters. |
| PGx | Coppell_2003 | not_relevant | 0 | 0 | The paper is a review of VOD pathogenesis and mentions defibrotide, but does not report any pharmacogenomic studies linking genetic variants to specific PK or PD parameters of defibrotide. |
| PD | Glusa_2001 | not_relevant | 2 | 1 | The paper reports an IC50 for defibrotide as an inhibitor of cathepsin G-induced relaxation in a biological assay, but it does not report a pharmacodynamic model, exposure-response relationship, or dose-response curve for defibrotide's own therapeutic effect. |
| popPK | Gross_1987 | irrelevant | 0 | 0 | The paper studies the clearance of rat liver secretory glycoproteins and does not involve defibrotide. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper studies naringin nanoparticles and does not involve defibrotide or its pharmacokinetics. |
| popPK | Halbeek_1993 | irrelevant | 0 | 0 | The paper is a review on NMR spectroscopy for glycoprotein characterization and does not contain any pharmacokinetic data for defibrotide. |
| popPK | Harenberg_2010 | irrelevant | 0 | 0 | The paper discusses idraparinux and idrabiotaparinux, not defibrotide. |
| popPK | Hong_2025 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of cyclophosphamide, not defibrotide. |
| PD | Hong_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cyclophosphamide and its metabolites, not defibrotide; while defibrotide is mentioned in supplementary tables regarding VOD treatment, no pharmacodynamic or exposure-response analysis for defibrotide is presented. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The study focuses on curcumin as a model drug for solid dispersion formulation, not defibrotide. |
| popPK | Imber_1981 | irrelevant | 0 | 0 | The paper studies the clearance of alpha 2-macroglobulin in mice, not the pharmacokinetics of defibrotide. |
| popPK | Koehl_2007 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of anti-angiogenic potential, not a pharmacokinetic study, and reports no quantitative PK parameters for defibrotide. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper studies lutein-stachyose derivatives and does not involve defibrotide. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study focuses on the oral delivery of doxorubicin, not defibrotide. |
| popPK | Loganathan_2023 | irrelevant | 0 | 0 | The paper is a review on non-coding RNAs and contains no pharmacokinetic data or parameters for defibrotide. |
| PD | Loganathan_2023 | not_relevant | 0 | 0 | The paper is a review on non-coding RNAs as biomarkers and therapeutic targets and does not contain any pharmacodynamic or exposure-response analysis for defibrotide. |
| popPK | Lu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sodium oligomannate, not defibrotide. |
| popPK | Lunghi_2025 | irrelevant | 0 | 0 | The paper investigates the effects of OligoGM1 on microglial activation and alpha-synuclein clearance in an in vitro model, and does not involve defibrotide or report any pharmacokinetic parameters. |
| popPK | Magner_1984 | irrelevant | 0 | 0 | The paper is a mechanistic study on carbohydrate processing of thyrotropin in mouse pituitary tumors and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Natale_2022 | irrelevant | 0 | 0 | This is a Cochrane review on antiplatelet agents in CKD; defibrotide is only mentioned as a comparator in limited data and no PK parameters are reported. |
| PD | Noseda_1986 | not_relevant | 0 | 0 | The study reports dose-dependent pharmacokinetic parameters (saturation of elimination) but provides no pharmacodynamic effect data or concentration-effect relationship. |
| popPK | Oltolini_2023 | irrelevant | 0 | 0 | The paper is a clinical case report regarding hematopoietic stem cell transplantation where defibrotide is used as a therapeutic agent for veno-occlusive disease, with no pharmacokinetic modeling or quantitative disposition parameters reported. |
| PD | Palmer_1993 | not_relevant | 2 | 0 | The paper is a clinical review that provides a general description of defibrotide's pharmacodynamic mechanisms (e.g., increased prostaglandins, fibrinolytic activity) and PK parameters (half-life, AUC), but it does not report specific numeric exposure-response or dose-response parameters (such as EC50, Emax, or regression slopes) linking concentration to effect. |
| popPK | Pennesi_2022 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of inotuzumab ozogamicin (InO), not defibrotide. |
| popPK | Pérez-González_2025 | irrelevant | 0 | 0 | The study focuses on a dexamethasone nanosystem and does not involve defibrotide or report any pharmacokinetic parameters for it. |
| popPK | Rigotti_1991 | irrelevant | 0 | 0 | The study evaluates renal function and prostanoid excretion, not the pharmacokinetic disposition parameters of defibrotide. |
| popPK | Shah_2018 | irrelevant | 0 | 0 | The paper is a case series discussing Sinusoidal Obstruction Syndrome and defibrotide's FDA approval, but it does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for defibrotide. |
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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:58 UTC</sub>
