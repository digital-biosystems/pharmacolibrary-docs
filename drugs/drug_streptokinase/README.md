<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;streptokinase&quot;}]"></div>

# streptokinase

- **generic name:** streptokinase
- **ATC codes:** `B01AD01`
- **DrugBank:** [DB00086](https://go.drugbank.com/drugs/DB00086) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Streptokinase is a clot-dissolving enzyme used to treat conditions such as heart attack, pulmonary embolism, and peripheral vascular disease. It is an approved medicine and has been included on the WHO list of essential medicines, so it remains in use, though it has also been withdrawn in some settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416485](https://www.wikidata.org/wiki/Q416485) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:00 | 5:04 | 0/0/0 | 1/0/0 | 0/0/0 | 124,578/6,057 | einfracz / qwen3.8-27b | 4 | 1/6 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Agnelli_1985_fibrinolysis](drugs/drug_streptokinase/pd_Agnelli_1985_fibrinolysis.md) | fibrinolysis ← streptokinase · model not identified | — | Agnelli G et al., Sustained thrombolysis with DNA-recombi…, Blood (1985) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=streptokinase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F2R (activator), PLA2G4A (inducer), PLG (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 91 matched, 73 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dinesh_2016.pdf` | Dinesh M et al., Photocatalytic degradation of nitrophen…, Journal of photochemistry a… (2016) | pd | 4 | [10.1016/j.jphotobiol.2016.05.033](https://doi.org/10.1016/j.jphotobiol.2016.05.033) | [27288657](https://www.ncbi.nlm.nih.gov/pubmed/27288657) | metadata signals extractable PD data (IC50) |
| `Forster_1980.pdf` | Forster C et al., Vascular smooth muscle response to fibr…, British journal of clinical… (1980) | pd | 4 | [10.1111/j.1365-2125.1980.tb01749.x](https://doi.org/10.1111/j.1365-2125.1980.tb01749.x) | [7437239](https://www.ncbi.nlm.nih.gov/pubmed/7437239) | metadata signals extractable PD data (EC50) |
| `Hantgan_1998.pdf` | Hantgan RR et al., No effect of clot age or thrombolysis o…, Blood (1998) | pd | 4 | not captured | [9731064](https://www.ncbi.nlm.nih.gov/pubmed/9731064) | metadata signals extractable PD data (IC50) |
| `Hernandez-Pinzon_1994.pdf` | Hernandez-Pinzon I et al., Microfiltration of streptococcal fermen…, Biotechnology and bioengine… (1994) | pd | 4 | [10.1002/bit.260440303](https://doi.org/10.1002/bit.260440303) | [18618742](https://www.ncbi.nlm.nih.gov/pubmed/18618742) | metadata signals extractable PD data (concentrationeffect) |
| `Kuri_2014.pdf` | Kuri S et al., Phytochemical and in vitro biological i…, Asian Pacific journal of tr… (2014) | pd | 4 | [10.12980/APJTB.4.2014C677](https://doi.org/10.12980/APJTB.4.2014C677) | [25182555](https://www.ncbi.nlm.nih.gov/pubmed/25182555) | metadata signals extractable PD data (IC50) |
| `Niemetz_1988.pdf` | Niemetz J et al., A streptokinase dependent plasma factor…, British journal of haematol… (1988) | pd | 4 | [10.1111/j.1365-2141.1988.tb02512.x](https://doi.org/10.1111/j.1365-2141.1988.tb02512.x) | [2975501](https://www.ncbi.nlm.nih.gov/pubmed/2975501) | metadata signals extractable PD data (sigmoid) |
| `Wang_2022.pdf` | Wang A et al., Bleeding Risk of Dual Antiplatelet Ther…, Annals of neurology (2022) | pgx | 5 | [10.1002/ana.26287](https://doi.org/10.1002/ana.26287) | [34951042](https://www.ncbi.nlm.nih.gov/pubmed/34951042) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-14T18:00:38.071694+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnelli_1985 | irrelevant | 2 | 0 | The study reports pharmacodynamic thrombolysis percentages and duration of activity, not quantitative population pharmacokinetic parameters (CL, V, half-life). |
| PGx | Alinodehi_2019 | not_relevant | 0 | 0 | The paper describes protein engineering and enzymatic kinetic parameters of streptokinase variants for PEGylation, not human pharmacogenomics affecting drug PK or PD. |
| popPK | Ambrus_1994 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic thrombolysis efficacy and mechanisms of action in monkeys, not pharmacokinetic disposition parameters (CL, V, etc.) of streptokinase. |
| popPK | Arifuzzaman_2025 | irrelevant | 0 | 0 | The paper evaluates the pharmacological activity of a plant extract, using streptokinase only as a positive control/comparator in a clot lysis assay without reporting PK parameters for streptokinase. |
| PD | Arifuzzaman_2025 | not_relevant | 0 | 0 | The paper investigates a plant extract and only uses streptokinase as a positive control in a single-timepoint clot lysis assay, providing no exposure-response or dose-response data for streptokinase. |
| popPK | Arnljots_1994 | irrelevant | 1 | 0 | This is a pharmacodynamic study in rabbits investigating effects on thrombosis and haemostasis, reporting no pharmacokinetic parameters for streptokinase. |
| PD | Arnljots_1994 | not_relevant | 2 | 1 | The study reports qualitative dose-response observations (bleeding at higher doses) and binary outcomes (patency) without providing numeric PD parameters, concentration-effect curves, or quantitative modeling. |
| popPK | Azad_2020 | irrelevant | 0 | 0 | This is an in-vitro study of a plant extract where streptokinase serves only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Azad_2020 | not_relevant | 0 | 0 | The paper evaluates in vitro activities of plant extracts using streptokinase only as a single-point positive control (64.35% clot lysis) and does not report any dose-response curve, concentration-effect relationship, or numeric PD parameters (e.g., EC50, Emax) for streptokinase. |
| popPK | Bell_2002 | irrelevant | 0 | 0 | The paper is a qualitative review of thrombolytic agents that does not provide specific quantitative pharmacokinetic parameter values for streptokinase. |
| PGx | Braunwald_2012 | not_relevant | 0 | 0 | The text is an institutional overview of the TIMI study group and does not report specific pharmacogenomic effects of gene variants on streptokinase PK/PD parameters. |
| popPK | Bruserud_1986 | irrelevant | 0 | 0 | The study investigates immunological T-lymphocyte proliferation in vitro, not the pharmacokinetic disposition parameters of streptokinase. |
| popPK | Bui_2023 | irrelevant | 0 | 0 | The paper investigates the in vitro biological activities of Serevenia buxifolia essential oil, using streptokinase only as a positive control for thrombolytic activity, and contains no pharmacokinetic data for streptokinase. |
| PD | Bui_2023 | not_relevant | 0 | 0 | The paper studies the biological activities of Serevenia buxifolia essential oil; streptokinase is only mentioned as a positive control for thrombolytic activity, and no PD or exposure-response relationship for streptokinase is reported. |
| popPK | Callas_1994 | irrelevant | 0 | 0 | The study focuses on in-vitro enzyme inhibition kinetics (IC50) and a functional thrombolysis model, not the pharmacokinetic disposition parameters (CL, V, t1/2) of streptokinase. |
| popPK | Collen_1993 | irrelevant | 0 | 0 | The paper describes in-vitro mechanistic studies of fibrinolytic activation kinetics (EC50, kcat/Km) rather than in-vivo pharmacokinetic disposition parameters (CL, V, t1/2) for streptokinase. |
| popPK | Costanzo_2005 | irrelevant | 0 | 0 | The study focuses on the design and evaluation of tripeptide-based thrombin inhibitors, using streptokinase only as a reference enzyme for selectivity assays, and contains no pharmacokinetic parameters for streptokinase. |
| PD | Costanzo_2005 | not_relevant | 0 | 0 | The paper focuses on thrombin inhibitors and does not report any pharmacodynamic or exposure-response data for streptokinase. |
| popPK | Dinesh_2016 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Dinesh_2016 | not_relevant | 0 | 0 | The paper studies photocatalytic degradation of nitrophenol using plant extract and only qualitatively compares clot lysis to streptokinase without providing any exposure-response or dose-response data for the drug. |
| popPK | Estêvão-Costa_2000 | irrelevant | 0 | 0 | The study investigates the in vitro enzymatic properties of snake venom metalloproteinases (mutalysins) and uses streptokinase only as a mechanism-based comparator, reporting no PK parameters for streptokinase. |
| PD | Estêvão-Costa_2000 | not_relevant | 0 | 0 | The paper studies snake venom metalloproteinases (mutalysins) and only mentions streptokinase as a comparison for mechanism of action, providing no PD or exposure-response data for streptokinase. |
| popPK | Fakruddin_2012 | irrelevant | 0 | 0 | The study investigates the in vitro properties of a plant extract, using streptokinase only as a positive control for thrombolytic activity rather than as the subject of pharmacokinetic analysis. |
| PD | Fakruddin_2012 | not_relevant | 0 | 0 | The paper evaluates a plant extract (Clausena heptaphylla) and uses streptokinase only as a positive control in a single-point clot lysis assay, without reporting any dose-response curve or PD parameters for streptokinase. |
| PGx | Falkowski_2005 | not_relevant | 1 | 2 | The study investigates associations between genetic polymorphisms and clinical outcome (recanalization), reporting no significant differences, and does not provide quantitative PK/PD parameter changes. |
| popPK | Forster_1980 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Forster_1980 | not_relevant | 2 | 1 | The study investigates the pharmacological interaction between streptokinase-derived fibrinogen degradation products and 5-hydroxytryptamine on vascular smooth muscle, but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for streptokinase itself. |
| popPK | Gugliucci_2008 | irrelevant | 0 | 0 | The study investigates the in vitro mechanism of plasminogen inactivation by hypochlorous acid, with streptokinase acting only as a tool to generate plasmin, rather than being the subject of a pharmacokinetic study. |
| PGx | Gusev_2018 | not_relevant | 0 | 0 | The text is a historical review of thrombolytic therapy and does not report any specific pharmacogenomic associations or PK/PD data for streptokinase. |
| popPK | Hantgan_1998 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Hantgan_1998 | not_relevant | 3 | 2 | The paper reports IC50 values for argatroban (the drug of interest) in the presence of streptokinase, but does not provide a PD model or numeric PD parameters for streptokinase itself. |
| popPK | Hernandez-Pinzon_1994 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Hernandez-Pinzon_1994 | not_relevant | 0 | 0 | The paper describes a membrane filtration process for recovering streptokinase, focusing on physical concentration factors and membrane rejection, not pharmacodynamic exposure-response or dose-effect relationships. |
| popPK | Hoegee-de_1988 | irrelevant | 0 | 0 | The paper describes a method for measuring fibrinogen levels and mentions streptokinase only as a potential source of interference, containing no pharmacokinetic data for streptokinase. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study focuses on tissue plasminogen activator (tPA) nanocarriers, not streptokinase. |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper focuses on a novel nanocarrier for tissue plasminogen activator (tPA) and does not report any pharmacodynamic or exposure-response analysis for streptokinase. |
| popPK | Islam_2013 | irrelevant | 0 | 0 | The study investigates the pharmacological properties of Spondias dulcis extracts, using streptokinase only as a standard comparator for thrombolytic activity, and reports no pharmacokinetic parameters. |
| PD | Islam_2013 | not_relevant | 0 | 0 | The paper uses streptokinase only as a positive control for a qualitative thrombolytic assay and does not report any exposure-response or dose-response relationship or numeric PD parameters for streptokinase. |
| popPK | Islam_2023 | irrelevant | 0 | 0 | The paper is a phytochemical study on a plant, and streptokinase is used only as a positive control standard in a thrombolytic assay, not as a subject for pharmacokinetic analysis. |
| PD | Islam_2023 | not_relevant | 0 | 0 | The paper reports phytochemical isolation and biological assays (antioxidant, cytotoxic, thrombolytic) for plant metabolites, using streptokinase only as a positive control without analyzing its pharmacodynamic or exposure-response relationship. |
| popPK | Jobaer_2023 | irrelevant | 0 | 0 | The paper is a phytochemical study of a plant, using streptokinase only as a standard comparator in a thrombolytic assay, not as a drug subject of PK analysis. |
| PD | Jobaer_2023 | not_relevant | 0 | 0 | The paper investigates phytochemicals from Gynura procumbens and uses streptokinase only as a positive control in a thrombolytic assay; it does not report any pharmacodynamic or exposure-response relationship for streptokinase itself. |
| popPK | Karim_2025 | irrelevant | 0 | 0 | The paper evaluates the in vitro thrombolytic activity of a plant extract (Colocasia affinis) using streptokinase only as a positive control, and contains no pharmacokinetic parameters for streptokinase. |
| PD | Karim_2025 | not_relevant | 0 | 0 | The paper evaluates a herbal extract (Colocasia affinis) and uses streptokinase only as a positive control without reporting any pharmacodynamic parameters or exposure-response relationship for streptokinase itself. |
| popPK | Kopia_1988 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic efficacy (thrombolysis and reperfusion) in dogs and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life for streptokinase. |
| popPK | Kuri_2014 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Kuri_2014 | not_relevant | 0 | 0 | The paper studies a plant extract and only uses streptokinase as a positive control for a single-point clot lysis assay, providing no exposure-response or dose-response data for streptokinase itself. |
| popPK | Kuroume_1976 | irrelevant | 0 | 0 | The study examines the immunological effect (lymphocyte stimulation/inhibition) of streptokinase-streptodornase fractions, not its pharmacokinetic disposition parameters. |
| popPK | Le_2011 | irrelevant | 0 | 0 | The paper discusses sugar metabolism in enterobacteria and has no relation to streptokinase pharmacokinetics. |
| PD | Le_2011 | not_relevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and does not mention streptokinase or any pharmacodynamic parameters. |
| popPK | Leizorovicz_1987 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy (reperfusion rates) of a streptokinase complex in a dose-response trial and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Lin_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of enzyme inhibition kinetics (Ki, KA), not a pharmacokinetic study reporting disposition parameters for streptokinase. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper focuses on the TrkB receptor and a new compound (DHPA), with no pharmacokinetic data for streptokinase. |
| PD | Liu_2024 | not_relevant | 0 | 0 | The paper focuses on the in vitro inhibition of neuroblastoma cells by DHPA and does not report any pharmacodynamic or exposure-response data for streptokinase. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The text discusses general fibrin binding properties and clinical history of thrombolytics but does not report any specific pharmacogenomic effects (gene variants) on streptokinase PK or PD parameters. |
| popPK | Lutomski_1995 | irrelevant | 1 | 0 | The paper is a general review of pharmacokinetic optimization for thromboembolic disorders and only mentions streptokinase as a comparator agent with no quantitative disposition parameters reported. |
| popPK | Marsh_1977 | irrelevant | 0 | 0 | The paper describes a laboratory method (fibrin plate) for assaying the biological activity of streptokinase, not a pharmacokinetic study of its disposition in an organism. |
| PGx | Mlynarska_2006 | not_relevant | 2 | 0 | The study focuses on the pharmacodynamics of PAI-1 (a biological marker) rather than the pharmacokinetics (e.g., clearance, half-life) or efficacy (e.g., lysis rate) of streptokinase. |
| popPK | Molhoek_1995 | irrelevant | 0 | 0 | The study investigates the efficacy and safety of hirudin (a thrombin inhibitor) as a co-administered agent with streptokinase, reporting angiographic patency and bleeding rates rather than quantitative pharmacokinetic parameters (CL, V, etc.) for streptokinase. |
| popPK | Mousa_1994 | irrelevant | 0 | 0 | The study focuses on the antiplatelet and antithrombotic efficacy of DMP 728, with streptokinase used only as a thrombolytic agent in a combination model rather than as the subject of pharmacokinetic analysis. |
| PD | Mousa_1994 | not_relevant | 0 | 0 | The paper reports PD parameters for DMP 728, not streptokinase; streptokinase is only mentioned as a comparator thrombolytic agent. |
| popPK | Mungall_1994 | irrelevant | 0 | 0 | The study focuses on heparin dosing and APTT monitoring in patients treated with TPA, and does not report pharmacokinetic parameters for streptokinase. |
| popPK | Niemetz_1988 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Nishino_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thrombolysis rates and does not report any pharmacokinetic disposition parameters for streptokinase. |
| popPK | Nowak_1974 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| popPK | Paul-Brent_2004 | irrelevant | 0 | 0 | The study is an in-vitro assay validation report for fibrinolysis screening and does not report quantitative pharmacokinetic disposition parameters for streptokinase. |
| PD | Paul-Brent_2004 | not_relevant | 3 | 1 | The paper describes a method validation study and mentions comparing dose-response curves for streptokinase, but it does not provide the numeric PD parameters (Emax, EC50, etc.) or the specific data points required to derive them. |
| popPK | Price_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and clinical outcomes of clopidogrel; streptokinase is only mentioned in the name of the bleeding definition scale (GUSTO) and is not the subject drug. |
| popPK | Ramjit_1993 | irrelevant | 0 | 0 | The study evaluates the antithrombotic efficacy of MK-0852, using streptokinase only as a comparator thrombolytic agent without reporting streptokinase pharmacokinetic parameters. |
| popPK | Ries_1995 | irrelevant | 1 | 0 | The study is an in-vitro clot lysis assay (mechanistic/pharmacodynamic) and does not report quantitative disposition parameters (CL, V, half-life, ka) for streptokinase. |
| popPK | Ripa_2024 | irrelevant | 0 | 0 | The study evaluates plant extracts for pharmacological activity, using streptokinase only as a comparator in a thrombolytic assay, and does not report any pharmacokinetic parameters for streptokinase. |
| PD | Ripa_2024 | not_relevant | 0 | 0 | The paper evaluates plant extracts and mentions streptokinase only as a positive control for thrombolytic activity, providing no exposure-response or dose-response data for streptokinase itself. |
| popPK | Rox_2017 | irrelevant | 0 | 0 | The study investigates the mechanism of action of fatty acids inhibiting streptokinase-mediated plasminogen activation, not the pharmacokinetic disposition parameters of streptokinase itself. |
| popPK | Ruckdeschel_1977 | irrelevant | 0 | 0 | The study is an in-vitro immunology assay measuring lymphocyte responsiveness to streptokinase as an antigen, not a pharmacokinetic study of streptokinase disposition. |
| popPK | Sathyamurthy_2021 | irrelevant | 0 | 0 | The paper is a clinical expert opinion on ticagrelor use, where streptokinase is only mentioned as a fibrinolytic agent for timing decisions, not as the subject of PK analysis. |
| PD | Sathyamurthy_2021 | not_relevant | 0 | 0 | The paper is a clinical expert opinion on ticagrelor use in ACS and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for streptokinase. |
| PGx | Sawhney_2016 | not_relevant | 0 | 0 | The paper reports pharmacokinetic improvements due to chemical modification (PEGylation), not genetic polymorphisms. |
| popPK | Schwerdt_1990 | irrelevant | 0 | 0 | The study focuses on pharmacokinetic modeling of creatine kinase and CK-MB (biomarkers) after treatment with anisoylated plasminogen streptokinase activator complex (APSAC), not the pharmacokinetic parameters of streptokinase itself. |
| PGx | Shahbazmohammadi_2026 | not_relevant | 0 | 0 | The paper investigates chemical modification (polysialylation) of the drug, not the effect of a genetic variant on pharmacokinetics or pharmacodynamics. |
| popPK | Sharmin_2018 | irrelevant | 0 | 0 | The study investigates the biological activities of a plant extract (Lagerstroemia speciosa) and uses streptokinase only as a standard comparator for thrombolytic assays, not as a subject drug for pharmacokinetic profiling. |
| PD | Sharmin_2018 | not_relevant | 0 | 0 | The paper investigates the biological activities of a plant extract (Lagerstroemia speciosa) and uses streptokinase only as a standard reference in a thrombolytic assay; it does not report a pharmacodynamic or exposure-response relationship for streptokinase itself. |
| popPK | Uddin_2019 | irrelevant | 0 | 0 | Streptokinase is used only as a standard comparator in a clot lysis assay; the study is a pharmacological investigation of a plant extract, not a PK study of streptokinase. |
| PD | Uddin_2019 | not_relevant | 0 | 0 | The paper investigates a plant extract and uses streptokinase only as a positive control in a clot lysis assay; it does not report any pharmacodynamic or exposure-response relationship for streptokinase itself. |
| popPK | Vassanelli_1987 | irrelevant | 1 | 1 | The study uses creatine kinase MB (CK-MB) compartmental modeling to estimate infarct size; the kinetic parameters (Ka, Kd) refer to the biomarker CK-MB, not the pharmacokinetics of the drug streptokinase. |
| popPK | Vermeer_1993 | irrelevant | 0 | 0 | The paper reports on infarct size assessment using LDH release, not the pharmacokinetic parameters (CL, V, etc.) of streptokinase itself. |
| popPK | Verstraete_1986 | irrelevant | 1 | 0 | The study measures the pharmacokinetics of rt-PA, not streptokinase; streptokinase is mentioned only as a comparator for systemic fibrinogenolysis. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The study focuses on antiplatelet therapy (clopidogrel/ticagrelor) and bleeding risk in stroke, containing no data or analysis regarding streptokinase pharmacokinetics or pharmacodynamics. |
| popPK | Zwaan_1998 | irrelevant | 0 | 0 | The paper is a clinical study of vena cava filters and mentions streptokinase only as a thrombolytic agent used in the treatment of patients, without reporting any pharmacokinetic parameters. |
| popPK | de_1995 | irrelevant | 1 | 0 | The paper is a review discussing drug interactions primarily for alteplase and saruplase, mentioning streptokinase only as a class example without providing specific quantitative PK parameters. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract and contains no data, results, or PD parameters. |
| popPK | unknown_1998 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamics and efficacy of the platelet inhibitor lamifiban, using streptokinase only as a background thrombolytic agent rather than reporting its pharmacokinetic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for streptokinase. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a title/header for a book of abstracts and contains no data, analysis, or parameters regarding streptokinase pharmacodynamics. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is a conference title and contains no scientific content, data, or pharmacodynamic analysis for streptokinase. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or parameters regarding streptokinase pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
