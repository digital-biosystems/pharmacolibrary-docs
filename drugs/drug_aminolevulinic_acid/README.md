<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;aminolevulinic acid&quot;}]"></div>

# aminolevulinic acid

- **generic name:** aminolevulinic acid
- **ATC codes:** `L01XD04`
- **DrugBank:** [DB00855](https://go.drugbank.com/drugs/DB00855) · **PubChem:** [CID 137](https://pubchem.ncbi.nlm.nih.gov/compound/137)
- **molar mass:** 131.1299 g/mol (C5H9NO3) — DrugBank
- **groups:** approved, investigational

## About

Aminolevulinic acid is a photosensitizer used in photodynamic therapy, notably for treating actinic keratosis. It is an approved medicine and is also being studied for other investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q238474](https://www.wikidata.org/wiki/Q238474) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| protoporphyrin IX | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:15 | 12:22 | 0/3/0 | 1/2/0 | 0/0/0 | 1,395,570/52,290 | einfracz / qwen3.8-27b | 56 | 5/47 | 56/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Cao_2023_reference](drugs/drug_aminolevulinic_acid/AminolevulinicAcid_Cao2023_reference.md) | — | 2-compartment (no model) | 4 | Cao C et al., Intra-Operative Definition of Glioma In…, Advanced science (Weinheim,… (2023) | [10.1002/advs.202304020](https://doi.org/10.1002/advs.202304020) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Diagaradjane_2002_reference](drugs/drug_aminolevulinic_acid/AminolevulinicAcid_Diagaradjane2002_reference.md) | — | parent + metabolite (no model) | 0 | Diagaradjane P et al., In vivo pharmacokinetics of 8-aminolevu…, Photochemistry and photobio… (2002) | [10.1562/0031-8655(2002)076&lt;0081:ivpoaa&gt;2.0.co;2](https://doi.org/10.1562/0031-8655(2002)076&lt;0081:ivpoaa&gt;2.0.co;2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.2). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Peng_2001_reference](drugs/drug_aminolevulinic_acid/AminolevulinicAcid_Peng2001_reference.md) | — | parent + metabolite (no model) | 0 | Peng Q et al., Antitumor effect of 5-aminolevulinic ac…, Cancer research (2001) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bongetta_2021_5_ALA_fluorescence](drugs/drug_aminolevulinic_acid/pd_Bongetta_2021_5_ALA_fluorescence.md) | Intratumoral 5-ALA fluorescence ← 5-ALA · model not identified | — | Bongetta D et al., Fluorophores Use in Pituitary Surgery:…, Brain sciences (2021) | [10.3390/brainsci11050565](https://doi.org/10.3390/brainsci11050565) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2023_ALA](drugs/drug_aminolevulinic_acid/pd_Lee_2023_ALA.md) | urinary ALA ← active siRNA in RISC · indirect response — drug inhibits the production of urinary ALA | — | Lee J et al., Pharmacokinetic-pharmacodynamic model o…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12957](https://doi.org/10.1002/psp4.12957) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Ngwe_2022_Antiviral_activity_against_SARS_CoV_2_Omicron_variant](drugs/drug_aminolevulinic_acid/pd_Ngwe_2022_Antiviral_activity_against_SARS_CoV_2_Omicron_vari.md) | Antiviral activity against SARS-CoV-2 Omicron variant ← 5-ALA · direct Emax (saturable) effect | — | Ngwe Tun MM et al., 5-Aminolevulinic acid antiviral efficac…, Tropical medicine and health (2022) | [10.1186/s41182-022-00422-7](https://doi.org/10.1186/s41182-022-00422-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aminolevulinic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ALAD (inducer), PPOX (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 565 matched, 148 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aalders_2001.pdf` | Aalders MC et al., A mathematical evaluation of dose-depen…, Photochemistry and photobio… (2001) | popPK | 10 | [10.1562/0031-8655(2001)074&lt;0311:ameodd&gt;2.0.co;2](https://doi.org/10.1562/0031-8655(2001)074<0311:ameodd>2.0.co;2) | [11547570](https://pubmed.ncbi.nlm.nih.gov/11547570) | The paper describes a population-pharmacokinetic model for 5-aminolevulinic acid and its metabolite PpIX, but the provided evidence consists only of the abstract which lacks specific numeric parameter values. |
| `Peng_2001.pdf` | Peng Q et al., Antitumor effect of 5-aminolevulinic ac…, Cancer research (2001) | popPK | 8 | not captured | [11479222](https://pubmed.ncbi.nlm.nih.gov/11479222) | The study reports pharmacokinetic parameters (one-compartment model, half-lives of 18 and 58 min) for ALA in plasma and tumor of nude mice, with numeric values present in the abstract. |
| `Diagaradjane_2002.pdf` | Diagaradjane P et al., In vivo pharmacokinetics of 8-aminolevu…, Photochemistry and photobio… (2002) | popPK | 5 | [10.1562/0031-8655(2002)076&lt;0081:ivpoaa&gt;2.0.co;2](https://doi.org/10.1562/0031-8655(2002)076<0081:ivpoaa>2.0.co;2) | [12126311](https://pubmed.ncbi.nlm.nih.gov/12126311) | The study models the pharmacokinetics of ALA's major photodynamic metabolite (PpIX) in mice, reporting quantitative rate parameters (km, k1, kt) in the abstract, which serves as a proxy for ALA disposition in this context. |

<sub>queue written 2026-10-15T04:06:21.930909+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aalders_2001 | relevant | 10 | 0 | The paper describes a population-pharmacokinetic model for 5-aminolevulinic acid and its metabolite PpIX, but the provided evidence consists only of the abstract which lacks specific numeric parameter values. |
| popPK | Alsaikhan_2026 | irrelevant | 0 | 0 | The paper is a systematic review of nanomedicine phototherapy and mentions aminolevulinic acid only as an FDA-approved photosensitizer in a table, without providing any pharmacokinetic data. |
| PGx | Astrin_1987 | not_relevant | 0 | 0 | The paper discusses the pharmacogenomics of lead toxicity (a toxin/environmental exposure), not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a drug. |
| PGx | Bebes_2011 | not_relevant | 0 | 0 | The study investigates the role of the ABCG2 transporter in porphyrin accumulation and PDT efficacy, but does not report pharmacogenomic effects (based on gene variants) on PK/PD parameters. |
| popPK | Behsaz_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a novel natural product (edaphochelin A) using a bioinformatics platform and contains no pharmacokinetic data or parameters for aminolevulinic acid. |
| popPK | Bellnier_2006 | irrelevant | 0 | 0 | The study models the PK of Photofrin, Photochlor, and PpIX (a metabolite of ALA, not ALA itself), and does not report quantitative PK parameters for aminolevulinic acid. |
| PGx | Bergdahl_1997 | not_relevant | 0 | 0 | The paper studies lead exposure and kidney function, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| popPK | Boddé_2002 | irrelevant | 1 | 1 | The study reports ex vivo diffusion flux rates across stratum corneum, not in vivo pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PGx | Bunk_2021 | not_relevant | 0 | 0 | The study analyzes PpIX kinetics in different cell lines but explicitly concludes that fluorescence is not related to the expression of the genes (FECH, ABCB6, ABCG2) tested, and no specific human genotypes are analyzed. |
| popPK | Cable_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of gene regulation in rat hepatocytes, not a pharmacokinetic study of aminolevulinic acid disposition. |
| popPK | Cable_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of heme metabolism and gene expression, not a pharmacokinetic study. |
| popPK | Cao_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluorescent probes (CP2-M) for glioma imaging, mentioning 5-aminolevulinic acid only as a comparator without providing its PK parameters. |
| popPK | Castanon_2026 | irrelevant | 0 | 0 | The paper focuses on antimicrobial peptides (SET-M33) and their interactions with bacterial membranes, and does not mention aminolevulinic acid or its pharmacokinetics. |
| PGx | Chelakkot_2020 | not_relevant | 0 | 0 | The paper investigates signaling pathways (Ras/MEK, RSK, HIF-1a) in cancer models, not human germline pharmacogenomic variants affecting drug PK/PD. |
| PGx | Claus_2011 | not_relevant | 0 | 0 | The study investigates the effect of iron metabolism gene variants (specifically ALAD) on blood manganese levels, not on the pharmacokinetic or pharmacodynamic parameters of the drug aminolevulinic acid. |
| PGx | Costa_2000 | not_relevant | 0 | 0 | The paper discusses ALA dehydratase in the context of lead toxicity and ecogenetics, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a drug. |
| PGx | Costa_2003 | not_relevant | 2 | 0 | The paper mentions ALA only in the context of lead exposure biomarkers and mentions GST/paraoxonase polymorphisms for other toxins, but does not report pharmacogenomic effects on the PK or PD of aminolevulinic acid as a therapeutic drug. |
| PGx | Davies_2008 | not_relevant | 0 | 0 | The paper describes TCDD-induced porphyria and compares it to an ALA-induced model, but does not report a pharmacogenomic effect of a gene variant on the PK or PD of aminolevulinic acid as a therapeutic drug. |
| popPK | Diagaradjane_2002 | relevant | 5 | 4 | The study models the pharmacokinetics of ALA's major photodynamic metabolite (PpIX) in mice, reporting quantitative rate parameters (km, k1, kt) in the abstract, which serves as a proxy for ALA disposition in this context. |
| popPK | Dockerill_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a thrombin inhibitor using dynamic combinatorial chemistry and contains no data, parameters, or mention of aminolevulinic acid. |
| popPK | Duprat_2026 | irrelevant | 0 | 0 | The paper studies the mechanism of quercetin in prostate cancer cells and does not involve aminolevulinic acid. |
| popPK | Fajana_2026 | irrelevant | 0 | 0 | The paper studies the antioxidant and antihypertensive properties of Ficus exasperata leaf extracts and does not involve aminolevulinic acid or pharmacokinetic modeling. |
| popPK | Gibadullin_2026 | irrelevant | 0 | 0 | The paper focuses on glucagon and PTH(1-34) analogues, not aminolevulinic acid. |
| PGx | Gorman_2007 | not_relevant | 1 | 5 | The study investigates the effect of iron and ascorbate on hepatic URO accumulation in a mouse model of porphyria; it does not report a pharmacogenomic effect on the PK/PD of aminolevulinic acid. |
| PGx | Gundacker_2010 | not_relevant | 0 | 0 | The paper discusses the toxicokinetics of mercury and lead, not the PK/PD of aminolevulinic acid. |
| popPK | Hahn_1996 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study using ALA as a substrate to model porphyrin accumulation in fish cells, not a pharmacokinetic study of aminolevulinic acid's disposition. |
| popPK | Havelkova_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacology and polymer conjugation of buparlisib in glioblastoma models, not the pharmacokinetics of aminolevulinic acid. |
| PGx | Higuchi_2021 | not_relevant | 0 | 0 | The study investigates the effect of ultrasound on PpIX levels and ABCG2 expression, not the effect of genetic variants (pharmacogenomics) on PK/PD. |
| popPK | Hou_2026 | irrelevant | 0 | 0 | The paper investigates selenium peptides for Parkinson's disease and does not involve aminolevulinic acid or its pharmacokinetics. |
| popPK | Howley_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of photodynamic therapy efficacy and ABCG2 inhibition, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for aminolevulinic acid. |
| PGx | Hu_2018 | not_relevant | 0 | 0 | The study reports clinical efficacy of ALA-PDT on HPV infection and does not investigate genetic variants affecting the drug's PK or PD. |
| PGx | Hu_2021 | not_relevant | 0 | 0 | The paper focuses on viral clearance patterns of HPV subtypes, not on human gene variants affecting the pharmacokinetics or pharmacodynamics of aminolevulinic acid. |
| PGx | Hu_2021_2 | not_relevant | 0 | 0 | The study analyzes predictors of HPV clearance (clinical outcome) and does not measure pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid or the impact of genetic variants on its handling or effect. |
| PGx | Huo_2014 | not_relevant | 2 | 10 | The study investigates the effect of ALAD genotypes on blood lead levels (toxicity/susceptibility), not on the pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid as a drug. |
| PGx | Iba_1999 | not_relevant | 0 | 0 | The paper investigates the effect of the chemical pyridine on heme metabolism and enzyme induction in rats, not the effect of a genetic variant on the PK/PD of aminolevulinic acid. |
| PGx | Ishikawa_2013 | not_relevant | 3 | 2 | The paper discusses the mechanism of Nrf2 regulation on ABCG2 in the context of porphyrin accumulation for PDT, but does not report a pharmacogenomic effect on a specific PK or PD parameter of aminolevulinic acid (ALA). |
| PGx | Jaffe_2020 | not_relevant | 0 | 0 | The paper discusses the structural biology of Porphobilinogen synthase (PBGS) and its mutations causing ALAD porphyria, which is the substrate for aminolevulinic acid; it does not report pharmacogenomic effects on the PK or PD parameters of aminolevulinic acid itself. |
| popPK | Jarullah_2025 | irrelevant | 0 | 0 | The paper investigates FADS1 polymorphisms and fatty acid profiles in diabetes patients, not the pharmacokinetics of aminolevulinic acid. |
| popPK | Jourdain_2026 | irrelevant | 0 | 0 | The study focuses on marine compounds (leucettamine B and pinctazole) for bone healing and does not mention aminolevulinic acid. |
| PGx | Kelada_2001 | not_relevant | 0 | 0 | The paper discusses the ALAD gene and lead toxicity, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid (ALA) as a drug. |
| PGx | Kerr_2019 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effect of lead exposure on growth in children with different ALAD genotypes, not the PK/PD of aminolevulinic acid. |
| PGx | Kim_2014 | not_relevant | 0 | 0 | The paper discusses environmental lead exposure and genetics, with no mention of aminolevulinic acid or its pharmacokinetics/pharmacodynamics. |
| PGx | Kitajima_2019 | not_relevant | 0 | 0 | The paper uses the JFCR39 cell panel to study PpIX excretion mechanisms in cancer cells and does not investigate the impact of specific human gene variants or genotypes on the pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid. |
| PGx | Krivosheev_2008 | not_relevant | 0 | 0 | The study evaluates porphirin and aminolevulinic acid levels in patients with non-alcoholic steatohepatitis (NASH) but does not report the effect of any specific genetic variants on the PK or PD of aminolevulinic acid. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper studies Pongamia pinnata leaf extract for antidiarrheal and antibacterial properties and contains no data on aminolevulinic acid pharmacokinetics. |
| PGx | Labib_2021 | not_relevant | 0 | 10 | The paper examines cellular differences in drug uptake and fluorescence across different cell lines, but does not report a pharmacogenomic effect of a specific gene variant or genotype on the PK/PD of the drug. |
| PGx | Lai_2023 | not_relevant | 2 | 5 | The paper investigates the effect of cell senescence (a phenotype associated with aging) and ABCG2 expression on porphyrin accumulation, which is a biological mechanism of the drug's action (PD), but it does not report a specific gene variant or genotype as the driver of the PK/PD difference in the context of standard pharmacogenomics. |
| popPK | Lantum_2003 | irrelevant | 0 | 0 | The study investigates the toxicology of dichloroacetic acid and maleylacetoacetate metabolism in rats, using delta-aminolevulinic acid dehydratase activity only as a biochemical assay endpoint rather than measuring the pharmacokinetic parameters of aminolevulinic acid. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The paper models the PK/PD of the drug givosiran and its effect on urinary ALA, not the pharmacokinetic disposition parameters of aminolevulinic acid itself. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study focuses on the efficacy of photodynamic therapy using porfimer sodium in rabbits, and while 5-aminolevulinic acid is mentioned as a different photosensitizer in the background, no pharmacokinetic parameters are reported for it. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The paper is a review on natural polysaccharide hydrogels for colorectal cancer treatment and does not study aminolevulinic acid or report any pharmacokinetic parameters for it. |
| popPK | Li_2026_3 | irrelevant | 0 | 0 | The paper investigates the pharmacological mechanism of a bacterial-derived peptide (LKLKLL) on incretin secretion and metabolic outcomes, and does not report any pharmacokinetic parameters for aminolevulinic acid. |
| PGx | Lim_2021 | not_relevant | 0 | 0 | The study is a pharmacodynamic evaluation of a nanoparticle delivery system for photodynamic therapy and does not report a pharmacogenomic effect of a specific gene variant on a PK/PD parameter. |
| PGx | Lim_2021_2 | not_relevant | 2 | 0 | The paper discusses ALA-mediated photodynamic therapy and ABCG2 knockdown in the context of a nanoparticle theranostic system, but does not report a pharmacogenomic effect (gene variant affecting drug PK/PD). |
| popPK | Lin_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fatty acids (ALA and EPA) and DHA synthesis, not aminolevulinic acid. |
| popPK | Lituma-González_2025 | irrelevant | 0 | 0 | The study is a computational investigation of natural fatty acids as ACE2 modulators and does not involve aminolevulinic acid or pharmacokinetic parameters. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The paper is a review on nanosystem-mediated phototherapy and chemodynamic therapy, and only mentions aminolevulinic acid as an FDA-approved drug for actinic keratosis without reporting any pharmacokinetic parameters. |
| popPK | Maisch_2011 | irrelevant | 0 | 0 | The study is an in vitro photodynamic therapy efficacy experiment measuring cell viability and light spectral overlap, not a pharmacokinetic study reporting disposition parameters for aminolevulinic acid. |
| PGx | Martinez_2021 | not_relevant | 1 | 2 | The paper characterizes genetic variants in porphyria patients and their clinical/biochemical phenotypes, but does not evaluate how these variants alter the PK or PD parameters of aminolevulinic acid as a therapeutic drug. |
| PGx | Matsumoto_2015 | not_relevant | 0 | 0 | The study investigates the role of ABCB6 expression in porphyrin accumulation in vitro but does not report on specific genetic variants or genotypes affecting PK/PD parameters. |
| PGx | Mazurek_2022 | not_relevant | 4 | 2 | The paper is a literature review discussing how tumor genetics and metabolism can impact 5-ALA fluorescence, but it does not report original quantitative pharmacogenomic data on PK/PD. |
| popPK | Meissner_1993 | irrelevant | 0 | 0 | The paper is an in vitro enzymatic kinetics study of PBG deaminase in porphyria; aminolevulinic acid is only a substrate or precursor mentioned in the context of metabolism, not the subject of a pharmacokinetic model. |
| popPK | Miljak_2026 | irrelevant | 1 | 0 | The paper studies alpha lipoic acid (not aminolevulinic acid) and focuses on in vitro formulation parameters (dissolution, permeability) rather than population PK model parameters. |
| PGx | Moreira_2012 | not_relevant | 0 | 0 | The paper reports population allele frequencies of an ALAD polymorphism but does not measure or report changes in pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid. |
| PGx | Müller_2020 | not_relevant | 5 | 5 | The study investigates the influence of ABCG2 expression levels (induced/inhibited) on PpIX accumulation, but does not report a specific human genetic variant (SNP/genotype) driving this pharmacogenomic effect. |
| popPK | Nakanishi_2015 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic analysis of cellular accumulation of a metabolite (PPIX) and does not report in vivo population-pharmacokinetic parameters (CL, V, ka) for aminolevulinic acid in a biological species. |
| PGx | Nakano_2018 | not_relevant | 2 | 8 | The paper studies the effect of HCV core protein expression (a viral protein, not a human gene variant) on porphyrin metabolism, which is a mechanistic study of PCT pathogenesis rather than a pharmacogenomic study of ALA drug handling by genetic variants. |
| popPK | Paul_2026 | irrelevant | 0 | 0 | The paper is a review on AI applications in photodynamic therapy and does not report quantitative pharmacokinetic parameters for aminolevulinic acid. |
| PGx | Pawlas_2015 | not_relevant | 0 | 0 | The paper investigates genetic modifiers of lead toxicity on hearing, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic agent. |
| popPK | Petusseau_2024 | irrelevant | 2 | 0 | The study uses aminolevulinic acid (ALA) as a prodrug to generate protoporphyrin IX (PpIX) for fluorescence imaging of tissue oxygenation in mice, focusing on imaging contrast and reoxygenation kinetics rather than quantitative pharmacokinetic parameters (CL, V, ka) for ALA or PpIX. |
| PGx | Piffaretti_2019 | not_relevant | 0 | 0 | The paper investigates pharmacological modulation of PpIX fluorescence using inhibitors and culture conditions, but does not report the effect of a specific gene variant/genotype on the PK or PD of aminolevulinic acid. |
| PGx | Piffaretti_2020 | not_relevant | 0 | 0 | The study investigates pharmacological modulation and cellular factors affecting PpIX fluorescence in cell lines, not genetic variants affecting PK/PD of 5-ALA. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper is an in vitro metabolic study on human hepatocyte-like cells focusing on glycine metabolism and is unrelated to the pharmacokinetics of aminolevulinic acid. |
| PGx | Quehl_2016 | not_relevant | 0 | 0 | The paper reports the recombinant expression of CYP enzymes on E. coli surfaces for biocatalysis, not the pharmacogenomic effect of gene variants on aminolevulinic acid PK/PD. |
| PGx | Ricci_2021 | not_relevant | 0 | 0 | The paper discusses aminolevulinic acid (ALA) as a metabolic substrate/mediator of toxicity in porphyria, not as a therapeutic drug for which a pharmacokinetic or pharmacodynamic profile is being characterized. |
| PGx | Sakai_2000 | not_relevant | 5 | 8 | The study examines genetic susceptibility to lead toxicity (a toxicant), not the pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid used as a therapeutic drug. |
| PGx | Samiullah_2017 | not_relevant | 0 | 0 | The study examines the effects of nicarbazin on gene expression and PP IX synthesis in eggshells, not the pharmacogenomics of aminolevulinic acid as a drug. |
| PGx | Scinicariello_2007 | not_relevant | 0 | 0 | The paper investigates the effect of the ALAD polymorphism on lead toxicity and blood lead levels, not on the pharmacokinetic or pharmacodynamic parameters of the drug aminolevulinic acid. |
| PGx | Shaik_2008 | not_relevant | 0 | 0 | The study investigates the association between ALAD gene polymorphisms and lead toxicity/hematological parameters, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a drug. |
| popPK | Shioi_1988 | irrelevant | 0 | 0 | The study investigates bacteriochlorophyll accumulation and enzyme kinetics in bacteria, not the pharmacokinetics of the drug aminolevulinic acid. |
| PGx | Shojaeepour_2018 | not_relevant | 0 | 0 | The study examines genetic polymorphisms associated with lead toxicity and oxidative stress in opium users, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic agent. |
| PGx | Sinclair_2000 | not_relevant | 0 | 0 | The paper investigates the role of CYP enzymes in uroporphyria caused by acetone, iron, and 5-aminolevulinic acid (ALA), but it does not report a pharmacogenomic effect on the PK/PD parameters of aminolevulinic acid as a therapeutic drug. |
| PGx | Smith_1995 | not_relevant | 0 | 0 | The study investigates the effect of the ALAD genotype on the pharmacokinetics/toxicity of lead (Pb), not the drug aminolevulinic acid. |
| PGx | Stacpoole_2023 | not_relevant | 2 | 1 | The paper discusses GSTZ1's role in metabolizing dichloroacetate and its effect on endogenous aminolevulinic acid accumulation, but does not report pharmacogenomic effects on the PK/PD of aminolevulinic acid as a administered drug. |
| popPK | Star_2002 | irrelevant | 3 | 2 | The study reports pharmacokinetic parameters of the metabolite PpIX in skin tissue and uses in-vitro diffusion boundary conditions, rather than providing standard systemic or population PK parameters (CL, Vd, half-life) for ALA itself. |
| popPK | Storgaard_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gentamicin as a probe drug to assess kidney function, not aminolevulinic acid. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements (curcumin, quercetin, etc.) in breast cancer and does not study aminolevulinic acid or report its pharmacokinetic parameters. |
| popPK | Tan_2020 | irrelevant | 0 | 0 | The study focuses on the production and quantification of 5-aminolevulinic acid in recombinant *E. coli* for agricultural and biotechnological purposes, and does not report pharmacokinetic disposition parameters (e.g., clearance, volume) for the drug in any animal or human host. |
| PGx | Vagany_2021 | not_relevant | 0 | 0 | The paper studies ALAS1 gene variants and their effect on heme pathway regulation, but does not report PK/PD changes for the drug aminolevulinic acid. |
| popPK | Vaidyanathan_2000 | irrelevant | 0 | 0 | The study measures fluorescence kinetics of the metabolite protoporphyrin IX (a diagnostic marker), not the quantitative pharmacokinetic parameters (CL, V, etc.) of aminolevulinic acid itself. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | The paper is a review of oral peptide delivery technologies and does not report quantitative pharmacokinetic parameters for aminolevulinic acid. |
| popPK | Vera-Yunca_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of the therapeutic protein rhPBGD-ApoAI in AIP mice, while measuring ALA only as a pharmacodynamic biomarker (urinary excretion) rather than performing PK analysis on ALA. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the biological differences in 5-ALA metabolism between glioma stem cells and non-stem cells and the effect of iron chelation, but it does not report on human gene variants or genotypes affecting PK/PD parameters. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper is a clinical practice guideline for porphyria management and does not report pharmacogenomic effects on the PK/PD of aminolevulinic acid. |
| PGx | Watanabe_2023 | not_relevant | 0 | 0 | The study investigates the effect of 5-ALA treatment on CYP3A4 activity in a cell model, not the effect of a specific human gene variant or genotype on the pharmacokinetics or pharmacodynamics of 5-ALA. |
| popPK | Widiandani_2026 | irrelevant | 0 | 0 | The paper investigates pinostrobin pentanoate in breast cancer and contains no data for aminolevulinic acid. |
| PGx | Yamamoto_2021 | not_relevant | 5 | 5 | The study compares different cancer cell lines to identify a protein transporter (ABCG2) as a predictor of response, but does not report a pharmacogenomic effect (gene variant/genotype change) on a specific PK or PD parameter. |
| PGx | Yonemura_2016 | not_relevant | 1 | 0 | The paper studies the expression of transporter genes (PEPT1, ABCG2) in tumors to explain fluorescence detection rates, not the effect of patient genetic variants on the PK/PD parameters of the drug. |
| PGx | Yonemura_2017 | not_relevant | 1 | 1 | The paper is a review on using ALA for photodynamic detection in peritoneal metastases and does not report pharmacokinetic or pharmacodynamic effects of ALA driven by specific gene variants/genotypes (e.g., pharmacogenomics). |
| PGx | Yoshioka_2018 | not_relevant | 2 | 5 | The paper investigates how the oncogenic Ras/MEK pathway (phenotype/signaling) modulates 5-ALA metabolism and PpIX accumulation, but does not report effects of specific human gene variants or genotypes (pharmacogenomics) on PK/PD parameters. |
| popPK | Zeng_2024 | irrelevant | 2 | 0 | The paper describes a computational framework for drug transport and fluorescence generation, not a study reporting quantitative population pharmacokinetic parameters (CL, V, ka) for aminolevulinic acid. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on protein engineering for the production of cichoriin and aesculin and does not involve aminolevulinic acid or pharmacokinetic studies. |
| popPK | Zhang_2026_2 | irrelevant | 0 | 0 | The study is an epidemiological analysis of dietary omega-3 fatty acid intake in humans and contains no pharmacokinetic data for aminolevulinic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:06 UTC</sub>
