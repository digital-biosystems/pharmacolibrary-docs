<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;aclarubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aclarubicin_Liu2026_reference&quot;,&quot;label&quot;:&quot;Liu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# aclarubicin

- **generic name:** aclarubicin
- **ATC codes:** `L01DB04`
- **DrugBank:** [DB11617](https://go.drugbank.com/drugs/DB11617) · **PubChem:** [CID 451415](https://pubchem.ncbi.nlm.nih.gov/compound/451415)
- **molar mass:** 811.878 g/mol (C42H53NO15) — DrugBank
- **groups:** investigational

## About

Aclarubicin is an anthracycline antineoplastic antibiotic that inhibits topoisomerase II and is used to treat cancer. Information regarding its usual route of administration is not provided in the available facts. It was previously approved in Europe but discontinued, though it remains used for cancer treatment in China and is subject to reevaluation.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4674302](https://www.wikidata.org/wiki/Q4674302), [Wikipedia](https://en.wikipedia.org/wiki/Aclarubicin?oldid=1369610124) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aclarubicin | parent | 811.878 | C42H53NO15 | DrugBank | [451415](https://pubchem.ncbi.nlm.nih.gov/compound/451415) | Geodakian_1987 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Geodakian_1987_reference](drugs/drug_aclarubicin/Aclarubicin_Geodakian1987_reference.md) | — | 1-compartment (no model) | 3 | Geodakian SV et al., [Pharmacokinetic study of aclarubicin.…, Antibiotiki i meditsinskaia… (1987) | — |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Liu_2026_reference](drugs/drug_aclarubicin/Aclarubicin_Liu2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Liu Z et al., Real-World Pharmacokinetic and Exposure…, Drug design, development an… (2026) | [10.2147/dddt.s563629](https://doi.org/10.2147/dddt.s563629) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other organism</span> | [Rattaprasert_2022_PfDH_B](drugs/drug_aclarubicin/pd_Rattaprasert_2022_PfDH_B.md) | unwinding activity of PfDH-B ← aclarubicin · inhibition effect | — | Rattaprasert P et al., Inhibitory effects of anthracyclines on…, Malaria journal (2022) | [10.1186/s12936-022-04238-y](https://doi.org/10.1186/s12936-022-04238-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:23 | 0:04 | 1/1/0 | 1/0/0 | 0/0/0 | 3,781/178 | einfracz / qwen3.8-27b | 21 | 6/7 | 20/1 | 0 |

## Coverage

- **PubMed hits:** 83 matched, 79 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_1996 | irrelevant | 0 | 0 | This is a mechanistic in vitro study regarding nucleophosmin translocation induced by anthracyclines (including aclacinomycin A), containing no pharmacokinetic parameters for aclarubicin. |
| PGx | Chan_1996 | not_relevant | 0 | 0 | The paper investigates the mechanism of NPM translocation by anthracyclines and does not report pharmacogenomic effects on PK or PD parameters of aclarubicin. |
| popPK | Dabich_1986 | irrelevant | 0 | 0 | The paper is a Phase II clinical efficacy study reporting response rates and toxicity, with no mention of pharmacokinetic parameter measurements. |
| PGx | Dabich_1986 | not_relevant | 0 | 0 | The paper is a Phase II clinical trial reporting clinical efficacy and toxicity of aclarubicin, with no data on genetic variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Dorn_1993 | irrelevant | 0 | 0 | The study is an in-vitro flow cytometry measurement of intracellular drug uptake for various anthracyclines, explicitly excluding aclarubicin (aclacinomycin A), and does not report population pharmacokinetic parameters for the drug. |
| PGx | Dorn_1993 | not_relevant | 0 | 0 | The paper describes the measurement of intracellular anthracycline uptake in healthy donors and explicitly excludes aclarubicin, reporting no pharmacogenomic analysis. |
| popPK | Fujimoto_1979 | irrelevant | 0 | 0 | The study investigates combination chemotherapy efficacy in a mouse leukemia model and does not report pharmacokinetic disposition parameters for aclarubicin. |
| PGx | Fujimoto_1979 | not_relevant | 0 | 0 | The paper describes preclinical combination chemotherapy in a mouse model without analyzing any genetic variants or pharmacogenomic effects. |
| popPK | Fujita_1986 | irrelevant | 1 | 0 | The evidence contains only qualitative descriptions of pharmacokinetic trends (relative magnitudes and orders) for aclarubicin, with no specific numeric parameter values (CL, V, Q, ka, t1/2) provided. |
| PGx | Fujita_1986 | not_relevant | 0 | 0 | The paper describes general pharmacokinetic properties of anthracyclines but does not report any gene variants or genotypes affecting these parameters. |
| popPK | Gamba-Vitalo_1989 | irrelevant | 0 | 0 | The study focuses on the induction of differentiation in leukemia cells using aclacinomycin A, a different drug from aclarubicin, and does not report pharmacokinetic parameters. |
| PGx | Gamba-Vitalo_1989 | not_relevant | 0 | 0 | The study reports the pharmacodynamic effects of aclacinomycin A (aclacinomycin A is distinct from aclarubicin, though related; even if treated as the same class, the key is the lack of genetic variation) on cell differentiation and survival in a murine model, but it does not investigate any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Gaussem_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the thrombin inhibitor S 18326, not aclarubicin. |
| PGx | Gaussem_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of a different drug (S 18326) and contains no mention of aclarubicin or pharmacogenomic variants. |
| popPK | Geodakian_1987 | relevant | 10 | 4 | The study reports pharmacokinetic parameters for aclarubicin in rats, but the specific numeric values for clearance, volume, and rate constants are not listed in the provided abstract, which only cites half-lives and bioavailability percentages. |
| PGx | Geodakian_1987 | not_relevant | 0 | 0 | The study describes standard pharmacokinetics in rats and does not investigate gene variants or genotypes. |
| popPK | Gollapudi_2019 | irrelevant | 0 | 0 | The study is an in vitro genotoxicity assay measuring chromosome damage, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Gollapudi_2019 | not_relevant | 0 | 0 | The paper investigates concentration-response relationships for topoisomerase II inhibitors in vitro and does not report any association between genetic variants/genotypes and pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hagiwara_1986 | irrelevant | 2 | 0 | The study focuses on tissue distribution and efficacy of a new dosage form in animals, without reporting quantitative pharmacokinetic parameters (CL, V, ka) for aclarubicin. |
| PGx | Hagiwara_1986 | not_relevant | 0 | 0 | The paper reports on a new dosage form (activated carbon particles) and its PK/PD effects in animals and clinical outcomes, but it contains no information regarding gene variants, genotypes, or pharmacogenomic interactions. |
| popPK | Hagiwara_1991 | irrelevant | 2 | 0 | The study reports distribution levels in lymph nodes but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) or compartmental model estimates for aclarubicin. |
| PGx | Hagiwara_1991 | not_relevant | 0 | 0 | The paper reports on the pharmacokinetics of a new dosage form in rats but does not investigate the impact of any gene variants or genotypes. |
| popPK | Hagiwara_1991_2 | irrelevant | 0 | 0 | The study is a toxicity and histopathology investigation in mice, reporting LD50 values rather than quantitative pharmacokinetic parameters (CL, Vd, Ka). |
| PGx | Hagiwara_1991_2 | not_relevant | 0 | 0 | The study investigates the toxicity and pharmacokinetics of a new dosage form in mice, without any data on gene variants, genotypes, or phenotypes affecting drug response. |
| popPK | Hasinoff_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of topoisomerase II inhibition and resistance, with no pharmacokinetic parameters reported for aclarubicin. |
| PGx | Hasinoff_1997 | not_relevant | 0 | 0 | The study focuses on acquired cellular resistance to dexrazoxane and does not report any human genetic variation (gene variant/genotype) affecting the pharmacokinetics or pharmacodynamics of aclarubicin. |
| popPK | Hiramatsu_2000 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment where aclarubicin is used as a comparator agent to evaluate combination efficacy, not a pharmacokinetic study. |
| PGx | Hiramatsu_2000 | not_relevant | 0 | 0 | The paper reports in vitro drug sensitivity and combination effects, but does not report any pharmacogenomic (gene variant) effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Imanishi_1995 | irrelevant | 2 | 0 | The paper reports tissue concentrations (micrograms/g) and plasma concentration comparisons but does not report quantitative pharmacokinetic disposition parameters such as clearance (CL), volume of distribution (V), or half-life with a volume. |
| PGx | Imanishi_1995 | not_relevant | 0 | 0 | The paper compares pharmacokinetics of different formulations (ACR-CH vs aqueous) in breast cancer patients but does not report any pharmacogenomic effects or genotype-based variations. |
| popPK | Imanishi_1997 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the utility of aclarubicin-carbon particles for lymph node visualization, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Imanishi_1997 | not_relevant | 0 | 0 | The paper describes a new drug formulation (ACR-CH) for surgical visualization and contains no mention of gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Isoe_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of the ubiquitin system, reporting IC50 values rather than pharmacokinetic parameters like clearance or volume. |
| PGx | Isoe_1992 | not_relevant | 0 | 0 | The paper describes in vitro mechanisms of drug action (inhibition of the ubiquitin system) but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters in humans or animal models. |
| popPK | Kamp_2021 | irrelevant | 0 | 0 | This study reports ketamine pharmacodynamics, not aclarubicin pharmacokinetics. |
| PGx | Karanes_1983 | not_relevant | 0 | 0 | The paper reports the standard pharmacokinetics of aclacinomycin-A (aclacinomycin) in a general Phase I population but does not mention or analyze any gene variants, genotypes, or genetic phenotypes affecting PK or PD parameters. |
| popPK | Kohno_1985 | irrelevant | 0 | 0 | The study investigates the cytotoxic effects of Aclacinomycin A on tumor spheroids in vitro and does not report any pharmacokinetic parameters for aclarubicin. |
| PGx | Kohno_1985 | not_relevant | 0 | 0 | The study investigates the cytotoxic effects of aclarubicin on tumor spheroids without examining any gene variants or pharmacogenomic factors. |
| popPK | Komiyama_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA binding and polymerase inhibition, reporting no pharmacokinetic disposition parameters. |
| PGx | Komiyama_1983 | not_relevant | 0 | 0 | The paper investigates in vitro interactions of anthracyclines with DNA polymerases and does not mention aclarubicin, human gene variants, or pharmacogenomic effects. |
| popPK | Lammers_2017 | irrelevant | 0 | 0 | This human CYP-probe cocktail study reports pharmacokinetics for other drugs, not aclarubicin. |
| popPK | Langer_2001 | irrelevant | 0 | 0 | The paper is a preclinical toxicity study in mice evaluating dexrazoxane as an antidote for anthracycline extravasation, and it does not report any pharmacokinetic parameters for aclarubicin, which is only mentioned as an ineffective comparator agent. |
| PGx | Langer_2001 | not_relevant | 0 | 0 | The paper studies the protective effect of dexrazoxane on anthracycline-induced tissue lesions in mice and does not report any pharmacogenomic effects (gene variants) on the PK or PD of aclarubicin. |
| popPK | Li_2005 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study reporting response rates and survival, not a pharmacokinetic study with quantitative disposition parameters. |
| PGx | Li_2005 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of a chemotherapy regimen but does not investigate pharmacogenomic effects or genotype-specific changes in pharmacokinetic/pharmacodynamic parameters. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | Aclarubicin is only a co-administered drug; the reported PK parameters are for venetoclax. |
| popPK | Lu_2007 | relevant | 8 | 0 | The study reports pharmacokinetic metrics (AUC, concentration ratios) for aclarubicin in a rat glioma model, but specific numeric PK parameter values (CL, V, ka) are not listed in the text, only relative fold-changes and AUC comparisons. |
| PGx | Lu_2007 | not_relevant | 0 | 0 | The study investigates a nanoparticle delivery system for improving drug accumulation and efficacy in rats; it does not examine gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Löffler_2025 | irrelevant | 0 | 0 | This perspective reports no aclarubicin pharmacokinetic parameters or measured disposition data. |
| popPK | Magi_2013 | irrelevant | 0 | 0 | The study describes the synthesis of aclarubicin derivatives and their in vitro mechanism of action (FTase inhibition/cell migration), but contains no pharmacokinetic data or disposition parameters. |
| PGx | Magi_2013 | not_relevant | 0 | 0 | The paper reports on the mechanism of action (FTase inhibition) of novel chemical derivatives of aclacinomycin A (aclarubicin), not on pharmacogenomic variants affecting the PK/PD of the drug itself. |
| popPK | Marsh_1983 | irrelevant | 0 | 0 | The study focuses on bone marrow toxicity and sensitivity to anthracyclines in mice, dogs, and humans, and does not report pharmacokinetic parameters (CL, V, ka, etc.) for aclarubicin. |
| PGx | Marsh_1983 | not_relevant | 0 | 0 | The paper studies bone marrow sensitivity to aclacinomycin A (a different anthracycline), not aclarubicin, and does not report pharmacogenomic effects. |
| popPK | Mathé_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of aclacinomycin A (ACM) in leukaemia patients and does not report quantitative pharmacokinetic parameters (CL, V, etc.). |
| PGx | Mathé_1982 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of aclarubicin in a general patient population but does not mention any gene variants, genotypes, or pharmacogenomic effects on PK or PD parameters. |
| popPK | Matsumoto_1991 | irrelevant | 0 | 0 | The study is an in vitro investigation of adsorption and desorption kinetics from a drug carrier, reporting binding constants and release percentages rather than in vivo pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Matsumoto_1991 | not_relevant | 0 | 0 | The paper describes an in vitro physicochemical study of drug adsorption/desorption on activated carbon and contains no human subject data or genetic variants. |
| popPK | Matsuno_1990 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay (IC50) and does not report pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Matsuno_1990 | not_relevant | 0 | 0 | The paper examines drug sensitivity (IC50) in cancer cell lines but does not report any genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Matthews_2024 | irrelevant | 0 | 0 | The study examines other drugs in human-derived cardiomyocytes and reports no aclarubicin pharmacokinetic parameters. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | This is an in-vitro anticancer-compound study and reports no aclarubicin pharmacokinetic parameters. |
| popPK | Megías-Vericat_2019 | irrelevant | 0 | 0 | Aclarubicin is only mentioned in passing, with no aclarubicin-specific pharmacokinetic parameters or numeric values reported. |
| popPK | Menna_2002 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on lipid peroxidation and myoglobin reduction, not a pharmacokinetic study of aclarubicin. |
| PGx | Menna_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of cardiotoxicity (lipid peroxidation) and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Metodiewa_1999 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay comparing flavanone oximes to aclarubicin, which is used only as a reference drug; no pharmacokinetic parameters are reported. |
| PGx | Metodiewa_1999 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity comparisons of flavanone oximes against aclarubicin, but does not investigate any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Miyamoto_1986 | irrelevant | 0 | 0 | The paper is an in vitro study of drug resistance mechanisms and does not report pharmacokinetic parameters. |
| PGx | Miyamoto_1986 | not_relevant | 0 | 0 | The study analyzes in vitro chemosensitivity (cell viability/cell kill) of a drug-resistant cell line, which is a biological resistance mechanism, not a pharmacokinetic or pharmacodynamic parameter of the drug itself (e.g., AUC, Cmax, IC50 of the drug) linked to a specific human pharmacogenomic variant. |
| popPK | Mohammed_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of warfarin, not aclarubicin. |
| PGx | Mohammed_2008 | not_relevant | 0 | 0 | The paper studies warfarin and herbal interactions, not aclarubicin. |
| popPK | Nishimura_1980 | irrelevant | 0 | 0 | This is a mechanistic study on drug resistance and cellular uptake in mouse cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume for aclarubicin. |
| PGx | Nishimura_1980 | not_relevant | 0 | 0 | The paper studies drug resistance in a murine cell line (genetic selection of a resistant subline) and does not report pharmacogenomic effects of human gene variants on pharmacokinetics or pharmacodynamics of aclarubicin. |
| popPK | Okada_1997 | irrelevant | 0 | 0 | The study is an echocardiographic evaluation of cardiotoxicity and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for aclarubicin. |
| PGx | Okada_1997 | not_relevant | 0 | 0 | The paper reports on the cardiotoxicity of various anthracyclines, including aclarubicin, but does not investigate pharmacogenomic effects or gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Qu_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing dosing regimens in AML patients and does not report pharmacokinetic parameters for aclarubicin. |
| PGx | Qu_2015 | not_relevant | 0 | 0 | The study evaluates a dosage modification (pharmacodynamic/clinical efficacy) and does not involve any genetic variants or pharmacogenomic analysis. |
| popPK | Riegel_1982 | irrelevant | 0 | 0 | This is an in-vitro and ex-vivo mechanistic study regarding histamine release from rat mast cells, not a pharmacokinetic study reporting disposition parameters for aclarubicin. |
| PGx | Riegel_1982 | not_relevant | 0 | 0 | The paper describes general mast cell degranulation and histamine release by anthracyclines in rats, containing no pharmacogenomic analysis or specific PK/PD parameters for aclarubicin linked to genetic variants. |
| popPK | Sakakura_1993 | irrelevant | 0 | 0 | The study focuses on the immunological effects (immune effector functions) of aclacinomycin A, not its pharmacokinetic parameters. |
| PGx | Sakakura_1993 | not_relevant | 1 | 1 | The paper studies the immunological effects of a drug formulation (aclacinomycin A, not aclarubicin) in mice and does not report any pharmacogenomic effects on PK/PD parameters based on gene variants. |
| popPK | Schmidt_1996 | irrelevant | 0 | 0 | The study is an in vitro toxicity and antiproliferative effect analysis on retinal pigment epithelial cells, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Schmidt_1996 | not_relevant | 0 | 0 | The study investigates the in vitro toxicity of aclarubicin on retinal cells without examining any gene variants or pharmacogenomic factors. |
| popPK | Schmidt_1998 | irrelevant | 0 | 0 | The study investigates the in vitro cytotoxicity of aclacinomycin A (not aclarubicin) on porcine lens cells and contains no pharmacokinetic data. |
| PGx | Schmidt_1998 | not_relevant | 0 | 0 | The paper investigates the in vitro cytotoxicity of aclacinomycin A on lens cells and contains no data on pharmacogenomics or pharmacokinetics. |
| popPK | Schwach_2024 | irrelevant | 0 | 0 | This in-vitro cardiotoxicity study reports no quantitative aclarubicin disposition parameters. |
| popPK | Schwartz_1983 | irrelevant | 0 | 0 | The study is an in vivo differentiation assay in mice using anthracyclines (including aclacinomycin A, not aclarubicin) as experimental agents, with no pharmacokinetic parameters reported. |
| PGx | Schwartz_1983 | not_relevant | 0 | 0 | The paper evaluates the pharmacodynamic effect of anthracyclines on HL-60 cell differentiation in an animal model, but does not investigate the influence of gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Shirai_1980 | irrelevant | 0 | 0 | The paper describes a subacute toxicity study and does not report any pharmacokinetic parameters for aclacinomycin A (aclarubicin). |
| PGx | Shirai_1980 | not_relevant | 0 | 0 | The study reports general toxicity in rats without any pharmacogenomic or genetic analysis. |
| popPK | Shirai_1980_2 | irrelevant | 0 | 0 | The paper is a chronic toxicity study in rats that reports mortality and clinical signs, but contains no pharmacokinetic parameters or quantitative disposition data for aclarubicin. |
| PGx | Shirai_1980_2 | not_relevant | 0 | 0 | The study reports chronic toxicity in rats without any genetic variation analysis or pharmacokinetic/pharmacodynamic modeling. |
| popPK | Simons_2022 | irrelevant | 0 | 0 | This paper reports pharmacodynamic results for S-ketamine in human volunteers, not pharmacokinetic parameters for aclarubicin. |
| popPK | Simons_2022_2 | irrelevant | 0 | 0 | The study reports quantitative population pharmacokinetics for S-ketamine and its metabolites, not aclarubicin. |
| popPK | Stamos_2025 | irrelevant | 0 | 0 | The paper studies ACBI1 crystallization and atropisomerism, not aclarubicin pharmacokinetics, and reports no aclarubicin disposition values. |
| popPK | Sugimoto_1982 | irrelevant | 0 | 0 | The study investigates the mechanism of action of COTC in cell lines, using aclarubicin only as a comparator for resistance and drug interactions, with no PK parameters reported. |
| PGx | Sugimoto_1982 | not_relevant | 0 | 0 | The paper studies the mechanism of action of COTC and its effect on drug-resistant cells, but does not report a pharmacogenomic effect on PK or PD parameters of aclarubicin. |
| popPK | Suntornthiticharoen_2006 | irrelevant | 0 | 0 | The study investigates the in-vitro inhibition of a Plasmodium falciparum DNA helicase by aclarubicin, which is mechanistic/pharmacodynamic and does not report pharmacokinetic disposition parameters. |
| PGx | Suntornthiticharoen_2006 | not_relevant | 0 | 0 | The paper investigates the interaction of aclarubicin with a parasitic enzyme (PfDH A) in a biochemical assay, not the effect of human genetic variants on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Tanabe_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell survival and cell cycle progression in mouse L cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Tanabe_1983 | not_relevant | 0 | 0 | The study examines cell cycle survival in mouse L cells but does not report a pharmacogenomic effect of a gene variant on PK/PD parameters for aclarubicin. |
| popPK | Tapiero_1994 | irrelevant | 0 | 0 | The paper is a mechanistic study on cross-resistance and cytotoxicity in cell lines, reporting no population pharmacokinetic parameters for aclarubicin. |
| PGx | Tapiero_1994 | not_relevant | 2 | 5 | The paper investigates cross-resistance mechanisms (drug accumulation and DNA repair) in selected multidrug-resistant cell lines (cellular PK/PD), but does not report a specific gene variant or genotype in humans altering pharmacokinetic or pharmacodynamic parameters. |
| popPK | Temma_1993 | irrelevant | 0 | 0 | The study is an in vitro investigation of cardiac effects in guinea-pig heart, not a pharmacokinetic study of aclarubicin. |
| PGx | Temma_1993 | not_relevant | 0 | 0 | The paper studies cardiac pharmacodynamics of anthracyclines in animal models without investigating the influence of gene variants or genotypes. |
| popPK | Tsushima_1985 | irrelevant | 0 | 0 | The study focuses on 4'-epi-adriamycin (EPI), not aclarubicin, and aclarubicin is not the subject drug. |
| PGx | Tsushima_1985 | not_relevant | 0 | 0 | The paper studies 4'-epi-adriamycin (not aclarubicin) in animal models and cell lines without investigating any genetic variants or pharmacogenomic factors. |
| popPK | Twentyman_1986 | irrelevant | 0 | 0 | This is an in-vitro cell line study focusing on cross-resistance and drug accumulation, not a pharmacokinetic study reporting disposition parameters for aclarubicin. |
| PGx | Twentyman_1986 | not_relevant | 0 | 0 | The paper discusses drug resistance in cell lines and the effects of verapamil on adriamycin and other anthracyclines, but it does not report a pharmacogenomic effect (gene variant/genotype) on the PK/PD parameters of aclarubicin. |
| popPK | Vrhovac_1991 | irrelevant | 0 | 0 | The paper is a critical review of drug registrations and prescribing patterns in Yugoslavia, mentioning aclarubicin only as a newly registered drug without presenting any original pharmacokinetic parameters or studies. |
| PGx | Vrhovac_1991 | not_relevant | 0 | 0 | The text is a general critical review of drug registrations in Yugoslavia in 1990 and does not contain any pharmacogenomic data or specific PK/PD analysis for aclarubicin. |
| popPK | Wang_2005 | irrelevant | 0 | 0 | The study investigates the molecular mechanism of multidrug resistance via CYP3A5 transfection in HL-60 cells and reports resistance multiples, not pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Wang_2005 | not_relevant | 2 | 5 | The paper discusses aclacinomycin A (a different drug from aclarubicin) and reports drug resistance mechanisms in transfected cells, not the pharmacokinetic/pharmacodynamic effects of genetic variants on aclarubicin. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper is a virology study testing aclarubicin's antiviral activity against SARS-CoV-2, not a pharmacokinetic study. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper describes the antiviral mechanism of aclarubicin against SARS-CoV-2 in vitro and does not contain any pharmacogenomic data (gene variants) affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Xie_2007 | irrelevant | 0 | 0 | The paper studies the mechanism of a novel macrolide (MFTZ-1), using aclarubicin only as a mechanistic control agent in vitro, with no PK parameters reported. |
| PGx | Xie_2007 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of MFTZ-1 and does not report pharmacogenomic effects on the PK or PD of aclarubicin. |
| popPK | Yang_2013 | irrelevant | 0 | 0 | The study investigates the mechanism of action of GL3 using aclarubicin as a pharmacological inhibitor in vitro, and does not report pharmacokinetic parameters for aclarubicin. |
| PGx | Yang_2013 | not_relevant | 0 | 0 | The paper describes the mechanism of action of a new compound (GL3) and uses aclarubicin as a control inhibitor, but does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of aclarubicin. |
| PGx | Yuan_2019 | not_relevant | 1 | 2 | DNMT3A R882 status is associated with remission after induction therapy that includes aclarubicin, but the paper reports no aclarubicin-specific PK or PD parameter. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baclarubicin%5D&body=Drug%3A%20aclarubicin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aclarubicin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:17 UTC</sub>
