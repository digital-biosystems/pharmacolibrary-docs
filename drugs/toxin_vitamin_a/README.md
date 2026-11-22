<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Vitamin A&quot;}]"></div>

# Vitamin A

- **generic name:** Vitamin A
- **T3DB:** [T3D2699](http://www.t3db.ca/toxins/T3D2699) · **DrugBank:** [DB00162](https://go.drugbank.com/drugs/DB00162) · **PubChem:** [CID 445354](https://pubchem.ncbi.nlm.nih.gov/compound/445354)
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Vitamin A (retinol) is a yellow fat-soluble, antioxidant vitamin important in vision and bone growth. It belongs to the family of chemical compounds known as retinoids. Retinol is ingested in a precursor form; animal sources (milk and eggs) contain retinyl esters, whereas plants (carrots, spinach) contain pro-vitamin A carotenoids. …

- **Category:** Drug, Household Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** oral, readily absorbed from the normal gastrointestinal tract
- **Sources and uses:** For the treatment of vitamin A deficiency. Vitamin A helps regulate the immune system, which helps prevent or fight off infections by making white blood cells that destroy harmful bacteria and viruses.
- **Mechanism of toxicity:** Vision:Vitamin A (all-<i>trans</i> retinol) is converted in the retina to the 11-<i>cis</i>-isomer of retinaldehyde or 11-<i>cis</i>-retinal. 11-<i>cis</i>-retinal functions in the retina in the transduction of light into the neural signals necessary for vision. 11-<i>cis</i>-retinal, while attached to opsin in rhodopsin is isomerized to all-<i>trans</i>-retinal by light. This is the event that triggers the nerve impulse to the brain which allows for the perception of light. …
- **Treatment:** The treatment of hypervitaminosis A consists of immediate withdrawal of the vitamin along with symptomatic and supportive treatment.
- **Detected in:** blood, saliva

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2699">T3DB T3D2699</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 68-26-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17336">ChEBI 17336</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vitamin_a | metabolite | 286.459 | C20H30O | PubChem | [445354](https://pubchem.ncbi.nlm.nih.gov/compound/445354) | Belyaeva_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="in vitro" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q1, Q66, Q3 — no SI value to build…</sub> | [Belyaeva_2019_reference](drugs/toxin_vitamin_a/VitaminA_Belyaeva2019_reference.md) | held back | 1-compartment, IV | 3 | Belyaeva OV et al., Generation of Retinaldehyde for Retinoi…, Biomolecules (2019) | [10.3390/biom10010005](https://doi.org/10.3390/biom10010005) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Escaron_2009_reference](drugs/toxin_vitamin_a/VitaminA_Escaron2009_reference.md) | — | 1-compartment (no model) | 0 | Escaron AL et al., Plasma turnover of 3,4-didehydroretinol…, Journal of lipid research (2009) | [10.1194/jlr.M800479-JLR200](https://doi.org/10.1194/jlr.M800479-JLR200) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ford_2019_reference](drugs/toxin_vitamin_a/VitaminA_Ford2019_reference.md) | — | 1-compartment (no model) | 0 | Ford JL et al., Addition of Vitamin A Intake Data durin…, The Journal of nutrition (2019) | [10.1093/jn/nxz112](https://doi.org/10.1093/jn/nxz112) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 22:38 | 45:35 | 1/2/0 | 0/0/0 | 0/0/0 | 1,455,552/82,587 | ollama / glm-5.3-flash | 94 | 13/71 | 93/1 | 0 |

## Coverage

- **PubMed hits:** 717 matched, 214 returned
- **screened:** 9  ·  **relevant:** 9
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Escaron_2009.pdf` | Escaron AL et al., Plasma turnover of 3,4-didehydroretinol…, Journal of lipid research (2009) | popPK | 8 | [10.1194/jlr.M800479-JLR200](https://doi.org/10.1194/jlr.M800479-JLR200) | [19043141](https://pubmed.ncbi.nlm.nih.gov/19043141) | Compartmental model with fractional transfer coefficients for vitamin A metabolism in rats, though full numeric FTC values likely in supplementary materials not shown here. |
| `Belyaeva_2005.pdf` | Belyaeva OV et al., Biochemical properties of purified huma…, Biochemistry (2005) | popPK | 7 | [10.1021/bi050226k](https://doi.org/10.1021/bi050226k) | [15865448](https://pubmed.ncbi.nlm.nih.gov/15865448) | Reports numeric Km and kcat values for human RDH12 acting on retinoids (vitamin A metabolites), measured in vitro with purified enzyme rather than in vivo. |
| `Hodges_2016.pdf` | Hodges JK et al., Vitamin A Supplementation Transiently I…, The Journal of nutrition (2016) | popPK | 7 | [10.3945/jn.116.234310](https://doi.org/10.3945/jn.116.234310) | [27534819](https://pubmed.ncbi.nlm.nih.gov/27534819) | Neonatal rat tissue distribution and retention time course of retinol after VA dosing is toxicokinetically relevant, but detailed numeric retinol concentrations likely reside in figures/graphics provided only partly in the abstract. |
| `Mao_2000.pdf` | Mao GE et al., Teratogenicity, tissue distribution, an…, Toxicology and applied phar… (2000) | popPK | 7 | [10.1006/taap.1999.8828](https://doi.org/10.1006/taap.1999.8828) | [10662603](https://pubmed.ncbi.nlm.nih.gov/10662603) | A mouse study of retinol (vitamin A) metabolism showing tissue distribution of retinol metabolites (14-HRR, AR, DHR, retinoic acid) after dosing, but concentrations appear as qualitative descriptions without explicit numeric values in the provided evidence. |
| `Schweigert_1995.pdf` | Schweigert FJ et al., Plasma transport and tissue distributio…, International journal for v… (1995) | popPK | 7 |  | [7591538](https://pubmed.ncbi.nlm.nih.gov/7591538) | Oral radiolabeled retinol in pigs with plasma time course and quantified tissue distribution (dpm/g) reported directly in the abstract; no kinetic constants like half-life or rate constants, but disposition/retention data are present. |
| `Sass_1997.pdf` | Sass JO et al., Effects of all-trans-retinoyl-beta-D-gl…, Archives of toxicology (1997) | popPK | 6 | [10.1007/s002040050368](https://doi.org/10.1007/s002040050368) | [9049050](https://pubmed.ncbi.nlm.nih.gov/9049050) | In vitro mouse limb bud cell study reporting retinoid toxicokinetics (medium/cell concentrations, isomer ratios) for vitamin A derivatives, but the numeric values appear only in figures/tables not included in the evidence. |
| `Schweigert_1998.pdf` | Schweigert FJ et al., Effect of age on the levels of retinol…, International journal for v… (1998) | popPK | 6 |  | [9706498](https://pubmed.ncbi.nlm.nih.gov/9706498) | Quantitative tissue/plasma distribution and accumulation data for vitamin A in dogs with some numeric values given, though limited kinetic parameters and some detail may lie in the full paper figures. |
| `Smith_1973.pdf` | Smith JE et al., The plasma transport and metabolism of…, The Biochemical journal (1973) | popPK | 6 | [10.1042/bj1320821](https://doi.org/10.1042/bj1320821) | [4721615](https://pubmed.ncbi.nlm.nih.gov/4721615) | Rat study of retinoic acid (vitamin A metabolite) transport and tissue distribution with some numeric values (7–9 µg body recovery, % of label), but no kinetic rate constants, half-lives, or model parameters; detailed values may rest in the full data not shown. |
| `Su_1998.pdf` | Su J et al., cDNA cloning, tissue distribution, and…, The Journal of biological c… (1998) | popPK | 6 | [10.1074/jbc.273.28.17910](https://doi.org/10.1074/jbc.273.28.17910) | [9651397](https://pubmed.ncbi.nlm.nih.gov/9651397) | Mouse enzyme (CRAD2) kinetic parameters (V/K0.5 values, IC50) for retinol substrates are reported, counting as metabolism kinetics for vitamin A, though it is enzyme-level data rather than whole-body disposition. |
| `Morita_1982_2.pdf` | Morita A et al., Effect of chronic immobilization stress…, The Journal of nutrition (1982) | popPK | 5 | [10.1093/jn/112.4.789](https://doi.org/10.1093/jn/112.4.789) | [7069513](https://pubmed.ncbi.nlm.nih.gov/7069513) | Reports tissue distribution changes (% change in adrenal vitamin A) over a 14-day time course in rats, but most numeric values (liver, kidney, testes amounts, serum levels) appear to be in figures/tables not included. |
| `Nau_1995.pdf` | Nau H, Chemical structure--teratogenicity rela…, Toxicology letters 82-83:97… (1995) | popPK | 5 | [10.1016/0378-4274(95)03624-5](https://doi.org/10.1016/0378-4274(95)03624-5) | [8597170](https://pubmed.ncbi.nlm.nih.gov/8597170) | Study reports toxicokinetic parameters (metabolism, placental transfer, half-lives) of retinoids for teratogenicity risk assessment, but the evidence here is only an abstract with no numeric values, which presumably reside in the full text/figures. |
| `Sharma_1987.pdf` | Sharma HS et al., Distribution of vitamin A in various or…, Zeitschrift fur Ernahrungsw… (1987) | popPK | 5 | [10.1007/BF02023818](https://doi.org/10.1007/BF02023818) | [3111110](https://pubmed.ncbi.nlm.nih.gov/3111110) | Rat tissue distribution and plasma levels of vitamin A are reported, but the numeric parameter values are not present in the evidence provided (likely in tables/figures not included). |
| `Sundaresan_1975.pdf` | Sundaresan PR et al., Tissue distribution of retinol and its…, The Biochemical journal (1975) | popPK | 5 | [10.1042/bj1520099](https://doi.org/10.1042/bj1520099) | [1212229](https://pubmed.ncbi.nlm.nih.gov/1212229) | Reports quantitative tissue distribution and radioactivity counts of labelled retinol in rats, though numeric values (percentages/counts) appear only partially summarized in the abstract text with full numbers likely in the paper body/figures. |

<sub>queue written 2026-11-14 22:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akseer_2023 | irrelevant | 0 | 0 | Dietary diversity survey study; vitamin A appears only as a food group category, with no kinetic parameters of any kind. |
| PGx | Amaeze_2023 | not_relevant | 4 | 5 | CYP2D6 genotype/activity relates to dextromethorphan metabolism and atRA correlation, but no PGx effect on vitamin A PK/PD parameters is reported. |
| PGx | Amengual-Cladera_2025 | not_relevant | 2 | 3 | Vitamin A is treated as a dietary exposure, not a drug; effects are on malformation incidence (retinol serum levels only from diet), not gene-variant-driven PK/PD parameter changes. |
| popPK | Andrews_2014 | irrelevant | 0 | 0 | This is a fish gene-expression study of noise exposure; vitamin A appears only via transthyretin mention with no kinetic parameters for vitamin A. |
| popPK | Annu_2021 | irrelevant | 0 | 0 | The study concerns vitamin D status effects on dexamethasone and dasatinib pharmacokinetics in mice; vitamin A is not the subject substance and no vitamin A kinetic parameters appear. |
| PGx | Ardura-Garcia_2021 | not_relevant | 0 | 0 | Conference highlights on paediatric respiratory medicine; vitamin A deficiency exposure mentioned only as risk factor, no pharmacogenomic PK/PD effects reported. |
| PGx | Barthelemy_2026 | not_relevant | 3 | 4 | Genetic re-analysis (USH2A, RHO, RPGR subtypes) found no vitamin A treatment effect on ERG decline; no genotype-specific PK/PD effect size for vitamin A is reported. |
| popPK | Benítez-González_2025 | irrelevant | 0 | 0 | This is an analytical method-development paper (extraction/chromatography validation); the only retinol values are analytical recovery/LOQ figures, not toxicokinetic parameters. |
| PGx | Biswas_2021 | not_relevant | 0 | 0 | Plant breeding study on carotenoid content of Golden Rice; no gene variant effect on vitamin A PK/PD parameters reported. |
| popPK | Bohn_2019 | irrelevant | 2 | 2 | This is a qualitative review of β-carotene bioavailability and signaling; only scattered percentages (e.g., conversion rates) are cited from other studies, with no numeric toxicokinetic parameters derived by the paper itself for vitamin A. |
| popPK | Brown_1997 | irrelevant | 0 | 0 | Vitamin A appears only as a depletion/repletion protocol to synchronize spermatogenesis in a study of 1,3-dinitrobenzene; no kinetic parameters of vitamin A are reported. |
| popPK | Brown_2000 | irrelevant | 0 | 0 | Paper studies RXR-γ knockout mice and pituitary-thyroid axis; vitamin A is only mentioned as deficiency context, with no kinetic parameters (half-life, clearance, rates, etc.) for vitamin A. |
| popPK | Carazo_2025 | irrelevant | 0 | 0 | The paper concerns vitamin K levels and coagulation in diabetes, with no toxicokinetic parameters for vitamin A in evidence. |
| popPK | Chakraborty_2021 | irrelevant | 0 | 0 | This is an immunisation knowledge/coverage study in rural India; vitamin A appears only as a knowledge question, with no toxicokinetic parameters of any kind. |
| PGx | Chen_2000 | not_relevant | 2 | 4 | In vitro enzyme activity of CYPs toward retinol, no genetic variants or genotype-based PK/PD differences reported. |
| PGx | Chen_2024 | not_relevant | 1 | 4 | The paper associates genetic variants with PhenoAge acceleration, not with any PK/PD parameter of vitamin A; retinol is only a covariate biomarker. |
| PGx | Cheng_1995 | not_relevant | 2 | 3 | Reports an association of vitamin A intake with SCE frequency (a biomarker, not a PK/PD parameter of vitamin A), with no fitted pharmacogenomic effect. |
| popPK | Chetyrkin_2001 | relevant | 4 | 7 | Human microsomal dehydrogenase characterized with retinol (vitamin A) substrate Km 3.2 µM and Vmax 1.2 nmol/min/mg given in the abstract, but vitamin A is one of several substrates in an in vitro enzyme study, not a full disposition model. |
| popPK | Choi_2012 | irrelevant | 1 | 0 | A drug-delivery study of RBP-albumin fusion proteins where retinol/RBP is only a targeting moiety, with no quantitative kinetic parameters for vitamin A (tissue distribution mentioned only qualitatively, no numeric values). |
| popPK | Chu_2001 | irrelevant | 0 | 0 | Vitamin A appears only as a measured tissueendpoint in a TCDD/PCB mixture toxicity study; no kinetic parameters for vitamin A are reported. |
| popPK | Chytil_1979 | irrelevant | 1 | 0 | The paper reports protein binding/affinity characteristics of retinol-binding proteins but contains no numeric toxicokinetic parameters (no half-life, kinetic rate constant, or quantitative dose-dependent data), and no readable numeric values are provided. |
| popPK | Cifelli_2007 | relevant | 4 | 5 | Reports tissue distribution and catabolism of radiolabeled retinoic acid (a vitamin A metabolite) in rats, but only group-level concentrations and correlations are given in the abstract, without clear rate constants or half-lives; some values (liver retinol, % metabolite distributions) are readable. |
| popPK | Cohen_2026 | irrelevant | 0 | 0 | This is a Delphi consensus on vitamin B12 (not vitamin A) replacement routes with no kinetic parameters of any kind. |
| popPK | Collins_1999 | irrelevant | 3 | 0 | This is a review of retinoid teratogenesis that mentions toxicokinetic parameters but provides no numeric values in the evidence; any parameters would be cited from other papers. |
| PGx | Connor_2026 | not_relevant | 2 | 3 | Review discusses vitamin A modulating barrier/transporter function, not gene variants altering vitamin A PK/PD parameters. |
| PGx | Conserva_2019 | not_relevant | 3 | 2 | Review of retinoid biology and RAR fusion genes in APL; no gene variant effect on vitamin A PK/PD parameters reported. |
| popPK | Cuerq_2018 | irrelevant | 0 | 0 | The paper concerns vitamin E (tocopherol), not vitamin A; no vitamin A kinetic parameters are reported. |
| popPK | Cui_2009 | irrelevant | 2 | 1 | This is a synthesis and anti-tumour efficacy study of ATRA derivatives with no kinetic parameters (only a mentioned, unreadable partition coefficient characterisation); no half-life, clearance, rates or disposition model values appear. |
| popPK | Cui_2022 | irrelevant | 0 | 0 | Epidemiological mortality-outcome study with only measured serum concentrations and hazard ratios, no toxicokinetic parameters for vitamin A. |
| popPK | DEMOVSKY_1965 | relevant | 4 | 4 | Vitamin A disposition/distribution in rats (chylomicron vs soluble fraction ~50-90%, doses, tissue fluorescence) is quantified, but no standard kinetic parameters (half-life, clearance, rate constants); Tables II and III are headers only so several values are missing from the evidence. |
| PGx | Dai_2025 | not_relevant | 1 | 3 | This is a plant genetics study of carotenoid content in cucumber; vitamin A is not a drug, and no PK/PD parameters (ADME, concentration-response) in humans or animals are examined. |
| PGx | Dayma_2025 | not_relevant | 0 | 0 | The paper discusses ABCA4 variants in Stargardt's disease and retinoid (vitamin A) metabolism pathophysiology, but reports no gene variant effect on a pharmacokinetic or pharmacodynamic parameter of vitamin A as a therapeutic agent. |
| popPK | Delport_2011 | irrelevant | 0 | 0 | Exposure/outcome study of DDT with vitamin A only as nutritional status biomarker; no kinetic parameters for vitamin A itself. |
| PGx | Demmer_1987 | not_relevant | 0 | 0 | Gene mapping/sequencing of CRBP II; no pharmacogenomic effect on vitamin A PK/PD parameters reported. |
| PGx | Dragasevic_2022 | not_relevant | 2 | 0 | Review on micronutrient genetics in IBD; vitamin A mentioned only, no pharmacogenomic effect on PK/PD parameters of vitamin A is reported. |
| popPK | Ejsmond_2025 | irrelevant | 0 | 0 | The paper models thiamine (vitamin B1) kinetics and allocation in salmon; vitamin A is not the subject substance and no vitamin A kinetic parameters are reported. |
| popPK | Folli_2001 | irrelevant | 2 | 6 | It reports an in vitro Kd (~60 nM) for retinol binding to a newly identified human CRBP III, a biochemical binding affinity rather than any disposition/kinetic parameter (no half-life, clearance, rates or model) of vitamin A. |
| popPK | Fu_2001 | irrelevant | 0 | 0 | No toxicokinetic parameters; vitamin A acts only as a dietary deficiency condition affecting gene expression. |
| popPK | GOODMAN_1965 | irrelevant | 0 | 0 | no_text gate: only 73 chars of text extracted (&lt; 400) |
| popPK | García_2005 | relevant | 4 | 3 | Kinetic concentrations of retinoids in serum and liver over postnatal time course in mice are reported, but actual numeric values are not shown in the provided text. |
| popPK | Gauthier_2018 | irrelevant | 2 | 0 | This is a biomarker/effect study measuring retinoid and carotenoid tissue concentrations in bees exposed to neonicotinoids — no kinetic parameter (half-life, rate constant, clearance, partition coefficient or model) for vitamin A is reported. |
| popPK | Gauthier_2023 | irrelevant | 2 | 3 | This is a reproductive/moulting effect study exposing Gammarus to all-trans retinoic acid and pesticides — only nominal exposure concentrations are given, with no kinetic parameters (half-life, clearance, rates) for vitamin A or its metabolite. |
| popPK | Gesto_2012 | irrelevant | 3 | 2 | This is a tissue distribution survey of retinoid concentrations with no kinetic parameters (no half-lives, rate constants, partition coefficients or models), and no numeric values appear in the provided evidence. |
| popPK | Goodman_1984 | irrelevant | 2 | 1 | This is a narrative review of vitamin A metabolism describing transport and storage qualitatively, with no numeric kinetic parameters (no half-life, rate constants, Vmax/Km, or model values) presented. |
| popPK | Grasman_1996 | irrelevant | 1 | 1 | Eco-epidemiological field study of contaminant exposure and immune function; vitamin A (retinol) appears only as measured plasma biomarker concentrations in an exposure-response association, with no kinetic parameters. |
| popPK | Gu_2022 | irrelevant | 0 | 0 | Vitamin A appears only as a dietary recommendation for LH therapy in COVID-19; no kinetic parameters (half-life, clearance, rate constants, ADME values) for vitamin A itself are reported, and no numeric TK values for it appear in the evidence. |
| PGx | Gupta_2009 | not_relevant | 0 | 0 | Paper is a measles outbreak investigation; vitamin A is only mentioned as supplementation, with no gene variant effect on any PK/PD parameter. |
| popPK | Główka_2024 | irrelevant | 0 | 2 | This is an epidemiological/exposure study measuring plasma retinol concentrations in CVD patients; no kinetic parameter (half-life, clearance, rate constant, model) for vitamin A is reported, and no numeric retinol values are even visible here. |
| PGx | Haberkorn_2001 | not_relevant | 0 | 5 | Effects are of dietary vitamin A intake (not a gene variant/genotype/phenotype) on UGT expression/activity of other substrates, not a pharmacogenomic effect on vitamin A PK/PD. |
| PGx | Han_2005 | not_relevant | 1 | 1 | Paper only reports SNP discovery/genotyping frequencies in a retinol dehydrogenase gene, with no PK/PD parameter effects of vitamin A. |
| PGx | Harrison_2020 | not_relevant | 3 | 1 | A review mentioning polymorphisms in BCO1/BCO2 affecting vitamin A homeostasis, but no quantitative PK/PD effect sizes for vitamin A are reported. |
| PGx | Hashmi_2021 | not_relevant | 3 | 3 | Reports a drug-drug interaction (voriconazole inhibiting CYP450 metabolism of ATRA) affecting calcium levels, not a gene variant/genotype effect on a PK/PD parameter of vitamin A. |
| popPK | Hoddinott_2017 | irrelevant | 0 | 0 | This is a nutrition behavior change communication study reporting only dietary intake of vitamin A-rich foods and percentage-point outcomes, with no kinetic parameters for vitamin A. |
| popPK | Holdiness_1989 | irrelevant | 0 | 0 | This is a pharmacokinetic review of clofazimine; vitamin A is mentioned only as a drug-interaction partner, with no kinetic parameters for vitamin A. |
| popPK | Huan_1992 | irrelevant | 3 | 2 | This is a dietary interaction/outcome study measuring tissue concentrations of vitamin A in chickens, with no kinetic parameters (half-life, rate constants, clearance, etc.); numeric values are not shown in the evidence. |
| PGx | Huo_2023 | not_relevant | 0 | 0 | No gene variant/genotype effect on vitamin A PK/PD parameters is reported; only dietary vitamin A levels alter gene expression and lipid content. |
| popPK | Hurayb_2024 | irrelevant | 0 | 0 | A dietary intake/PCOS outcome study where vitamin A appears only as a nutrient in food records, with no kinetic parameters of any kind. |
| PGx | Iakovleva_1987 | not_relevant | 0 | 0 | No gene variants or pharmacogenomic effects on vitamin A PK/PD parameters are reported; study concerns xenobiotic-induced vitamin depletion. |
| popPK | Ilić_2020 | irrelevant | 2 | 1 | The paper administers 13-cis retinoic acid (a vitamin A metabolite) to Lewis rats but reports only metabolic/outcome endpoints (lipids, leptin, oxidative stress); no kinetic parameters of vitamin A/13cRA (half-life, clearance, concentrations) are measured, and the doses (7.5/15 mg/kg equivalent to human serum levels) are not kinetic parameters themselves. |
| PGx | Isoherranen_2019 | not_relevant | 4 | 2 | Review mentions CYP26 genetic variants affecting retinoic acid metabolism activity but reports no fitted effect sizes on vitamin A PK/PD parameters. |
| popPK | Isoherranen_2025 | irrelevant | 2 | 1 | This is a mechanistic review of retinoic acid binding proteins and metabolism; no numeric kinetic parameters for vitamin A appear in the evidence. |
| PGx | Jäger_2024 | not_relevant | 0 | 0 | No gene variant/genotype effect on vitamin A PK/PD parameters; only skin model metabolism characterization. |
| popPK | Kardinaal_1995 | irrelevant | 1 | 1 | A biomarker/intake correlation study with measured concentrations only; no kinetic parameters (half-life, rate constants, clearance, partitioning) for retinol are reported. |
| popPK | Kashmoola_2026 | irrelevant | 0 | 0 | Narrative review of polypharmacy and bone health in T2DM mentioning vitamin D only as supplementation, with no kinetic parameters for vitamin A. |
| popPK | Kashyap_2024 | irrelevant | 0 | 0 | This paper reports bioavailability and kinetic parameters for vitamin B12 (cyanocobalamin), not vitamin A; vitamin A is not the subject substance. |
| popPK | Khan_2025 | irrelevant | 0 | 0 | An epidemiological NHANES dietary intake–dental caries association study with no kinetic parameters (no half-life, clearance, rate constants, or model of vitamin A disposition); vitamin A appears only as a dietary intake variable. |
| PGx | Krüger_2005 | not_relevant | 2 | 3 | Reports vitamin A feeding effects on gene expression (NR, CYP, UGT) in calves, not a PGx effect of a gene variant on a PK/PD parameter of vitamin A. |
| PGx | Kuehl_2005 | not_relevant | 2 | 1 | A narrative review discussing gene-environment teratogenicity of vitamin A with no PK/PD parameters or quantitative pharmacogenomic effects. |
| popPK | Käkelä_2002 | irrelevant | 1 | 3 | This is an analytical method paper for retinoid measurements in mink and other fish-eating mammals; it reports chromatographic retention times, not toxicokinetic parameters such as half-lives, clearance, rates or partitioning, and no kinetic numbers are provided. |
| popPK | La_2014 | irrelevant | 2 | 2 | The paper's subject substance is β-cryptoxanthin; vitamin A is measured only as tissue storage/excretory concentrations (mostly in Tables 5–7 not included), with no kinetic parameter (half-life, rate constant, clearance, etc.) for vitamin A itself. |
| popPK | Lawson_1997 | irrelevant | 0 | 0 | Vitamin A appears only as a co-ingested nutrient whose absorption may be reduced by olestra; no kinetic parameters for vitamin A are reported. |
| popPK | Lee_1997 | irrelevant | 0 | 0 | This is an epidemiological dietary/outcome study with no kinetic parameters for vitamin A; vitamin A intake appears only as an exposure variable via odds ratios. |
| popPK | Leiva-Castro_2025 | irrelevant | 1 | 1 | This is a review of nutraceuticals in rheumatoid arthritis; vitamin A is not the subject of any kinetic parameter, and the half-life mentioned refers to another compound. |
| PGx | Li_2008 | not_relevant | 0 | 0 | No gene variant or genotype effect on vitamin A PK/PD parameters is reported; purely a cell culture study of p38 MAPK signaling. |
| PGx | Lietz_2010 | not_relevant | 4 | 3 | Mentions BCMO1 SNPs reducing enzyme activity affecting vitamin A production, but no fitted PK/PD effect sizes reported. |
| popPK | Lin_2017 | irrelevant | 0 | 0 | This is an FFQ validation study measuring dietary intake; vitamin A appears only as a nutrient intake estimate with no kinetic parameters. |
| PGx | Liu_1990 | not_relevant | 0 | 0 | Protein purification study of retinol-binding protein; no gene variant/genotype effects on vitamin A PK/PD are reported. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | This is a study design/protocol for population PK of rivaroxaban, a different substance; vitamin A appears only as "vitamin K antagonists" terminology, with no vitamin A kinetic parameters. |
| PGx | Lu_2020 | not_relevant | 4 | 2 | Reviews CYP1A metabolism of retinol (Km/Vmax for enzymes), but does not report any SNPs/genotypes altering vitamin A PK or PD parameters quantitatively. |
| popPK | Mao_2000 | relevant | 7 | 3 | A mouse study of retinol (vitamin A) metabolism showing tissue distribution of retinol metabolites (14-HRR, AR, DHR, retinoic acid) after dosing, but concentrations appear as qualitative descriptions without explicit numeric values in the provided evidence. |
| PGx | Marino_2023 | not_relevant | 0 | 0 | No genetic variant/genotype/phenotype effect on vitamin A analog palovarotene PK/PD is reported; only food and CYP3A4 DDI effects. |
| popPK | Matovic_2018 | irrelevant | 0 | 0 | The paper models 25-hydroxy vitamin D, not vitamin A; vitamin A is not the subject substance and no kinetic parameters for it appear. |
| popPK | Mezcord_2026 | irrelevant | 0 | 0 | The substance is vitamin B12 (cobalamin), not vitamin A, and the paper reports bacterial MICs, transcriptomics and docking data with no vertebrate/toxicokinetic parameters. |
| PGx | Minelli_2016 | not_relevant | 2 | 3 | Reports gene variants (NCOR2, retinoic acid pathway) affecting FVC, a physiological trait, not any PK/PD parameter of vitamin A itself. |
| popPK | Miyaishi_1992 | irrelevant | 0 | 0 | Vitamin A appears only in passing as "vitamin A storage cells" in hepatic histology; no kinetic parameters of any kind are reported. |
| popPK | Mobarhan_1991 | relevant | 4 | 3 | Rats given vitamin A status measurements and enzyme activities (REH, ARAT, ADH) relevant to vitamin A metabolism, but only P-values given; no actual numeric concentrations or rate constants appear. |
| PGx | Mohibi_2024 | not_relevant | 1 | 1 | FDX1 deficiency affects lipid metabolism and Vitamin A/D metabolism is only cited as background; no pharmacokinetic or pharmacodynamic parameter of vitamin A is measured by genotype. |
| popPK | Moran_2018 | irrelevant | 1 | 0 | A narrative review with no kinetic parameters reported and no numeric values present. |
| PGx | Moran_2022 | not_relevant | 3 | 5 | The paper reports gene-dependent (rab28 KO) changes in endogenous retinoid levels, not pharmacogenomic effects on a PK/PD parameter of vitamin A as an administered drug. |
| popPK | Morita_1982 | relevant | 6 | 3 | Vitamin A is the subject substance with tissue distribution/retention time-course data in rats, but most numeric time-course values appear in Figures 1–2 not included here; only a few concentrations (e.g., 8.01±0.70 µg/g kidney, 6.47±0.55 µg/g liver, ~40 µg whole liver) are in the text, and there are no rate constants or model parameters. |
| popPK | Morita_1982_2 | relevant | 5 | 3 | Reports tissue distribution changes (% change in adrenal vitamin A) over a 14-day time course in rats, but most numeric values (liver, kidney, testes amounts, serum levels) appear to be in figures/tables not included. |
| popPK | Muir_2024 | irrelevant | 0 | 0 | This is a coagulation model of 4F-PCC reversal of FXa inhibitors (rivaroxaban/apixaban); vitamin K-dependent factors appear only as coagulation proteins, not as vitamin A (retinol/retinoid) toxicokinetics, and no vitamin A kinetic parameters are reported. |
| popPK | Nakano_1982 | relevant | 4 | 2 | Tissue time-course distribution of vitamin A in rats is reported, but the quantitative values appear in figures not provided (only a few numeric organ contents in text); no kinetic rate constants or model parameters. |
| popPK | Nau_1995 | relevant | 5 | 2 | Study reports toxicokinetic parameters (metabolism, placental transfer, half-lives) of retinoids for teratogenicity risk assessment, but the evidence here is only an abstract with no numeric values, which presumably reside in the full text/figures. |
| popPK | Navab_1977 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PGx | Niwa_2009 | not_relevant | 3 | 3 | Review speculates that CYP polymorphisms may affect retinol/vitamin A metabolism but reports no genotype-linked PK/PD effect for vitamin A. |
| popPK | Ocampo-Pelland_2017 | irrelevant | 0 | 0 | The paper models vitamin D2/D3 pharmacokinetics, not vitamin A (retinol) in any form. |
| popPK | Oda_2023 | irrelevant | 0 | 0 | The paper concerns vancomycin and other dialysis compounds; vitamin A is not mentioned as a study substance, so no vitamin A kinetic parameters exist. |
| popPK | Ooi_2017 | irrelevant | 0 | 0 | The paper models vitamin K-dependent coagulation proteins during warfarin therapy; vitamin A is not the subject substance and no vitamin A kinetic parameters are reported. |
| popPK | Oster_1985 | irrelevant | 0 | 0 | Vitamin A is only used to induce bone disease in mice; the kinetic parameters concern a 117mSn radiopharmaceutical, not vitamin A. |
| popPK | Ozisik_2021 | irrelevant | 0 | 0 | Gene-overlap/hypothesis study of vitamin A target genes in CAKUT with no kinetic parameters of any kind. |
| popPK | Pena_2015 | irrelevant | 0 | 0 | Vitamin A appears only as a fluorescent interferent in an analytical method for PAHs; no kinetic parameters of vitamin A are reported. |
| popPK | Peng_2023 | irrelevant | 0 | 0 | Epidemiological systematic review of associations between micronutrient status and cadmium body burden; vitamin A appears only as a co-exposure with no kinetic parameters of its own, and none are numerically reported. |
| popPK | Perez_2026 | irrelevant | 0 | 0 | Vitamin A is not the subject of this paricalcitol/gemcitabine/nab-paclitaxel trial; no kinetic parameters for vitamin A (or even for the studied drugs) appear as values in the evidence. |
| PGx | Perrault_1999 | not_relevant | 0 | 0 | Paper discusses RPE65 mutations in LCA and vitamin A metabolism, but reports no pharmacokinetic or pharmacodynamic parameter changes for vitamin A. |
| PGx | Petkova-Kirova_2023 | not_relevant | 1 | 0 | Vitamin A is only mentioned as a substrate class of certain CYPs; SNPs are associated with PD disease manifestation (odds ratios), not with any PK/PD parameter of vitamin A. |
| popPK | Phillips_1971 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Pokushalov_2025 | irrelevant | 0 | 0 | Clinical efficacy trial of EF-M2/GcMAF in canine osteoarthritis; vitamin A is not the subject substance and no toxicokinetic parameters for vitamin A appear anywhere. |
| PGx | Prandota_2004 | not_relevant | 2 | 2 | Speculative narrative on SIDS cytokine/CYP interactions; no gene variant quantitatively linked to vitamin A PK/PD parameters. |
| popPK | Raila_2001 | irrelevant | 3 | 6 | Reports tissue/plasma concentrations of vitamin A in cats rather than any kinetic parameters (half-life, rate constants, clearance, or disposition model). |
| PGx | Reboul_2023 | not_relevant | 0 | 0 | Review of intestinal transport proteins for fat-soluble vitamins; no gene variant effect on vitamin A PK/PD parameters reported. |
| popPK | Reijnders_1994 | irrelevant | 0 | 0 | Vitamin A appears only as a measured blood endpoint in a chlorobiphenyl toxicokinetics study; no kinetic parameters of vitamin A itself are reported, and no numeric values are present. |
| popPK | Rombout_1992 | irrelevant | 2 | 1 | This is an immunology study in vitamin A-deficient chickens; only plasma retinol concentrations are measured (figures/table not numerically shown), with no kinetic parameters of vitamin A disposition. |
| popPK | Rosa_2007 | irrelevant | 2 | 2 | Baseline tissue vitamin A concentrations in whales with no kinetic parameter (no half-life, rate, clearance or model), and numeric values mostly not given in the abstract. |
| popPK | Ruiz_1999 | irrelevant | 1 | 1 | Molecular cloning and characterization of LRAT with no quantitative toxicokinetic parameters (no Vmax, Km, rate constants or model values) for vitamin A reported in the evidence. |
| PGx | Sainz_2015 | not_relevant | 0 | 0 | No gene variant effect on vitamin A PK/PD is reported; paper discusses riboflavin autofluorescence in CSCs. |
| popPK | Sass_1997 | relevant | 6 | 3 | In vitro mouse limb bud cell study reporting retinoid toxicokinetics (medium/cell concentrations, isomer ratios) for vitamin A derivatives, but the numeric values appear only in figures/tables not included in the evidence. |
| popPK | Sauer_1997 | irrelevant | 1 | 1 | Vitamin A is only a pretreatment modulating cadmium toxicity; all quantitative toxicokinetic/toxicity parameters (LC50, cadmium tissue distribution) belong to cadmium, not vitamin A. |
| PGx | Schlötzer-Schrehardt_2021 | not_relevant | 1 | 2 | Mentions vitamin A metabolism as a disease pathway insight, no PK/PD parameter effect of any gene variant on vitamin A. |
| popPK | Schweigert_2001 | irrelevant | 3 | 4 | Vitamin A is a metabolite/dose context with concentration levels but no kinetic parameters (rates, half-life, clearance); some numeric tissue/plasma concentrations and a conversion ratio are present, though mainly an exposure/accumulation study. |
| PGx | Sestili_2019 | not_relevant | 0 | 0 | Paper describes wheat carotenoid biofortification via lcyE mutations, not any effect of a gene variant on PK/PD parameters of vitamin A in humans. |
| popPK | Shabudin_2025 | irrelevant | 0 | 0 | Vitamin A appears only in in-silico docking/ADMET screening; no kinetic parameters (half-life, clearance, rates) are reported, only qualitative toxicity predictions in tables/figures. |
| popPK | Shadid_2025 | irrelevant | 0 | 0 | The paper reports popPK parameters (clearance, V, AUC) for vitamin D/25(OH)D, not vitamin A, so the substance is a different one entirely. |
| popPK | Sharma_1987 | relevant | 5 | 3 | Rat tissue distribution and plasma levels of vitamin A are reported, but the numeric parameter values are not present in the evidence provided (likely in tables/figures not included). |
| popPK | Smeland_1995 | irrelevant | 0 | 1 | Paper reports only qualitative receptor binding distribution in a cell-free assay, with Scatchard analysis but no numeric kinetic parameters for vitamin A provided in the evidence. |
| popPK | Smith_1975 | irrelevant | 3 | 7 | Numeric tissue RBP concentrations are present and readable, but they quantify the transport protein retinol-binding protein rather than vitamin A's own kinetic parameters (half-life, clearance, rates). |
| PGx | Solé_2022 | not_relevant | 3 | 5 | Reports SCD genotype × vitamin A diet interaction on muscle transcriptome and fatty acid composition, not on a PK/PD parameter (e.g. exposure, clearance, or response biomarker) of vitamin A itself. |
| PGx | Sowa_2017 | not_relevant | 0 | 0 | Study concerns carotenoid retention during food storage/cooking; no gene variant effect on vitamin A PK/PD parameters. |
| popPK | Sporn_1976 | irrelevant | 0 | 0 | Review of chemoprevention efficacy with no kinetic parameters and no numeric toxicokinetic values. |
| popPK | Stroehlein_2021 | irrelevant | 0 | 0 | The paper is a clinical review of vitamin D (not vitamin A) for COVID-19, reporting only risk ratios and outcomes with no kinetic parameters for vitamin A. |
| PGx | Sumantran_2016 | not_relevant | 2 | 2 | Paper reports disease-state differential expression of vitamin A metabolism genes (ALDH1A3, AKR1B10, AKR1C3), not a pharmacogenomic variant/genotype effect on a PK or PD parameter of vitamin A. |
| PGx | Sun_2015 | not_relevant | 0 | 0 | Medicinal chemistry study of synthetic CYP26A1 inhibitors; no gene variant/genotype effect on vitamin A PK/PD reported. |
| popPK | Sundaresan_1975 | relevant | 5 | 4 | Reports quantitative tissue distribution and radioactivity counts of labelled retinol in rats, though numeric values (percentages/counts) appear only partially summarized in the abstract text with full numbers likely in the paper body/figures. |
| popPK | Sundelin_1983 | irrelevant | 0 | 0 | Paper describes retinoid-binding protein structure and distribution with no kinetic parameters or numeric toxicokinetic values. |
| popPK | Tang_1995 | irrelevant | 3 | 4 | Vitamin A appears mainly as a measured tissue concentration outcome in a canthaxanthin supplementation study, with no kinetic parameters of vitamin A disposition itself; only tissue concentrations are given. |
| PGx | Tarapcsák_2017 | not_relevant | 0 | 0 | The paper examines retinoids as inhibitors of Pgp/ABCG2 in vitro, but does not report any gene variant/genotype/phenotype effect on vitamin A PK/PD parameters. |
| PGx | Trusov_2014 | not_relevant | 2 | 5 | Vitamin deficiency alters CYP activity, but no gene variant/genotype/phenotype is studied; nutritional status is not pharmacogenomics. |
| popPK | Tzimas_2001 | irrelevant | 4 | 2 | A review summarizing retinoid toxicokinetics and metabolism with no numeric parameters present in the evidence, which likely resides in cited studies/figures not provided. |
| PGx | Wan_2009 | not_relevant | 0 | 0 | Study is a disease (schizophrenia) genetic association study; no PK/PD parameter of vitamin A is reported. |
| popPK | Wan_2022 | irrelevant | 0 | 0 | All kinetic parameters (clearance, V/F, population PK model) belong to colecalciferol/25-hydroxyvitamin D, a different substance — vitamin A does not appear as the subject compound. |
| PGx | Wang_2015 | not_relevant | 2 | 3 | The paper examines effects of vitamin A deficiency on P-GP and distribution of other drugs (Rho123, vincristine); it does not report gene variants altering PK/PD of vitamin A itself. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | PD modeling of cinacalcet; vitamin D appears only as a covariate, with no kinetic parameters for vitamin A. |
| popPK | Westmark_2025 | irrelevant | 0 | 0 | The paper is about coagulation factor IX kinetics in hemophilic mice; "vitamin K-dependent" mention and "vitamin_a" do not match — no vitamin A kinetic parameters exist here. |
| popPK | Widyawati_2025 | irrelevant | 0 | 0 | The paper is a study protocol about vitamin C (ascorbic acid) supplementation in cataract surgery; no quantitative kinetic parameters for vitamin A are reported, and vitamin A is not the subject substance. |
| popPK | Wimalawansa_2025 | irrelevant | 0 | 0 | A systematic review of vitamin D and COVID-19 outcomes with no kinetic parameters for vitamin A; vitamin A is not the subject and no toxicokinetic values are reported. |
| PGx | Wu_2015 | not_relevant | 0 | 0 | In silico gene expression study of PPIs; no gene variant effect on vitamin A PK/PD parameters reported. |
| PGx | Xu_2012 | not_relevant | 2 | 0 | Reports RPE65 mutations in LCA genetic etiology; no effect of any variant on vitamin A PK/PD parameters. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The substance of interest here is vitamin K and warfarin; vitamin A does not appear at all, so no kinetic parameter for vitamin_a is reported. |
| PGx | Yamada_2019 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on vitamin A PK/PD parameters are reported; the study examines RA effects on intestinal barrier markers only. |
| popPK | Yamanushi_1995 | irrelevant | 2 | 3 | The kinetic data (tissue distribution/time course in rat) are for beta-carotene as the subject substance; vitamin A appears only as a precursor/comparator, with some numeric values in figures/tables not fully provided. |
| popPK | Zachman_1998 | irrelevant | 1 | 0 | A qualitative review with no numeric kinetic parameters of vitamin A present in the evidence. |
| PGx | Zenkel_2022 | not_relevant | 2 | 3 | Paper studies disease-associated gene effects on retinol pathway/endogenous retinol metabolism, not a pharmacogenomic effect of a gene variant on PK/PD of administered vitamin A. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | This is an epidemiological association study (NHANES) with regression coefficients for hormone outcomes, not toxicokinetic parameters of vitamin A. |
| popPK | Zheng_2025 | irrelevant | 0 | 0 | This is an epidemiological cross-sectional association study reporting serum vitamin A concentrations and regression coefficients, with no kinetic parameter (half-life, clearance, rate constant, etc.); the numerics present (0.17 µg/dL per log-unit) are association estimates, not toxicokinetic parameters. |
| PGx | Zheng_2025_2 | not_relevant | 0 | 0 | Network pharmacology/docking study with no gene variant effect on vitamin A PK/PD parameters. |
| popPK | Zheng_2026 | irrelevant | 1 | 3 | Cross-sectional nutritional status study reporting serum retinol concentrations (e.g., 0.39 vs 0.36 mg/L) but no kinetic parameters (no half-life, rate constants, clearance, or disposition model); some values in figures/tables referenced but mostly supplementary. |
| popPK | Zhou_2016 | irrelevant | 0 | 10 | The paper models vitamin K2 (menaquinone) alongside warfarin, not vitamin A; vitamin A never appears as the subject substance. |
| PGx | Zolfaghari_2023 | not_relevant | 2 | 3 | Vitamin A here is a nutrient/ligand studied for gene regulation (RARβ, CYP26A1 expression); no gene variant effect on PK/PD parameters (e.g., AUC, clearance) is reported. |
| popPK | de_2018 | irrelevant | 0 | 0 | The paper reports quantitative population PK parameters for vitamin C, not vitamin A, which does not appear as the subject substance. |
| PGx | di_2022 | not_relevant | 0 | 0 | Study of carotenoid accumulation and RA pathway gene expression in thyroid tumors; no gene variant/genotype effect on vitamin A PK or PD parameters. |
| PGx | Čižmáriková_2025 | not_relevant | 2 | 4 | Review of vitamin A compounds modulating ABC transporters in vitro; no gene variant/genotype effects on pharmacokinetic/pharmacodynamic parameters of vitamin A reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvitamin_a%5D&body=Drug%3A%20vitamin_a%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_vitamin_a/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 22:27 UTC</sub>
