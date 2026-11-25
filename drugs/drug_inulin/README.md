<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;Inulin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Inulin_Duong2021_reference&quot;,&quot;label&quot;:&quot;Duong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_inulin/Inulin_Duong2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# Inulin

- **generic name:** Inulin
- **ATC codes:** `V04CH01`
- **DrugBank:** [DB00638](https://go.drugbank.com/drugs/DB00638) · **PubChem:** none
- **groups:** approved, investigational, nutraceutical

## About

Inulin is a diagnostic agent used to assess renal function and ureteral injuries. It is approved for use and also considered a nutraceutical.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="cat" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Haller_2003_reference](drugs/drug_inulin/Inulin_Haller2003_reference.md) | — | 1-compartment (no model) | 1 | Haller M et al., Single-injection inulin clearance for r…, Journal of feline medicine… (2003) | [10.1016/S1098-612X(03)00005-6](https://doi.org/10.1016/S1098-612X(03)00005-6) |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Hwang_2021_reference](drugs/drug_inulin/Inulin_Hwang2021_reference.md) | — | 1-compartment (no model) | 2 | Hwang SK et al., Novel in vivo and ex vivo hybrid in viv…, Journal of pharmacological… (2021) | [10.1016/j.vascn.2021.107084](https://doi.org/10.1016/j.vascn.2021.107084) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Duong_2021_reference](drugs/drug_inulin/Inulin_Duong2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Duong A et al., Aminoglycosides in the Intensive Care U…, Antibiotics (Basel, Switzer… (2021) | [10.3390/antibiotics10050507](https://doi.org/10.3390/antibiotics10050507) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 23:01 | 0:04 | 2/1/0 | 0/0/0 | 0/0/0 | 4,084/158 | einfracz / qwen3.8-27b | 23 | 7/13 | 21/2 | 0 |

## Coverage

- **PubMed hits:** 359 matched, 85 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verhagen_1994.pdf` | Verhagen CA et al., The renal clearance of cefuroxime and c…, British journal of clinical… (1994) | pd | 5 | [10.1111/j.1365-2125.1994.tb04260.x](https://doi.org/10.1111/j.1365-2125.1994.tb04260.x) | [8186065](https://www.ncbi.nlm.nih.gov/pubmed/8186065) | metadata signals extractable PD data (EC50) |
| `Pagano_2016.pdf` | Pagano I et al., Chemical profile and cellular antioxida…, Food & function (2016) | pd | 4 | [10.1039/c6fo01443g](https://doi.org/10.1039/c6fo01443g) | [27809319](https://www.ncbi.nlm.nih.gov/pubmed/27809319) | metadata signals extractable PD data (EC50) |
| `VanWert_2008.pdf` | VanWert AL et al., Impaired clearance of methotrexate in o…, Pharmaceutical research (2008) | pgx | 8 | [10.1007/s11095-007-9407-0](https://doi.org/10.1007/s11095-007-9407-0) | [17660957](https://www.ncbi.nlm.nih.gov/pubmed/17660957) | metadata signals extractable PGX data (Slc22a8, PK/PD-context) |
| `Zhang_2018.pdf` | Zhang Z et al., Drug Clearance from Cerebrospinal Fluid…, Molecular pharmaceutics (2018) | pgx | 8 | [10.1021/acs.molpharmaceut.7b00852](https://doi.org/10.1021/acs.molpharmaceut.7b00852) | [29436232](https://www.ncbi.nlm.nih.gov/pubmed/29436232) | metadata signals extractable PGX data (Slc22a6, PK/PD-context) |
| `Enokizono_2007.pdf` | Enokizono J et al., Effect of breast cancer resistance prot…, Molecular pharmacology (2007) | pgx | 7 | [10.1124/mol.107.034751](https://doi.org/10.1124/mol.107.034751) | [17644650](https://www.ncbi.nlm.nih.gov/pubmed/17644650) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |

<sub>queue written 2026-11-23 23:01 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2010 | irrelevant | 0 | 0 | Inulin is used only as a probe marker to assess blood-brain barrier integrity, not as the subject drug for PK parameter estimation. |
| PGx | Agarwal_2010 | not_relevant | 0 | 0 | The study focuses on gefitinib pharmacokinetics, and inulin is used only as a marker for blood-brain barrier integrity, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Bergman_1990 | irrelevant | 0 | 0 | Inulin is used only as a reference marker to assess transcapillary transport of insulin; the study focuses on insulin kinetics, and no quantitative PK parameters for inulin are reported. |
| PGx | Bergman_1990 | not_relevant | 0 | 0 | The study investigates the transport mechanism of insulin in dogs and uses inulin as a control marker, but it does not report pharmacogenomic effects on inulin's pharmacokinetics. |
| popPK | Berndt_1984 | irrelevant | 2 | 0 | Inulin is used only as a diagnostic marker for measuring renal clearance in a study of DFP effects, not as the subject drug for PK parameter estimation. |
| PGx | Berndt_1984 | not_relevant | 0 | 10 | The paper investigates the effect of a chemical agent (DFP) on renal function and inulin clearance, but does not report any pharmacogenomic variation (gene variant/genotype) affecting PK/PD parameters. |
| popPK | Bhatnagar_2023 | irrelevant | 0 | 0 | Inulin is only a food-encapsulation ingredient (iron fortification study); no PK parameters for inulin are reported anywhere. |
| popPK | Blaser_2021 | irrelevant | 1 | 2 | Inulin is only a diagnostic GFR probe (inulin clearance measured as renal function marker); the PK parameters reported (Ka, V, half-life) are for metamizole metabolites and naproxen, not for inulin itself. |
| popPK | Blazquez_2012 | irrelevant | 0 | 0 | Inulin is used merely as a non-absorbable marker/extracellular volume tracer in oocyte microinjection experiments to study ABCG2 transporter function, not for determining the drug's own pharmacokinetic parameters. |
| PGx | Blazquez_2012 | not_relevant | 0 | 0 | The paper focuses on bile acid transport by ABCG2, with inulin used only as a non-absorbed permeability marker, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Bochud_2008 | not_relevant | 2 | 5 | ABCB1 variants are associated with renal function (GFR measured via inulin clearance), but inulin is only a GFR marker probe, not a drug whose PK/PD parameter is altered by genotype. |
| PGx | Chang_2023 | not_relevant | 0 | 0 | Inulin is a prebiotic fiber, not a drug; the paper reports microbiome/metagenomic responses by APOE genotype, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Charlton_2020 | not_relevant | 2 | 3 | LRP2 genotype affects disease phenotype and GFR measured via inulin clearance, but inulin is a diagnostic tracer, not a drug with PK/PD pharmacogenomic effect reported. |
| popPK | Charoenwongpaiboon_2023 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme kinetics and stability data for inulin synthase, not pharmacokinetic parameters for the drug inulin. |
| PGx | Charoenwongpaiboon_2023 | not_relevant | 0 | 0 | The paper describes the expression of plant-derived inulinase enzymes (LrInu) in a host system (likely yeast) to study their stability and catalytic efficiency for FOS synthesis, not a pharmacogenomic effect of human genes on the pharmacokinetics or pharmacodynamics of the drug inulin. |
| popPK | Chremos_1986 | irrelevant | 0 | 0 | Inulin is used only as a diagnostic agent to measure renal clearance, not as the subject of a pharmacokinetic parameter study. |
| PGx | Chremos_1986 | not_relevant | 0 | 0 | The paper describes the pharmacodynamics of famotidine and mentions inulin clearance as a control for renal function, but it does not report how genetic variants affect inulin's PK/PD. |
| popPK | Cousins_2002 | irrelevant | 1 | 0 | Inulin is used only as a historical comparator for DTPA and bromide, with no quantitative disposition parameters reported for inulin itself in this study. |
| PGx | Cousins_2002 | not_relevant | 0 | 0 | The study compares microvascular exchange kinetics of bromide and DTPA in healthy/clinical subjects and does not report pharmacogenomic effects on inulin. |
| popPK | Desrosiers_2018 | irrelevant | 0 | 0 | Inulin is tested as a phytochemical affecting artemisinin permeability, not as the subject drug for PK parameter estimation. |
| PGx | Desrosiers_2018 | not_relevant | 0 | 0 | The paper investigates the effect of plant matrix phytochemicals (including inulin) on the intestinal permeability of artemisinin, not the pharmacokinetics of inulin or the effect of genetic variants on any drug. |
| popPK | Dotsenko_2023 | irrelevant | 0 | 0 | The paper studies the thermostability of the enzyme exo-inulinase, not the pharmacokinetics of the substrate inulin. |
| PGx | Dotsenko_2023 | not_relevant | 0 | 0 | The paper discusses the engineering of an enzyme (exo-inulinase) for industrial use, not the pharmacogenomic effects of human gene variants on the PK/PD of inulin as a drug. |
| popPK | Duong_2021 | irrelevant | 0 | 0 | This is a review of population PK models for aminoglycosides (amikacin, gentamicin, tobramycin); inulin is not the subject drug and no inulin parameters appear. |
| popPK | Durbin_1989 | irrelevant | 2 | 0 | Inulin is used as a comparator/reference tracer to validate the model for chelating agents (EDTA/DTPA), and no specific numeric PK parameters for inulin are provided in the text. |
| PGx | Durbin_1989 | not_relevant | 0 | 0 | The paper reports animal-to-human extrapolation of inulin kinetics, not a pharmacogenomic effect on PK/PD parameters. |
| popPK | Enokizono_2007 | irrelevant | 0 | 0 | Inulin is used only as a diagnostic marker for tissue-to-plasma ratios, and the study focuses on the pharmacokinetics of phytoestrogens, not inulin. |
| PGx | Enokizono_2007 | not_relevant | 0 | 0 | Inulin is used as a marker for plasma volume and free space, not as the drug of interest; the study reports the pharmacokinetics of phytoestrogens. |
| PGx | Feng_2021 | not_relevant | 0 | 0 | Inulin is a dietary fiber, not a drug; the study reports microbiota changes by genotype/diet, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Gaspari_1997 | irrelevant | 0 | 0 | The paper is a review of GFR measurement methods where inulin is used only as a reference standard/comparator, and no quantitative pharmacokinetic parameters for inulin itself are reported. |
| PGx | Gaspari_1997 | not_relevant | 0 | 0 | The text describes methods for measuring glomerular filtration rate using inulin and other markers, but does not report any pharmacogenomic effects or gene variants affecting inulin pharmacokinetics. |
| popPK | Grenz_2006 | irrelevant | 0 | 0 | Inulin is used only as a marker for glomerular filtration rate (GFR), not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Grenz_2006 | not_relevant | 0 | 0 | The paper does not study inulin as a drug, but uses it as a marker for measuring glomerular filtration rate, and does not report any genetic variants. |
| popPK | Grover_1983 | irrelevant | 0 | 0 | The study characterizes plasma membrane fractions in canine smooth muscle and uses inulin only as an exclusion volume marker for size characterization, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Grover_1983 | not_relevant | 0 | 0 | The paper is a study on subcellular fractionation and calcium transport in smooth muscle membranes, using inulin only as a volume marker, and contains no pharmacogenomic or pharmacokinetic data for inulin as a drug. |
| PGx | Guo_2021 | not_relevant | 2 | 3 | Uox knockout is a disease model, not a pharmacogenomic variant affecting inulin PK/PD; no gene-variant effect on inulin parameters reported. |
| PGx | Haller_2003 | not_relevant | 0 | 0 | The paper describes the pharmacokinetic methodology for measuring GFR in cats but reports no genetic variants or pharmacogenomic effects. |
| popPK | Hooper_2025 | irrelevant | 0 | 0 | This is a population PK study of iohexol and iopamidol; inulin is only mentioned as a filtration marker, with no inulin PK parameters reported. |
| popPK | Huisman-de_1995 | irrelevant | 0 | 0 | The subject drug is amoxicillin, and inulin is used only as a probe for measuring glomerular filtration rate, not as the primary pharmacokinetic subject. |
| PGx | Huisman-de_1995 | not_relevant | 0 | 0 | The paper investigates the relationship between inulin clearance and amoxicillin pharmacokinetics, not a pharmacogenomic effect (gene variant) on inulin's PK/PD parameters. |
| popPK | Hwang_2021 | relevant | 7 | 4 | The paper reports GFR values derived from a two-compartment model of inulin clearance in mice, but specific PK parameters (CL, V, ka) are not explicitly listed as numeric values. |
| PGx | Hwang_2021 | not_relevant | 0 | 0 | The paper describes a method for measuring GFR using inulin clearance in mice affected by a drug (Cyclosporine A), but it does not investigate any gene variant, genotype, or pharmacogenomic influence on the parameters. |
| popPK | Jackson_2016 | irrelevant | 0 | 0 | Inulin is used solely as a marker for glomerular filtration rate (GFR) measurement in a mechanistic study of kidney injury, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Jackson_2016 | not_relevant | 0 | 0 | The paper investigates CNPase genotypes and AKI severity, using inulin only as a marker for GFR, not as a drug being studied for pharmacogenomic effects on its own PK/PD. |
| popPK | Jin_2006 | irrelevant | 1 | 2 | Inulin is used solely as a paracellular marker in an in vitro transport study, not as a subject drug for pharmacokinetic characterization. |
| PGx | Jin_2006 | not_relevant | 0 | 0 | The paper investigates the effect of temperature (hypothermia) on MDR1-mediated transport of digoxin, using inulin only as a paracellular marker to verify tight junction integrity; it does not report any pharmacogenomic effects on inulin's pharmacokinetics or pharmacodynamics. |
| popPK | Johnson_2024 | irrelevant | 0 | 0 | This is a PK study of migalastat, not inulin; inulin does not appear as the subject drug and no inulin parameters are present. |
| popPK | Karimzadegan_1979 | irrelevant | 0 | 0 | The study is a dietary bioavailability assay measuring weight gain and plasma ketones in rats, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for inulin. |
| PGx | Karimzadegan_1979 | not_relevant | 0 | 0 | The paper studies the comparative bioavailability of carbohydrates in rats, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of inulin. |
| popPK | Kartbayeva_2026 | irrelevant | 0 | 0 | This is a phytochemistry/pharmacology review of Cirsium species; inulin is only mentioned as a root carbohydrate, with no PK parameters for inulin. |
| popPK | King_2002 | irrelevant | 1 | 0 | Inulin is used only as a diagnostic marker for GFR in cats, while the pharmacokinetic parameters reported are for the drug benazepril. |
| PGx | King_2002 | not_relevant | 0 | 0 | The paper studies renal insufficiency (a disease state) rather than a genetic variant/genotype/phenotype, and inulin is used only as a marker for GFR, not the drug of interest. |
| popPK | Komatsu_2021 | irrelevant | 0 | 0 | The study investigates the physiological and pathological effects of inulin as a dietary prebiotic in rats, not the pharmacokinetic disposition (CL, V, etc.) of inulin. |
| PGx | Komatsu_2021 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of inulin on metabolic syndrome in rats, not pharmacogenomic effects on its PK/PD parameters. |
| PGx | Lester_2020 | not_relevant | 0 | 0 | The paper reports standard PK parameters of inulin in rhesus macaques without investigating any genetic or pharmacogenomic determinants. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a review of polysaccharide hydrogels for colorectal cancer; inulin is only mentioned as a plant polysaccharide material, with no PK parameters for inulin. |
| popPK | Lote_1987 | irrelevant | 2 | 6 | Inulin is used solely as a marker for glomerular filtration rate (GFR) to assess renal hemodynamics, not as the subject drug for population pharmacokinetic parameter estimation (CL, V, Q, ka). |
| PGx | Lote_1987 | not_relevant | 0 | 0 | The study investigates the renal effects of vasopressin in rats and does not report any pharmacogenomic interactions or genotype-specific effects on inulin PK/PD. |
| popPK | Martin_1996 | irrelevant | 0 | 0 | Inulin is used only as a diagnostic marker for renal function, not as the subject drug for PK parameter extraction. |
| PGx | Martin_1996 | not_relevant | 0 | 0 | The paper studies the PK of reteplase in relation to renal function (induced by surgery), not the PK of inulin; inulin is used only as a marker for renal function, and no pharmacogenomic effect is reported. |
| popPK | McVicar_1988 | irrelevant | 1 | 1 | Inulin is used as a diagnostic probe to measure glomerular filtration rate in the context of vasopressin pharmacodynamics, not to characterize inulin's own pharmacokinetic parameters. |
| PGx | McVicar_1988 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effects of vasopressin on inulin clearance in rats, but does not report any pharmacogenomic effects of a gene variant/genotype on these parameters. |
| popPK | Mi_2026 | irrelevant | 0 | 0 | The paper focuses on nanoparticle delivery and PK-PD modeling in mice, with no mention of inulin as the subject drug or its pharmacokinetic parameters. |
| PGx | Mi_2026 | not_relevant | 0 | 0 | The paper focuses on nanoparticle delivery and machine learning for tumor efficacy, with no mention of inulin or pharmacogenomic effects. |
| popPK | Miller_1997 | irrelevant | 0 | 0 | Inulin is used solely as a diagnostic marker for GFR (clearance technique) to measure renal hemodynamics, not as a subject drug for pharmacokinetic profiling. |
| PGx | Miller_1997 | not_relevant | 0 | 0 | Inulin is used as a marker to measure GFR (a physiological parameter), not as a therapeutic drug whose pharmacokinetics are being analyzed. |
| popPK | Miller_1999 | irrelevant | 0 | 0 | Inulin is used here as a diagnostic agent to measure GFR (clearance) in a genetic/pharmacodynamic study of losartan, not as the subject drug for PK parameter estimation. |
| PGx | Miller_1999 | not_relevant | 0 | 0 | The study investigates the effect of a gene variant on renal hemodynamics (GFR, RBF), not the pharmacokinetics or pharmacodynamics of inulin. |
| popPK | Nelson_1984 | irrelevant | 0 | 0 | Inulin is used only as a reference substance to compare renal clearance in a study on cisplatin, not as the subject drug for PK parameter determination. |
| PGx | Nelson_1984 | not_relevant | 0 | 0 | The paper studies cisplatin renal secretion mechanisms and uses inulin only as a reference marker for GFR, without reporting any pharmacogenomic effects on inulin or cisplatin PK/PD parameters. |
| popPK | Ni_2021 | irrelevant | 0 | 0 | The paper focuses on the engineering of an inulosucrase enzyme for inulin biosynthesis, not the pharmacokinetics of inulin as a drug. |
| PGx | Ni_2021 | not_relevant | 0 | 0 | The paper describes the protein engineering of an enzyme (inulosucrase) for industrial biosynthesis, not the pharmacogenomics of inulin as a drug. |
| popPK | Nielsen_1992 | irrelevant | 0 | 0 | The study focuses on the in vitro tubular processing of insulin, where inulin is used only as a paracellular leak marker, not as the subject drug for PK parameter extraction. |
| PGx | Nielsen_1992 | not_relevant | 0 | 0 | The study investigates insulin kinetics and does not report any pharmacogenomic effects on inulin or insulin. |
| popPK | Normand_1971 | irrelevant | 2 | 3 | The study focuses on pulmonary permeability and alveolar liquid kinetics (volume/rate of formation) rather than systemic pharmacokinetic parameters (CL, Vd, half-life) for inulin as a drug. |
| PGx | Normand_1971 | not_relevant | 0 | 0 | The paper studies the physical properties of lung permeability and alveolar liquid in fetal lambs; it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of inulin as a drug. |
| popPK | Novak_2020 | irrelevant | 0 | 0 | The paper describes an organ-on-a-chip platform and uses inulin only as a reference marker for blood-brain barrier permeability, without reporting population PK parameters for inulin as a subject drug. |
| PGx | Novak_2020 | not_relevant | 0 | 0 | The paper describes robotic fluidic coupling of organ chips and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of inulin. |
| popPK | Oda_2023 | irrelevant | 0 | 0 | The paper focuses on vancomycin PK in hemodialysis patients, and inulin is used only as a marker in an in vitro validation circuit, not as the subject drug for quantitative parameter extraction. |
| PGx | Oda_2023 | not_relevant | 0 | 0 | The paper reports pharmacokinetic dosing for vancomycin and uses inulin only as a marker for in vitro validation; it does not report any gene variant or genotype effects on inulin PK/PD. |
| popPK | Pagano_2016 | irrelevant | 0 | 0 | The paper analyzes the chemical composition (inulin content) and antioxidant activity of artichoke by-products, but does not study inulin pharmacokinetics or report any PK parameters. |
| PGx | Pagano_2016 | not_relevant | 0 | 0 | The paper analyzes the chemical composition of artichoke by-products and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Peña-Espinoza_2020 | irrelevant | 0 | 0 | The study evaluates anthelmintic and metabolomic properties of chicory extracts, not the pharmacokinetic parameters of inulin. |
| PGx | Peña-Espinoza_2020 | not_relevant | 0 | 0 | The paper investigates the anthelmintic activity of chicory extracts (by-products of inulin extraction) on nematodes and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of inulin. |
| popPK | Poller_2008 | irrelevant | 0 | 0 | The paper reports in vitro permeability coefficients for inulin as a probe molecule in a cell line, not pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Poller_2008 | not_relevant | 0 | 0 | The paper characterizes the hCMEC/D3 cell line as an in vitro blood-brain barrier model and reports passive permeability of inulin, but it does not investigate the impact of any gene variant or genotype on these pharmacokinetic parameters. |
| PGx | Polyviou_2016 | not_relevant | 0 | 0 | No gene/genotype/pharmacogenomic factors are studied; effects relate to inulin propionate ester formulation, not genetic variants. |
| popPK | Ramm_1985 | irrelevant | 0 | 0 | The paper studies complement channel biophysics using inulin as a size marker, not its pharmacokinetics. |
| PGx | Ramm_1985 | not_relevant | 0 | 0 | The paper investigates the structural biology of the C5b-9 complement membrane attack complex channel and its permeability to inulin as a size marker, not the pharmacokinetics or pharmacodynamics of inulin as a drug in relation to genetic variants. |
| popPK | Reich_2003 | irrelevant | 0 | 0 | Inulin is used solely as a probe for measuring glomerular filtration rate (GFR) in a genetic/hemodynamic study, not as the subject of pharmacokinetic parameter estimation. |
| PGx | Reich_2003 | not_relevant | 1 | 0 | Inulin is used as a marker substance to measure GFR, not as the drug of interest for which a pharmacokinetic or pharmacodynamic effect is being reported. |
| popPK | Rinder_1994 | irrelevant | 2 | 2 | Inulin is used as a renal clearance marker (probe) to measure GFR, not as the subject drug for population pharmacokinetic modeling. |
| PGx | Rinder_1994 | not_relevant | 0 | 0 | The study investigates the effect of a thromboxane A2 receptor antagonist on inulin clearance in a post-obstructive nephropathy model, but does not report any genetic variants or pharmacogenomic interactions. |
| popPK | Sherwin_1974 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of insulin; inulin is mentioned only to reference the volume of the extracellular space (inulin space) and is not the subject drug. |
| PGx | Sherwin_1974 | not_relevant | 0 | 0 | The paper describes insulin pharmacokinetics, not the pharmacogenomics of inulin, and contains no data on gene variants affecting drug levels. |
| popPK | Shimizu_2008 | irrelevant | 0 | 0 | The study uses inulin only as a probe molecule to assess paracellular permeability in an in-vitro cell model, not to determine pharmacokinetic disposition parameters for inulin itself. |
| PGx | Shimizu_2008 | not_relevant | 0 | 0 | The study investigates barrier properties of pericyte cell lines using inulin as a paracellular marker, not the pharmacogenomics of inulin as a drug. |
| popPK | Sobolev_2007 | irrelevant | 0 | 0 | This is a plant biology study on inulin biosynthesis in transgenic lettuce, not a pharmacokinetic study in animal or human subjects. |
| PGx | Sobolev_2007 | not_relevant | 0 | 0 | The paper studies inulin biosynthesis in transgenic plants, not human pharmacogenomics or pharmacokinetics. |
| popPK | Sternheim_1982 | irrelevant | 1 | 0 | The paper is a study on the physiological effects of L-epinephrine, where inulin is used merely as a renal clearance marker (probe) to measure GFR, not as the subject drug for PK parameter estimation, and no specific inulin clearance values are reported. |
| PGx | Sternheim_1982 | not_relevant | 0 | 0 | The study examines the physiological effects of epinephrine on renal function and electrolytes; it does not investigate a genetic variant's influence on inulin's pharmacokinetics or pharmacodynamics. |
| popPK | Sugimoto_1993 | irrelevant | 2 | 8 | The study focuses on oxalate pharmacokinetics, using inulin only as a reference marker for extracellular volume, with inulin parameters provided for comparison. |
| PGx | Sugimoto_1993 | not_relevant | 0 | 0 | The paper studies the PK of oxalate and inulin in rats without involving any gene variants or genotypes. |
| popPK | VanWert_2008 | irrelevant | 0 | 0 | The study focuses on methotrexate pharmacokinetics, using inulin only as a renal clearance marker/co-administered agent, not as the subject drug. |
| PGx | VanWert_2008 | not_relevant | 0 | 0 | The paper reports the effect of Oat3 genotype on methotrexate pharmacokinetics, but the query specifically asks about pharmacokinetic parameters of inulin. |
| popPK | Varma_1981 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, compartmental model fit) for inulin in buffalo, but specific numeric values are not present in the provided evidence. |
| PGx | Varma_1981 | not_relevant | 0 | 0 | The study estimates renal function in Indian buffaloes using inulin but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Vautier_2009 | not_relevant | 0 | 0 | Inulin is used only as a vascular space marker to assess BBB integrity; no gene variant/genotype effect on inulin PK/PD is reported. |
| popPK | Verhagen_1994 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PGx | Verhagen_1994 | not_relevant | 0 | 0 | The paper studies the renal clearance of cefuroxime and ceftazidime, not inulin. |
| popPK | Verkoelen_1999 | irrelevant | 0 | 0 | Inulin is used solely as a non-absorbable marker to monitor water transport in an in vitro cell model, not as a subject drug for PK parameter estimation. |
| PGx | Verkoelen_1999 | not_relevant | 0 | 0 | The paper is a cell biology study of renal transport and uses inulin as a non-absorbed tracer for water movement; it does not involve genetic variants or pharmacokinetics of inulin as a therapeutic drug. |
| popPK | Windstetter_1997 | irrelevant | 0 | 0 | Inulin is used here solely as a marker for glomerular filtration rate measurement, not as the subject drug for pharmacokinetic modeling or disposition parameter estimation. |
| PGx | Windstetter_1997 | not_relevant | 0 | 0 | The paper reports renal function and secretin kinetics in cystic fibrosis, but inulin is used only as a marker for GFR, not as the drug of interest, and no pharmacogenomic effect on inulin PK is reported. |
| popPK | Wu_2024 | irrelevant | 3 | 2 | Inulin is used only as a diagnostic GFR marker; the paper models GFR maturation, not inulin's own disposition, and no numeric inulin parameter values appear in the evidence (they live in figures/supplementary material). |
| popPK | Yang_1992 | irrelevant | 0 | 0 | Inulin is used as a diagnostic tracer/marker, not the subject drug |
| PGx | Yang_1992 | not_relevant | 0 | 0 | The paper examines insulin sensitivity and transport in dogs using inulin only as a pharmacokinetic marker, with no analysis of gene variants or pharmacogenomic effects. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper focuses on the chemical synthesis and antioxidant activity (in vitro) of inulin derivatives, not on pharmacokinetic parameters. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper describes the chemical synthesis and antioxidant activity of inulin derivatives, not pharmacogenomic effects on PK or PD parameters. |
| popPK | Yao_2006 | irrelevant | 1 | 0 | Inulin is used solely as a marker for glomerular filtration rate in a renal physiology study, not as a subject drug for PK parameter estimation, and no specific PK values are reported. |
| popPK | Yuasa_1989 | irrelevant | 0 | 0 | The provided evidence contains only metadata for the GROBID software and no scientific content or pharmacokinetic data for inulin. |
| PGx | Yuasa_1989 | not_relevant | 0 | 0 | The text is technical log output from the GROBID software and does not contain any scientific content regarding pharmacogenomics or inulin. |
| popPK | Zeltner_2001 | irrelevant | 0 | 0 | Inulin is used solely as a diagnostic probe for glomerular filtration rate (GFR), not as the subject drug for PK parameter estimation. |
| PGx | Zeltner_2001 | not_relevant | 0 | 0 | The paper studies the effect of GNB3 genotype on renal hemodynamics (plasma flow), but inulin is used merely as a marker for GFR, which was found to be unaffected; it does not report changes in the pharmacokinetics of inulin itself. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | The study focuses on the biochemical properties of a mushroom lectin, using inulin only as a competitive inhibitor of hemagglutination rather than as a subject for pharmacokinetic analysis. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper characterizes a mushroom lectin and does not report a pharmacogenomic effect on the PK/PD of the drug inulin. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The paper studies clearance from cerebrospinal fluid in rats and does not report human pharmacogenomic effects on inulin parameters. |
| popPK | Zimmerman_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levetiracetam, not inulin. |
| PGx | Zimmerman_2023 | not_relevant | 0 | 0 | The paper discusses pharmacokinetics of levetiracetam in children with obesity based on body composition, not genetic variants or pharmacogenomics. |
| popPK | van_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftazidime; inulin is used only as a diagnostic marker for glomerular filtration rate, not as the subject drug for PK modeling. |
| PGx | van_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of ceftazidime based on postnatal age and indomethacin exposure, not genetic variants. |
| popPK | van_2003 | irrelevant | 0 | 0 | The study reports biochemical kinetics of an enzyme (inulosucrase) involved in inulin production, not the pharmacokinetic disposition of inulin as a drug in a biological system. |
| PGx | van_2003 | not_relevant | 0 | 0 | The paper describes the biochemical kinetics of an enzyme producing inulin, not the pharmacokinetics or pharmacodynamics of inulin in humans or animals influenced by genetic variants. |
| popPK | van_2004 | irrelevant | 0 | 0 | The paper describes the biochemical and molecular characterization of a bacterial enzyme (levansucrase) and mentions inulin only as a related polymer product, not as a subject of pharmacokinetic analysis. |
| PGx | van_2004 | not_relevant | 0 | 0 | The paper describes the characterization of a bacterial enzyme (levansucrase) and does not involve human pharmacogenomics, drug PK/PD parameters, or clinical data. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of hydromethylthionine, not inulin. |
| PGx | van_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of hydromethylthionine in Alzheimer's disease patients, but it does not report any gene variant/genotype effects on the PK or PD of inulin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binulin%5D&body=Drug%3A%20inulin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_inulin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:54 UTC</sub>
