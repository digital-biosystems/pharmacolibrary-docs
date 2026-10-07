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

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| porphyrins | metabolite | — (mass units only) | — | — | — | — |
| protoporphyrin IX | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:58 | 52:54 | 0/3/0 | 0/0/0 | 0/0/0 | 1,293,591/47,612 | ollama / qwen3.8:27b-mtp-q8_0 | 56 | 5/47 | 56/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Cao_2023_reference](drugs/drug_aminolevulinic_acid/AminolevulinicAcid_Cao2023_reference.md) | — | 2-compartment (no model) | 4 | Cao C et al., Intra-Operative Definition of Glioma In…, Advanced science (Weinheim,… (2023) | [10.1002/advs.202304020](https://doi.org/10.1002/advs.202304020) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Diagaradjane_2002_reference](drugs/drug_aminolevulinic_acid/AminolevulinicAcid_Diagaradjane2002_reference.md) | — | parent + metabolite (no model) | 0 | Diagaradjane P et al., In vivo pharmacokinetics of 8-aminolevu…, Photochemistry and photobio… (2002) | [10.1562/0031-8655(2002)076&lt;0081:ivpoaa&gt;2.0.co;2](https://doi.org/10.1562/0031-8655(2002)076&lt;0081:ivpoaa&gt;2.0.co;2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Peng_2001_reference](drugs/drug_aminolevulinic_acid/AminolevulinicAcid_Peng2001_reference.md) | — | parent + metabolite (no model) | 0 | Peng Q et al., Antitumor effect of 5-aminolevulinic ac…, Cancer research (2001) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aminolevulinic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ALAD (inducer), PPOX (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 565 matched, 148 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aalders_2001.pdf` | Aalders MC et al., A mathematical evaluation of dose-depen…, Photochemistry and photobio… (2001) | popPK | 9 | [10.1562/0031-8655(2001)074&lt;0311:ameodd&gt;2.0.co;2](https://doi.org/10.1562/0031-8655(2001)074<0311:ameodd>2.0.co;2) | [11547570](https://pubmed.ncbi.nlm.nih.gov/11547570) | The paper describes a compartmental pharmacokinetic model for ALA/PpIX, but the specific numeric parameter values are not present in the provided evidence text. |
| `Diagaradjane_2002.pdf` | Diagaradjane P et al., In vivo pharmacokinetics of 8-aminolevu…, Photochemistry and photobio… (2002) | popPK | 8 | [10.1562/0031-8655(2002)076&lt;0081:ivpoaa&gt;2.0.co;2](https://doi.org/10.1562/0031-8655(2002)076<0081:ivpoaa>2.0.co;2) | [12126311](https://pubmed.ncbi.nlm.nih.gov/12126311) | The study reports quantitative pharmacokinetic parameters (km, k1, kt) for the metabolite PpIX induced by aminolevulinic acid in a compartmental model, with specific numeric values provided in the abstract. |
| `Peng_2001.pdf` | Peng Q et al., Antitumor effect of 5-aminolevulinic ac…, Cancer research (2001) | popPK | 8 | not captured | [11479222](https://pubmed.ncbi.nlm.nih.gov/11479222) | The study reports quantitative pharmacokinetic parameters (half-lives of ~18 and 58 min, one-compartment model) for aminolevulinic acid in nude mice. |

<sub>queue written 2026-10-07T22:27:05.185502+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aalders_2001 | relevant | 9 | 0 | The paper describes a compartmental pharmacokinetic model for ALA/PpIX, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Alsaikhan_2026 | irrelevant | 0 | 0 | The paper is a systematic review of nanomedicine-integrated phototherapy and mentions aminolevulinic acid only as an FDA-approved photosensitizer in a table, without reporting any pharmacokinetic parameters. |
| PGx | Astrin_1987 | not_relevant | 0 | 0 | The paper discusses the pharmacogenetics of lead toxicity and ALAD enzyme activity, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| PGx | Bebes_2011 | not_relevant | 0 | 0 | The paper investigates the role of the ABCG2 transporter in porphyrin efflux and photodynamic therapy efficacy, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of aminolevulinic acid. |
| popPK | Behsaz_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a new antifungal peptide (edaphochelin A) and does not contain any pharmacokinetic data for aminolevulinic acid. |
| popPK | Bellnier_2006 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of porfimer sodium and Photochlor, with 5-ALA only serving as a precursor for PpIX which had negligible circulating levels and no reported quantitative PK parameters. |
| PGx | Bergdahl_1997 | not_relevant | 0 | 0 | The paper investigates the effect of ALAD polymorphism on lead pharmacokinetics and kidney function, not on the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| popPK | Boddé_2002 | irrelevant | 1 | 0 | The study is an in vitro ex vivo transport study reporting flux rates (nmol/cm2/h) rather than systemic pharmacokinetic parameters (CL, V, t1/2) for aminolevulinic acid. |
| PGx | Bunk_2021 | not_relevant | 0 | 0 | The study analyzes PpIX kinetics in cell lines and notes that gene expression levels (FECH, ABCB6, ABCG2) were not connected to fluorescence, failing to report a pharmacogenomic effect. |
| popPK | Cable_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme regulation in rat hepatocytes and does not report pharmacokinetic disposition parameters for aminolevulinic acid. |
| popPK | Cable_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression and protein induction in cell lines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cao_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluorescent probes (CP2-M, etc.) for glioma imaging, and aminolevulinic acid is only mentioned as a comparator agent, not the subject of PK analysis. |
| popPK | Castanon_2026 | irrelevant | 0 | 0 | The paper investigates antimicrobial peptides (SET-M33) and their membrane interactions, with no mention of aminolevulinic acid or its pharmacokinetics. |
| PGx | Chelakkot_2020 | not_relevant | 0 | 0 | The paper investigates the molecular mechanisms (Ras/MEK/RSK/HIF-1α) regulating PpIX accumulation in cancer cells, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of aminolevulinic acid. |
| PGx | Claus_2011 | not_relevant | 0 | 0 | The paper investigates the effect of genetic variants on blood manganese levels, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid. |
| PGx | Costa_2000 | not_relevant | 0 | 0 | The paper discusses delta-aminolevulinic acid dehydratase in the context of lead toxicity and ecogenetics, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a drug. |
| PGx | Costa_2003 | not_relevant | 0 | 0 | The paper discusses ALA dehydratase in the context of lead exposure and heme synthesis, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| PGx | Davies_2008 | not_relevant | 0 | 0 | The paper investigates the role of the AHR receptor in TCDD-induced porphyria and does not report pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid as a drug. |
| popPK | Dockerill_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a thrombin inhibitor using dynamic combinatorial chemistry and contains no pharmacokinetic data for aminolevulinic acid. |
| popPK | Duprat_2026 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of quercetin on prostate cancer cells and does not involve aminolevulinic acid or its pharmacokinetics. |
| popPK | Fajana_2026 | irrelevant | 0 | 0 | The paper investigates the antioxidant and antihypertensive properties of Ficus exasperata extracts and does not involve aminolevulinic acid or pharmacokinetic modeling. |
| popPK | Gibadullin_2026 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics and structural biology of glucagon and PTH analogues, not the pharmacokinetics of aminolevulinic acid. |
| PGx | Gorman_2007 | not_relevant | 0 | 0 | The study investigates the effect of iron and ascorbate on uroporphyria in a mouse model, not the pharmacogenomic effect of a gene variant on the PK/PD of aminolevulinic acid. |
| PGx | Gundacker_2010 | not_relevant | 0 | 0 | The paper discusses the toxicokinetics of mercury and lead, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| popPK | Hahn_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of porphyrin accumulation in fish hepatoma cells where aminolevulinic acid is used as a substrate/co-factor, not as the subject drug for pharmacokinetic analysis. |
| popPK | Havelkova_2026 | irrelevant | 0 | 0 | The study focuses on the in vitro pharmacology and polymer conjugation of buparlisib, not the pharmacokinetics of aminolevulinic acid. |
| PGx | Higuchi_2021 | not_relevant | 0 | 0 | The study investigates the effect of ultrasound irradiation on PpIX accumulation and ABCG2 expression, not the effect of a gene variant/genotype on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hou_2026 | irrelevant | 0 | 0 | The paper investigates selenium peptides and Parkinson's disease, not the pharmacokinetics of aminolevulinic acid. |
| popPK | Howley_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of photodynamic therapy efficacy in cancer cell lines and does not report pharmacokinetic parameters for aminolevulinic acid. |
| PGx | Hu_2018 | not_relevant | 0 | 0 | The paper reports clinical efficacy of ALA-PDT on HPV viral load but does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of aminolevulinic acid. |
| PGx | Hu_2021 | not_relevant | 0 | 0 | The study investigates HPV genotype clearance patterns during photodynamic therapy and does not report any pharmacogenomic effects on the PK or PD of aminolevulinic acid. |
| PGx | Hu_2021_2 | not_relevant | 0 | 0 | The paper investigates clinical predictors of HPV clearance after ALA-PDT, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of aminolevulinic acid. |
| PGx | Huo_2014 | not_relevant | 0 | 0 | The study investigates the effect of ALAD genotypes on blood lead levels (toxicology/environmental exposure), not on the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| PGx | Iba_1999 | not_relevant | 0 | 0 | The paper studies the effect of pyridine on heme metabolism and ALAS activity in rats, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a drug in humans or the influence of genetic variants on its response. |
| PGx | Ishikawa_2013 | not_relevant | 2 | 0 | The paper discusses Nrf2/ABCG2 regulation in photodynamic therapy generally and mentions a SNP, but does not report specific pharmacokinetic or pharmacodynamic parameters for aminolevulinic acid. |
| PGx | Jaffe_2020 | not_relevant | 0 | 0 | The paper discusses the structural biology of Porphobilinogen synthase and its role in heme biosynthesis and porphyria, but does not report pharmacogenomic effects on the PK or PD of aminolevulinic acid. |
| popPK | Jarullah_2025 | irrelevant | 0 | 0 | The paper investigates FADS-1 polymorphisms and fatty acid levels in Type 2 Diabetes patients and does not contain any pharmacokinetic data for aminolevulinic acid. |
| popPK | Jourdain_2026 | irrelevant | 0 | 0 | The paper studies the pharmacology of marine compounds (leucettamine B, nacryline, pinctazole) for bone healing and does not mention aminolevulinic acid. |
| PGx | Kelada_2001 | not_relevant | 0 | 0 | The paper discusses the ALAD gene's role in lead toxicity and heme synthesis, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| PGx | Kerr_2019 | not_relevant | 0 | 0 | The paper investigates the effect of ALAD genotype on the relationship between lead exposure and growth (anthropometry), not on the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic agent. |
| PGx | Kim_2014 | not_relevant | 0 | 0 | The paper discusses lead exposure and genetic susceptibility to lead toxicity, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid. |
| PGx | Kitajima_2019 | not_relevant | 0 | 0 | The paper investigates the role of dynamin 2 and ABCG2 in PpIX excretion in cancer cell lines but does not report on the effect of specific human gene variants or genotypes on the pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid. |
| PGx | Krivosheev_2008 | not_relevant | 0 | 0 | The paper studies porphyrin metabolism in liver disease and does not report any pharmacogenomic effects on the PK or PD of aminolevulinic acid. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper studies the pharmacological properties of Pongamia pinnata leaf extract and does not involve aminolevulinic acid. |
| PGx | Labib_2021 | not_relevant | 0 | 0 | The study investigates ALA uptake and fluorescence in cell lines based on transporter expression (PEPT1/ABCG2) but does not report pharmacogenomic effects of specific human gene variants on PK/PD parameters. |
| PGx | Lai_2023 | not_relevant | 0 | 0 | The study investigates the effect of cell senescence (a physiological state) on porphyrin accumulation, not a specific gene variant or genotype. |
| popPK | Lantum_2003 | irrelevant | 0 | 0 | The study investigates the metabolism of maleylacetoacetic acid and the effects of dichloroacetic acid in rats, using aminolevulinic acid dehydratase only as a diagnostic enzyme assay, not as a subject drug for PK modeling. |
| popPK | Lee_2023 | irrelevant | 1 | 0 | The study models the pharmacokinetics of the drug givosiran and its pharmacodynamic effect on urinary aminolevulinic acid (ALA) levels, rather than the pharmacokinetic disposition parameters (CL, V, etc.) of aminolevulinic acid itself. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study investigates porfimer sodium photodynamic therapy in rabbits and does not report pharmacokinetic parameters for aminolevulinic acid. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The paper is a review on natural polysaccharide hydrogels for colorectal cancer and does not contain pharmacokinetic data for aminolevulinic acid. |
| popPK | Li_2026_3 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects of an Akkermansia muciniphila-derived peptide (LKLKLL) on incretin secretion and metabolic parameters, and does not study the pharmacokinetics of aminolevulinic acid. |
| PGx | Lim_2021 | not_relevant | 0 | 0 | The paper describes a drug delivery system for siRNA and photodynamic therapy, not a pharmacogenomic study of aminolevulinic acid. |
| PGx | Lim_2021_2 | not_relevant | 0 | 0 | The paper is a review on nanotechnology-based theranostics and does not report pharmacogenomic effects on the PK or PD of aminolevulinic acid. |
| popPK | Lin_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of alpha-linolenic acid and eicosapentaenoic acid, not aminolevulinic acid. |
| popPK | Lituma-González_2025 | irrelevant | 0 | 0 | The paper is a computational study on fatty acids as ACE2 modulators and does not involve aminolevulinic acid or its pharmacokinetics. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The paper is a review on nanosystem-mediated phototherapy and chemodynamic therapy for cancer, mentioning aminolevulinic acid only as an approved photosensitizer without providing any pharmacokinetic parameters. |
| popPK | Maisch_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of photodynamic therapy efficacy and spectral overlap, not a pharmacokinetic study reporting disposition parameters for aminolevulinic acid. |
| PGx | Martinez_2021 | not_relevant | 0 | 0 | The paper studies the pathophysiology of porphyrias (endogenous ALA accumulation) and does not report pharmacokinetic or pharmacodynamic effects of exogenous aminolevulinic acid administration. |
| PGx | Matsumoto_2015 | not_relevant | 0 | 0 | The study investigates the role of the ABCB6 transporter in porphyrin accumulation under hypoxia in vitro, but does not report on the effect of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Mazurek_2022 | not_relevant | 0 | 0 | The paper is a literature review discussing factors affecting 5-ALA fluorescence intensity in gliomas, focusing on tumor biology and enzyme expression rather than reporting specific pharmacogenomic effects of human gene variants on PK/PD parameters. |
| popPK | Meissner_1993 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic kinetic analysis of PBG deaminase in porphyria, not a pharmacokinetic study of aminolevulinic acid disposition. |
| popPK | Miljak_2026 | irrelevant | 0 | 0 | The paper studies alpha-lipoic acid (ALA), not aminolevulinic acid (ALA is a different drug), and focuses on formulation/in-vitro properties rather than population PK parameters for the target drug. |
| PGx | Moreira_2012 | not_relevant | 0 | 0 | The paper reports the distribution of an ALAD polymorphism in two populations but does not report any pharmacokinetic or pharmacodynamic effects of aminolevulinic acid or lead toxicity parameters. |
| PGx | Müller_2020 | not_relevant | 2 | 5 | The study investigates the effect of ABCG2 expression levels (overexpression/inhibition) on PpIX accumulation and PDT efficacy in cell lines, rather than the effect of a specific human genetic variant (SNP/polymorphism) on PK/PD parameters in a clinical or pharmacogenomic context. |
| popPK | Nakanishi_2015 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic analysis of PPIX accumulation in cell lines, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for aminolevulinic acid in a biological system. |
| PGx | Nakano_2018 | not_relevant | 0 | 0 | The paper investigates the effect of HCV core protein expression on porphyrin metabolism in cell lines, not the effect of a human gene variant on the PK/PD of aminolevulinic acid. |
| popPK | Paul_2026 | irrelevant | 0 | 0 | The paper is a review on AI in photodynamic therapy and does not report quantitative pharmacokinetic parameters for aminolevulinic acid. |
| PGx | Pawlas_2015 | not_relevant | 0 | 0 | The paper investigates the effect of lead exposure on hearing and the modifying role of ALAD/VDR polymorphisms, but it does not report pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid as a drug. |
| popPK | Petusseau_2024 | irrelevant | 2 | 0 | The study focuses on fluorescence imaging and oxygenation dynamics using ALA as a prodrug for PpIX, reporting qualitative tissue distribution and reoxygenation kinetics rather than quantitative pharmacokinetic parameters (CL, V, ka) for aminolevulinic acid. |
| PGx | Piffaretti_2019 | not_relevant | 0 | 0 | The paper investigates pharmacological modulation of PpIX fluorescence in cell lines, not the effect of a specific gene variant or genotype on the PK/PD of aminolevulinic acid. |
| PGx | Piffaretti_2020 | not_relevant | 0 | 0 | The paper investigates pharmacological modulation of PpIX fluorescence in cell lines, not the effect of human gene variants on the PK/PD of aminolevulinic acid. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper is an in-vitro metabolomics study on glycine's role in hepatocyte maturation and does not report pharmacokinetic parameters for aminolevulinic acid. |
| PGx | Quehl_2016 | not_relevant | 0 | 0 | The paper describes the recombinant expression of CYP1A2 and CPR on E. coli for biocatalysis, not a pharmacogenomic study of aminolevulinic acid. |
| PGx | Ricci_2021 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of kidney disease in porphyrias and the role of the PEPT2 transporter in ALA reabsorption, but it does not report a pharmacogenomic effect on the PK or PD of aminolevulinic acid as a drug. |
| PGx | Sakai_2000 | not_relevant | 0 | 0 | The study investigates the effect of ALAD genotypes on heme precursors in the context of lead toxicity, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| PGx | Samiullah_2017 | not_relevant | 0 | 0 | The paper studies the effect of nicarbazin on ALAS1 expression and protoporphyrin IX synthesis in hens, not the pharmacogenomics of aminolevulinic acid. |
| PGx | Scinicariello_2007 | not_relevant | 0 | 0 | The paper analyzes the effect of ALAD polymorphism on lead toxicity markers (blood lead, ZPP, hemoglobin), not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| PGx | Shaik_2008 | not_relevant | 0 | 0 | The study examines the effect of ALAD polymorphisms on blood lead levels and hematological parameters in the context of lead toxicity, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| popPK | Shioi_1988 | irrelevant | 0 | 0 | The paper is a microbiological study on bacteriochlorophyll biosynthesis in bacteria, not a pharmacokinetic study of aminolevulinic acid in humans or animals. |
| PGx | Shojaeepour_2018 | not_relevant | 0 | 0 | The paper studies the effect of ALAD genotype on blood lead levels in opium users, not the pharmacokinetics or pharmacodynamics of aminolevulinic acid as a therapeutic drug. |
| PGx | Sinclair_2000 | not_relevant | 2 | 5 | The paper investigates the role of CYP enzymes in uroporphyria pathogenesis and ALA-induced toxicity, but does not report pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid itself (e.g., clearance, half-life, or specific PD response metrics) modulated by genotype. |
| PGx | Smith_1995 | not_relevant | 0 | 0 | The paper investigates the effect of the ALAD-2 genotype on the pharmacokinetics and toxicity of lead, not aminolevulinic acid. |
| PGx | Stacpoole_2023 | not_relevant | 0 | 0 | The paper discusses the metabolism of dichloroacetate (DCA) and the accumulation of aminolevulinic acid (ALA) as a consequence of DCA inhibition, but it does not report pharmacogenomic effects on the PK/PD of aminolevulinic acid itself as a drug. |
| popPK | Star_2002 | irrelevant | 2 | 0 | The paper presents a mechanistic diffusion and metabolic model for ALA in skin tissue rather than a standard population pharmacokinetic study reporting systemic disposition parameters like clearance or volume of distribution. |
| popPK | Storgaard_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for gentamicin, not aminolevulinic acid. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements (curcumin, quercetin, etc.) in breast cancer and does not mention aminolevulinic acid or report any pharmacokinetic parameters for it. |
| popPK | Tan_2020 | irrelevant | 0 | 0 | The study focuses on the production and quantification of 5-aminolevulinic acid in recombinant E. coli, not on its pharmacokinetic disposition parameters. |
| PGx | Vagany_2021 | not_relevant | 0 | 0 | The paper studies the ALAS1 gene (which encodes the enzyme that synthesizes aminolevulinic acid) and its regulation, but does not report pharmacokinetic or pharmacodynamic parameters of aminolevulinic acid as a drug. |
| popPK | Vaidyanathan_2000 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of the metabolite protoporphyrin IX (PpIX) for diagnostic fluorescence, not the disposition parameters (CL, V, etc.) of the parent drug aminolevulinic acid, and no numeric PK values are provided in the evidence. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | The paper is a review on oral peptide delivery technologies and does not report pharmacokinetic parameters for aminolevulinic acid. |
| popPK | Vera-Yunca_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of recombinant PBGD proteins and the pharmacodynamics of heme precursors (including ALA) in AIP mice, but does not report PK parameters for aminolevulinic acid as a dosed drug. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the effect of iron chelation and gene expression levels (HO-1, FECH) on PpIX accumulation in glioma stem cells, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter of aminolevulinic acid. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper is a clinical practice update on the diagnosis and management of acute hepatic porphyrias and does not report pharmacogenomic effects on the PK/PD of aminolevulinic acid. |
| PGx | Watanabe_2023 | not_relevant | 0 | 0 | The paper investigates the effect of 5-ALA on CYP3A4 activity in cell lines to improve drug metabolism models, not the effect of a gene variant on the PK/PD of 5-ALA itself. |
| popPK | Widiandani_2026 | irrelevant | 0 | 0 | The paper studies pinostrobin pentanoate as an anticancer agent and does not involve aminolevulinic acid or its pharmacokinetics. |
| PGx | Yamamoto_2021 | not_relevant | 2 | 5 | The study identifies the ABCG2 transporter expression level as a predictor of efficacy, but it does not report a specific gene variant or genotype associated with changes in PK/PD parameters. |
| PGx | Yonemura_2016 | not_relevant | 2 | 5 | The paper analyzes gene expression levels (PEPT1/ABCG2) in tumor tissues to explain fluorescence detection mechanisms, but does not report pharmacogenomic effects of specific genetic variants on the PK or PD parameters of aminolevulinic acid. |
| PGx | Yonemura_2017 | not_relevant | 0 | 0 | The paper is a review of photodynamic diagnosis using ALA and discusses gene expression (PEPT1, ABCG2) in tumor tissues, but does not report pharmacogenomic effects of human genetic variants on the PK or PD parameters of ALA. |
| PGx | Yoshioka_2018 | not_relevant | 0 | 0 | The paper investigates the effect of oncogenic Ras/MEK pathway inhibition on PpIX accumulation, not the effect of a specific gene variant or genotype on the pharmacokinetics or pharmacodynamics of aminolevulinic acid. |
| popPK | Zeng_2024 | irrelevant | 2 | 0 | The paper presents a computational framework for drug transport and conversion to a metabolite (PpIX) rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for aminolevulinic acid itself. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on the enzyme engineering of glycosyltransferases for the production of cichoriin and aesculin in E. coli, and does not contain any pharmacokinetic data for aminolevulinic acid. |
| popPK | Zhang_2026_2 | irrelevant | 0 | 0 | The paper is an epidemiological study on dietary omega-3 fatty acids and cardiovascular-kidney-metabolic syndrome, containing no pharmacokinetic data for aminolevulinic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:27 UTC</sub>
