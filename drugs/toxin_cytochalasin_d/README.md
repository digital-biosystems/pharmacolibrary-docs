<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Cytochalasin D&quot;}]"></div>

# Cytochalasin D

- **generic name:** Cytochalasin D
- **T3DB:** [T3D3678](http://www.t3db.ca/toxins/T3D3678) · **PubChem:** [CID 6433799](https://pubchem.ncbi.nlm.nih.gov/compound/6433799)

## About

Cytochalasins are mycotoxins that have the ability to bind to actin filaments and block polymerization and the elongation of actin. As a result, they can change cellular morphology, inhibit cellular processes such as cell division, and cause cells to undergo apoptosis. Cytochalasins also have the ability to permeate cell membranes, prevent cellular translocation, cause cells to enucleate, and affect other aspects of biological processes unrelated to actin polymerization. …

- **Category:** Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Cytochalasin D is has been isolated from the fungi Metarrhizium anisopliae and Zygosporium masonii.
- **Mechanism of toxicity:** Cytochalasins are known to bind to the barbed, fast growing plus ends of microfilaments, which then blocks both the assembly and disassembly of individual actin monomers from the bound end. Once bound, cytochalasin essentially caps the end of the new actin filament. …
- **Health effects:** Major biological effects of cytochalasins include inhibition of the division of cytoplasm, reversible inhibition of cell movement, induction of nuclear extrusion, inhibition of such processes as phagocytosis, platelet aggregation and clot retraction, glucose transport, thyroid secretion, and release of growth hormone. Some cytochalasins have been shown to have developmental effects.
- **Acute toxicity:** LD50: 18.5 mg/kg (Subcutaneous, Mouse)
- **Treatment:** Consider activated charcoal after gastrointestinal absportion. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3678">T3DB T3D3678</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 22144-77-0</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-18 22:54 | 30:11 | 0/0/0 | 0/0/0 | 0/0/0 | 651,263/17,413 | einfracz / qwen3.8-flash-next | 19 | 2/17 | 19/0 | 0 |

## Coverage

- **PubMed hits:** 80 matched, 100 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rankin_1994.pdf` | Rankin S et al., Platelet-derived growth factor modulati…, The Journal of biological c… (1994) | pd | 4 |  | [8276872](https://www.ncbi.nlm.nih.gov/pubmed/8276872) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-11-18 22:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexandrov_2009 | irrelevant | 2 | 0 | The paper describes an in vitro cell microscopy study of F-actin disruption, focusing on image processing and a generic first-order reaction model for filament loss, rather than reporting quantitative whole-body or cellular toxicokinetic parameters (like absorption, distribution, clearance, or partition coefficients) for the substance itself in an organism. |
| popPK | Asmis_2005 | irrelevant | 0 | 0 | Cytochalasin D is mentioned only as a chemical inhibitor of actin polymerization used as a tool in the experiment, not as a subject of toxicokinetic study. |
| popPK | Bianchi_2006 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects of cytochalasin D on actin cytoskeleton and glutamate transport in cell cultures, but reports no toxicokinetic parameters (disposition, half-life, clearance, etc.). |
| popPK | Boll_1988 | irrelevant | 0 | 0 | The paper reports dose-response data for cell velocity inhibition (pharmacodynamics), not quantitative toxicokinetic parameters like rate constants or partition coefficients. |
| popPK | Bookstein_1996 | irrelevant | 0 | 0 | Cytochalasin D is mentioned only as an inhibitor used to probe the cytoskeletal regulation of a sodium exchanger, with no kinetic parameters for Cytochalasin D itself reported. |
| popPK | Brandhorst_2004 | irrelevant | 0 | 0 | Cytochalasin D is used only as a pharmacological inhibitor in an in vitro assay, with no toxicokinetic parameters reported for it. |
| popPK | Castaneda-Sceppa_2010 | irrelevant | 0 | 0 | Cytochalasin D is used only as a chemical reagent to inhibit actin-dependent trafficking in an in vitro cell study, with no toxicokinetic parameters reported for the substance itself. |
| popPK | Chazaud_1994 | irrelevant | 0 | 0 | Cytochalasin D is used only as a chemical inhibitor to probe ricin's mechanism of action, with no toxicokinetic parameters for cytochalasin D itself reported. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | Cytochalasin D is used solely as an experimental tool to inhibit actin polymerization and verify phagocytosis mechanisms, not as a substance with reported toxicokinetic parameters. |
| popPK | Cruz-Leal_2018 | irrelevant | 0 | 0 | Cytochalasin D is used solely as an experimental inhibitor to block phagocytosis, with no toxicokinetic parameters (half-lives, clearance, etc.) reported for the substance itself. |
| popPK | Dai_2006 | irrelevant | 0 | 0 | Cytochalasin D is mentioned only as a pharmacological tool to disrupt actin cytoskeleton, with no toxicokinetic parameters reported. |
| popPK | De_2022 | irrelevant | 0 | 0 | The paper studies the mechanistic role of cytochalasin D in platelet apoptosis but reports no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for the substance. |
| popPK | Dearnley_2016 | irrelevant | 0 | 0 | The paper discusses cytochalasin D as a pharmacological tool to modulate membrane mechanics in a biophysics study, reporting no quantitative toxicokinetic parameters. |
| popPK | Duan_2014 | irrelevant | 0 | 0 | The paper describes an in vitro cell culture study examining cytochalasin D's effect on chondrocyte metabolism and apoptosis, with no toxicokinetic parameters (e.g., ADME, clearance, half-life) reported. |
| popPK | El_1999 | irrelevant | 0 | 0 | Cytochalasin D is mentioned only as a comparator drug to demonstrate that actin disorganization alone does not inhibit phospholipase D; no toxicokinetic parameters are reported. |
| popPK | Eto_2026 | irrelevant | 0 | 0 | The paper focuses on macrophage heterogeneity and phagocytosis mechanisms, using cytochalasin D only as a laboratory tool/inhibitor without reporting any toxicokinetic parameters (ADME, half-life, clearance) for it. |
| popPK | Farrera_2013 | irrelevant | 0 | 0 | The paper uses cytochalasin D solely as a tool inhibitor to demonstrate the mechanism of macrophage endocytosis, reporting no kinetic parameters for the substance itself. |
| popPK | Fenton_2015 | irrelevant | 0 | 0 | The paper uses cytochalasin D as a co-exposure/comparator to block actin effects in an oncology study, with no quantitative toxicokinetic parameters reported. |
| popPK | Fischer_1995 | irrelevant | 0 | 0 | The paper describes a cellular mechanism of action involving chloride channels and does not report quantitative toxicokinetic parameters for cytochalasin D. |
| popPK | Flynn_2010 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study where cytochalasin D is used merely as a chemical inhibitor to test contractility independence, with no toxicokinetic parameters reported. |
| popPK | Foissner_2007 | irrelevant | 1 | 0 | The paper reports on the pharmacological effects and potency of cytochalasins in algal cells, not toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Fort_1989 | irrelevant | 1 | 1 | The paper is a developmental toxicity assay (teratogenicity) in frog embryos using LC50/EC50 endpoints, reporting no quantitative toxicokinetic parameters (such as absorption, distribution, metabolism, or excretion rates/constants). |
| popPK | Frigeri_1999 | irrelevant | 1 | 0 | The paper describes the pharmacological effects of cytochalasin D on cell signaling and degranulation in vitro, but reports no quantitative toxicokinetic parameters such as clearance, volume of distribution, or rate constants. |
| popPK | Fullner_2000 | irrelevant | 0 | 0 | Cytochalasin D is only mentioned as a control agent to verify actin states, not as the subject of any kinetic modeling or parameter measurement. |
| popPK | Gao_2017 | irrelevant | 0 | 0 | The paper studies the uptake kinetics of Advanced Glycation End Products (AGEs), using cytochalasin D only as a pharmacological inhibitor to block endocytosis, not as the subject substance for toxicokinetic modeling. |
| popPK | García_1997 | irrelevant | 0 | 0 | The paper uses cytochalasin D as a tool to disrupt the actin cytoskeleton in a signal transduction study, reporting no toxicokinetic parameters (half-life, clearance, etc.) for the substance. |
| popPK | Gilani_1986 | irrelevant | 0 | 0 | The paper describes a teratogenicity study reporting developmental outcomes and dose-response relationships, but contains no quantitative toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Goddette_1986 | irrelevant | 0 | 0 | The paper discusses the biochemical mechanism of actin polymerization and enzyme kinetics (binding rates, critical concentrations) in vitro, but reports no toxicokinetic parameters (ADME) for cytochalasin D. |
| popPK | Goldoni_1998 | irrelevant | 0 | 0 | The paper reports on the biological activity of cytochalasin D in inhibiting Legionella multiplication in HeLa cells and contains no quantitative toxicokinetic parameters or disposition data. |
| popPK | Han_2003 | irrelevant | 0 | 0 | The paper describes a pharmacological mechanism in human platelets where cytochalasin D is used as an inhibitor, with no quantitative toxicokinetic parameters reported. |
| popPK | Hebert_2017 | irrelevant | 0 | 0 | The paper focuses on optical force measurements of macrophage cells and spore uptake; cytochalasin D is used only as a biological control to alter cell mechanics, with no toxicokinetic parameters reported. |
| popPK | Hirano_1987 | irrelevant | 0 | 0 | The paper reports on cell biology mechanisms of cadherin adhesion and uses cytochalasin D merely as a reagent to disrupt actin; it contains no toxicokinetic parameters (half-life, clearance, etc.) for cytochalasin D. |
| popPK | Ho_2007 | irrelevant | 0 | 0 | The paper uses cytochalasin D solely as a laboratory tool (actin depolymerization agent) to inhibit internalization, with no toxicokinetic data or parameters provided. |
| popPK | Hua_2007 | irrelevant | 0 | 0 | Cytochalasin D is mentioned solely as a pharmacological inhibitor of endocytosis to study LPS uptake, with no kinetic parameters or toxicokinetic data reported for cytochalasin D itself. |
| PGx | Inaba_2019 | not_relevant | 0 | 0 | The paper uses cytochalasin D as a chemical tool to inhibit actin polymerization in an invasion assay, not as a therapeutic drug; there is no pharmacogenomic analysis (gene variant effect on PK/PD) involving the host or the bacterium in the context of cytochalasin D metabolism or response. |
| popPK | Iqbal_2013 | irrelevant | 0 | 0 | The paper uses cytochalasin D only as an inhibitor of actin polymerization in a macrophage chemotaxis assay and reports no toxicokinetic parameters for the substance itself. |
| popPK | Jackson_2014 | irrelevant | 0 | 0 | The paper uses cytochalasin D as a mechanistic probe for actin inhibition and reports no toxicokinetic parameters (concentrations, rates, coefficients) for the substance. |
| popPK | Jain_2005 | irrelevant | 0 | 0 | Cytochalasin D is used merely as an inhibitor (vehicle/reagent) to study Surfactant Protein A clearance; no kinetic parameters are reported for Cytochalasin D itself. |
| popPK | Jati_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on host immune signaling (Wnt5A, autophagy) where cytochalasin D is used merely as a chemical inhibitor to block actin assembly, with no kinetic parameters reported for cytochalasin D itself. |
| popPK | Kamimura_2015 | irrelevant | 0 | 0 | The paper describes an in vitro assay platform for cell migration where cytochalasin D is used as a pharmacological agent to modulate cell behavior; it does not report toxicokinetic parameters such as absorption, distribution, metabolism, or excretion rates. |
| popPK | Khurana_1997 | irrelevant | 0 | 0 | Cytochalasin D is used solely as an inhibitory pharmacological tool/reagent in a platelet function assay, with no toxicokinetic parameters reported. |
| popPK | Kitchin_1986 | irrelevant | 0 | 0 | The paper discusses cytochalasin D in the context of in vitro teratogenicity screening assays, mentioning metabolic activation effects on toxicity outcomes, but reports no quantitative toxicokinetic parameters such as rate constants, partition coefficients, or volumes of distribution. |
| popPK | Kong_2008 | irrelevant | 0 | 0 | Cytochalasin D is used solely as a pharmacological inhibitor of actin polymerization in a signaling study, with no toxicokinetic parameters reported. |
| popPK | Korsholm_2007 | irrelevant | 0 | 0 | The paper uses cytochalasin D solely as a laboratory reagent (inhibitor of endocytosis) to investigate liposome mechanisms and reports no toxicokinetic parameters for the substance itself. |
| popPK | Krause_2019 | irrelevant | 0 | 0 | Cytochalasin D is used solely as a chemical tool to inhibit actin polymerization to study macrophage mechanics; no toxicokinetic parameters for cytochalasin D are reported. |
| popPK | Kushwaha_2021 | irrelevant | 0 | 0 | The paper focuses on cytotoxicity and metabolite profiling in cell lines and mice, reporting no quantitative toxicokinetic parameters (half-life, clearance, Vd, etc.) for cytochalasin_d or its metabolites. |
| popPK | Laudadio_2005 | irrelevant | 0 | 0 | The paper uses cytochalasin D as a tool drug to modulate actin in cells for rheology studies and reports no toxicokinetic parameters for the substance itself. |
| popPK | Lewis_1998 | irrelevant | 0 | 0 | The paper describes an in vitro mechanistic study on folate receptor uptake using cytochalasin D as a tool to disrupt actin, with no quantitative toxicokinetic parameters reported. |
| popPK | Li_2013 | irrelevant | 0 | 0 | Cytochalasin D is used solely as an experimental reagent/inhibitor to test phagocytosis mechanisms, not as the subject of toxicokinetic analysis. |
| popPK | Madara_1986 | irrelevant | 0 | 0 | The paper studies the effect of cytochalasin D on tight junction permeability and cytoskeletal structure, not its absorption, distribution, metabolism, or excretion (toxicokinetics). |
| popPK | Malcolm_1996 | irrelevant | 0 | 0 | Cytochalasin D is used solely as a tool compound to disrupt actin filaments in an in vitro mechanism study and no kinetic parameters are reported. |
| popPK | McIntosh_1987 | irrelevant | 0 | 0 | Cytochalasin D is used merely as a pharmacological tool to modify microfilaments in sheep pituitary cells, with no toxicokinetic data (absorption, distribution, metabolism, excretion) reported for cytochalasin D itself. |
| PGx | Meszaros_2013 | not_relevant | 0 | 0 | The paper discusses the pharmacodynamic effect of cytochalasin D on actin cytoskeleton and ABCB1 transporter localization/activity, not how a host gene variant alters the pharmacokinetics or pharmacodynamics of cytochalasin D itself. |
| popPK | Miranda_1974 | irrelevant | 0 | 0 | The paper reports on morphological and functional effects (contracture, glucose transport) of Cytochalasin D on established cell lines but provides no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Mohning_2018 | irrelevant | 0 | 0 | Cytochalasin D is used solely as an experimental inhibitor of phagocytosis, not as the subject of toxicokinetic analysis. |
| popPK | Naicker_2021 | irrelevant | 0 | 0 | Cytochalasin D is used merely as an analytical reagent/inhibitor of actin polymerization to confirm phagocytosis mechanism, with no toxicokinetic parameters reported. |
| popPK | Nanni_2016 | irrelevant | 0 | 0 | Cytochalasin-D is used only as a cytoskeleton-disrupting chemical reagent in an in vitro cell biology study of LRP-1 trafficking, with no toxicokinetic parameters reported. |
| popPK | Nelson_2001 | irrelevant | 0 | 0 | Cytochalasin D is used solely as an experimental agent (cytoskeleton disruptor) to study the mechanism of a different factor, with no toxicokinetic parameters reported. |
| PGx | Nelson_2001 | not_relevant | 0 | 0 | The paper discusses cytochalasin D only as a pharmacological tool to inhibit cytoskeletal mechanisms, with no gene variants involved and no pharmacokinetic or pharmacodynamic parameters measured for the drug itself. |
| popPK | Nojiri_2000 | irrelevant | 0 | 0 | The paper describes the biological effect of cytochalasin D on enzyme activity and actin structure in vitro, reporting no quantitative toxicokinetic parameters such as half-lives or clearance rates. |
| popPK | Nuccitelli_1985 | irrelevant | 0 | 0 | Cytochalasin D is used as a chemical inhibitor to maintain cell polarity stability, but no toxicokinetic parameters or disposition data are reported. |
| popPK | Oda_1992 | irrelevant | 0 | 0 | The paper reports on platelet actin content using cytochalasin D as an experimental tool/inhibitor, with no quantitative toxicokinetic parameters for the substance itself. |
| popPK | Pantazopoulou_2023 | irrelevant | 0 | 0 | Cytochalasin D is used solely as a pharmacological inhibitor to block endocytosis in cell cultures, with no toxicokinetic parameters reported for the substance itself. |
| popPK | Parker_2012 | irrelevant | 0 | 0 | Cytochalasin D is used as a pharmacological inhibitor in an immunology study, with no toxicokinetic parameters reported. |
| popPK | Peerschke_1995 | irrelevant | 0 | 0 | The paper focuses on fibrinogen distribution on platelets; cytochalasin D is used only as a mechanical inhibitor to prevent redistribution, with no toxicokinetic parameters or quantitative disposition data reported for it. |
| popPK | Pica-Mattoccia_2007 | irrelevant | 0 | 0 | Cytochalasin D is used as a pharmacological agent to block calcium channels in an in vitro schistosome study, not as the subject of toxicokinetic analysis. |
| popPK | Pichon_2004 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study on actin dynamics and cytochalasin D is used merely as a laboratory reagent to displace proteins, with no quantitative toxicokinetic parameters reported. |
| popPK | Poli_2001 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (fluid pressure changes, EC50) of cytochalasin D on joint physiology but provides no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Poli_2002 | irrelevant | 0 | 0 | Cytochalasin D is used as a pharmacological tool to disrupt F-actin and measure tissue permeability, not as the subject of toxicokinetic disposition studies; no kinetic parameters for cytochalasin D itself are reported. |
| popPK | Rahmi_2026 | irrelevant | 0 | 0 | The paper focuses on the isolation, structural identification, and in vitro biological activity (antimalarial/anticancer) of cytochalasin D, with no quantitative toxicokinetic parameters reported. |
| popPK | Ramm_1994 | irrelevant | 0 | 0 | The paper reports kinetic parameters for ferritin, using cytochalasin D only as a chemical inhibitor/co-treatment to study mechanism; no toxicokinetic parameters for cytochalasin D are reported. |
| popPK | Rankin_1994 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| popPK | Rao_1992 | irrelevant | 1 | 0 | The paper reports on cellular pharmacodynamics (actin polymerization) without any quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Ryning_1978 | irrelevant | 0 | 0 | The paper discusses the biological effect of cytochalasin D on cell entry mechanisms but reports no quantitative toxicokinetic parameters or numeric kinetic values. |
| popPK | Sahnoun_2027 | irrelevant | 2 | 0 | The paper focuses on nanoparticle formulation and qualitative biological effects, with no quantitative toxicokinetic parameters or numeric values for cytochalasin D reported in the evidence. |
| popPK | Saito_1996 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of marine toxins on actin, using cytochalasin D only as a comparator for biological activity, with no toxicokinetic parameters reported. |
| popPK | Schiller_2012 | irrelevant | 0 | 0 | Cytochalasin D is used solely as an analytical inhibitor to probe the mechanism of pDC activation, with no toxicokinetic parameters reported. |
| popPK | Schmidt_1998 | irrelevant | 0 | 0 | The substance of interest is human calcitonin; cytochalasin D is used merely as an experimental inhibitor and no kinetic parameters are reported for it. |
| popPK | Schmidt_2005 | irrelevant | 0 | 0 | Cytochalasin D is mentioned only as a chemical comparator/treatment to mimic immune suppression effects, with no quantitative toxicokinetic parameters reported for it. |
| popPK | Selden_1980 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| popPK | Smolen_1991 | irrelevant | 0 | 0 | The paper discusses the pharmacological effect of cytochalasin D on neutrophil secretion but reports no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.). |
| popPK | Sugidachi_1998 | irrelevant | 0 | 0 | The paper focuses on mycalolide-B, using cytochalasin-D only as a comparator for pharmacological mechanisms without reporting any quantitative kinetic parameters for cytochalasin-D. |
| popPK | Sutherland_2009 | irrelevant | 0 | 0 | Cytochalasin D is used merely as a pharmacological inhibitor (actin inhibitor) in a cell biology experiment regarding a different substance (poly-gamma-D-glutamic acid) and contains no kinetic parameters for cytochalasin D itself. |
| popPK | Takeshige_1982 | irrelevant | 0 | 0 | The paper investigates cellular mechanisms of calcium release and superoxide formation in leukocytes, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for cytochalasin D. |
| popPK | Tandon_2024 | irrelevant | 0 | 0 | Cytochalasin D is used only as a phagocytosis inhibitor/reagent, and no kinetic parameters are reported. |
| popPK | Tangkijvanich_2002 | irrelevant | 0 | 0 | Cytochalasin D is used only as an experimental inhibitor/reagent in a cell signaling study and no toxicokinetic parameters are reported for it. |
| popPK | Taylor_1995 | irrelevant | 0 | 0 | Cytochalasin D is used only as a mechanistic probe to alter membrane permeability, with no kinetic parameters reported. |
| popPK | Trendowski_2014 | irrelevant | 0 | 0 | The paper reports acute toxicity endpoints (LD50/tolerated doses) but no quantitative toxicokinetic parameters such as half-life, clearance, volume of distribution, or partition coefficients. |
| popPK | Vidali_2001 | irrelevant | 0 | 0 | The paper studies the biological effect of cytochalasin D on pollen tube growth in plants, not its toxicokinetic disposition in animals or humans. |
| popPK | Wang_2007 | irrelevant | 0 | 0 | Cytochalasin D is used solely as a pharmacological tool (cytoskeleton disruptor) to investigate glutamate release mechanisms, with no toxicokinetic parameters reported for it. |
| popPK | Weibel_2012 | irrelevant | 0 | 0 | The paper investigates cytoskeletal disruption and lipid metabolism in macrophages using cytochalasin D as a pharmacological tool, with no report of toxicokinetic parameters. |
| popPK | Wiley_1980 | irrelevant | 0 | 0 | The paper reports teratogenic effects and morphological changes but contains no quantitative toxicokinetic parameters such as rates, constants, or volumes for cytochalasin D. |
| popPK | Woo_2014 | irrelevant | 0 | 0 | The paper uses cytochalasin D merely as an experimental inhibitor of actin polymerization in a cell culture study of bacterial infection; no toxicokinetic parameters for cytochalasin D are reported. |
| popPK | Wu_2011 | irrelevant | 0 | 0 | Cytochalasin D is used merely as a pharmacological inhibitor to block actin polymerization and study bacterial invasion mechanisms, with no toxicokinetic parameters reported. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The paper reports antiviral potency (EC50) and cytotoxicity (CC50) values for cytochalasin D in an in vitro cell culture model, but contains no quantitative toxicokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Yao_2024 | irrelevant | 0 | 0 | Cytochalasin D is used solely as a mechanistic inhibitor (internal control/tool) in a study focused on resveratrol, with no kinetic parameters for cytochalasin D reported. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | Cytochalasin D is used merely as an experimental reagent to inhibit cytoskeletal transport, with no toxicokinetic parameters reported for the substance itself. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | Cytochalasin D is mentioned only as a positive control/inhibitor for phagocytosis assays, with no pharmacokinetic parameters reported for cytochalasin D itself. |
| popPK | Zhu_2017 | irrelevant | 0 | 0 | Cytochalasin D is mentioned only as a chemical inhibitor/reagent to attenuate phagocytosis, with no kinetic parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcytochalasin_d%5D&body=Drug%3A%20cytochalasin_d%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cytochalasin_d/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
