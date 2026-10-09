<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;methylene blue&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MethyleneBlue_Bonak2026_reference&quot;,&quot;label&quot;:&quot;Bo\u015fnak_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylene_blue/MethyleneBlue_Bonak2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# methylene blue

- **generic name:** methylene blue
- **ATC codes:** not captured
- **DrugBank:** [DB09241](https://go.drugbank.com/drugs/DB09241) · **PubChem:** [CID 6099](https://pubchem.ncbi.nlm.nih.gov/compound/6099)
- **molar mass:** 319.85 g/mol (C16H18ClN3S) — DrugBank
- **groups:** approved, investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 09:58 | 21:11 | 1/2/0 | 1/0/0 | 0/0/0 | 889,849/33,143 | einfracz / qwen3.8-27b | 45 | 13/31 | 36/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Boşnak_2026_reference](drugs/drug_methylene_blue/MethyleneBlue_Bonak2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Boşnak C et al., Determinants of levofloxacin prophylaxi…, The Journal of antimicrobia… (2026) | [10.1093/jac/dkag284](https://doi.org/10.1093/jac/dkag284) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Milani_1992_reference](drugs/drug_methylene_blue/MethyleneBlue_Milani1992_reference.md) | — | general linear (no model) | 0 | Milani A et al., Ascites dynamics in cirrhosis. Proposal…, Journal of hepatology (1992) | [10.1016/s0168-8278(05)80672-5](https://doi.org/10.1016/s0168-8278(05)80672-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Zuna_2017_reference](drugs/drug_methylene_blue/MethyleneBlue_Zuna2017_reference.md) | — | 1-compartment (no model) | 2 | Zuna I et al., ADAM, a hands-on patient simulator for…, British journal of clinical… (2017) | [10.1111/bcp.13357](https://doi.org/10.1111/bcp.13357) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">other organism</span> | [Digby_2021_photocytotoxicity](drugs/drug_methylene_blue/pd_Digby_2021_photocytotoxicity.md) | photocytotoxicity biomarker turnover ← methylene_blue | — | Digby EM et al., Highly Potent Photoinactivation of Bact…, ACS infectious diseases (2021) | [10.1021/acsinfecdis.1c00313](https://doi.org/10.1021/acsinfecdis.1c00313) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylene_blue) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/inhibitor/substrate, `CYP2B6` inhibitor, `CYP2C19` inhibitor/substrate, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` inhibitor, `UGT1A4` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BLVRB (substrate), GUCY1A2 (inhibitor), NOS1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 997 matched, 150 returned
- **screened:** 17  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Milani_1992.pdf` | Milani A et al., Ascites dynamics in cirrhosis. Proposal…, Journal of hepatology (1992) | popPK | 5 | [10.1016/s0168-8278(05)80672-5](https://doi.org/10.1016/s0168-8278(05)80672-5) | [1336786](https://pubmed.ncbi.nlm.nih.gov/1336786) | The study reports specific numeric volume and clearance parameters for methylene blue in the ascitic fluid compartment, though it is primarily a diagnostic fluid dynamics study rather than a systemic PK study. |
| `Berkenboom_1989.pdf` | Berkenboom G et al., Comparison of responses to acetylcholin…, Cardiovascular research (1989) | pd | 4 | [10.1093/cvr/23.9.780](https://doi.org/10.1093/cvr/23.9.780) | [2482133](https://www.ncbi.nlm.nih.gov/pubmed/2482133) | metadata signals extractable PD data (EC50) |
| `Burkard_2016.pdf` | Burkard L et al., Development of a functional assay to de…, Biomedical chromatography :… (2016) | pd | 4 | [10.1002/bmc.3580](https://doi.org/10.1002/bmc.3580) | [26257195](https://www.ncbi.nlm.nih.gov/pubmed/26257195) | metadata signals extractable PD data (IC50) |
| `Gaston_1994.pdf` | Gaston B et al., Relaxation of human bronchial smooth mu…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [7906736](https://www.ncbi.nlm.nih.gov/pubmed/7906736) | metadata signals extractable PD data (IC50) |
| `Gorzalczany_2013.pdf` | Gorzalczany S et al., Spasmolytic activity of Artemisia copa…, Natural product research (2013) | pd | 4 | [10.1080/14786419.2012.688049](https://doi.org/10.1080/14786419.2012.688049) | [22577954](https://www.ncbi.nlm.nih.gov/pubmed/22577954) | metadata signals extractable PD data (EC50) |
| `Jackson_1996.pdf` | Jackson TS et al., Vasodilatory properties of recombinant…, The American journal of phy… (1996) | pd | 4 | [10.1152/ajpheart.1996.271.3.H924](https://doi.org/10.1152/ajpheart.1996.271.3.H924) | [8853326](https://www.ncbi.nlm.nih.gov/pubmed/8853326) | metadata signals extractable PD data (EC50) |
| `Komas_1991.pdf` | Komas N et al., Endothelium-dependent and independent r…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12457.x](https://doi.org/10.1111/j.1476-5381.1991.tb12457.x) | [1665741](https://www.ncbi.nlm.nih.gov/pubmed/1665741) | metadata signals extractable PD data (EC50) |
| `Yam_2016.pdf` | Yam MF et al., Mechanism of vasorelaxation induced by…, European journal of pharmac… (2016) | pd | 4 | [10.1016/j.ejphar.2016.06.047](https://doi.org/10.1016/j.ejphar.2016.06.047) | [27370961](https://www.ncbi.nlm.nih.gov/pubmed/27370961) | metadata signals extractable PD data (EMAX) |
| `Yi_2016.pdf` | Yi X et al., Surface plasmon resonance biosensors fo…, The Analyst (2016) | pd | 4 | [10.1039/c5an01864a](https://doi.org/10.1039/c5an01864a) | [26613550](https://www.ncbi.nlm.nih.gov/pubmed/26613550) | metadata signals extractable PD data (IC50) |
| `Belfield_2018.pdf` | Belfield KD et al., Review and drug therapy implications of…, American journal of health-… (2018) | pgx | 7 | [10.2146/ajhp160961](https://doi.org/10.2146/ajhp160961) | [29305344](https://www.ncbi.nlm.nih.gov/pubmed/29305344) | metadata signals extractable PGX data (G6PD, PK/PD-context) |
| `Caprari_1991.pdf` | Caprari P et al., Membrane alterations in G6PD- and PK-de…, Biochemical medicine and me… (1991) | pgx | 7 | [10.1016/0885-4505(91)90004-5](https://doi.org/10.1016/0885-4505(91)90004-5) | [2015106](https://www.ncbi.nlm.nih.gov/pubmed/2015106) | metadata signals extractable PGX data (G6PD, PK/PD-context) |
| `PMID24787449_2014.pdf` | PMID24787449, Clinical Pharmacogenetics Implementatio… (2014) | pgx | 5 | [10.1038/clpt.2014.97](https://doi.org/10.1038/clpt.2014.97) | [24787449](https://www.ncbi.nlm.nih.gov/pubmed/24787449) | metadata signals extractable PGX data (G6PD) |
| `Pascale_1987.pdf` | Pascale R et al., Decreased stimulation by 12-O-tetradeca…, Carcinogenesis (1987) | pgx | 5 | [10.1093/carcin/8.10.1567](https://doi.org/10.1093/carcin/8.10.1567) | [2820605](https://www.ncbi.nlm.nih.gov/pubmed/2820605) | metadata signals extractable PGX data (G6PD) |

<sub>queue written 2026-10-09T09:50:38.260812+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul_2014 | irrelevant | 0 | 0 | The paper is a toxicology study on a fish cell line where Methylene Blue is used only as a reagent for a protein assay, not as the subject drug for pharmacokinetic analysis. |
| popPK | Abla_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate, and methylene blue is used only as a staining agent for characterizing microneedles. |
| PGx | Ahmed_2021 | not_relevant | 4 | 0 | The text describes a qualitative pharmacodynamic/contraindication mechanism for methylene blue in G6PD deficiency but provides no quantitative PK/PD parameter data or fitted effect sizes. |
| PGx | Alessa_2015 | not_relevant | 0 | 0 | This is a case report on rasburicase-induced methemoglobinemia in a patient with normal G6PD enzyme levels; methylene blue was not administered, so there is no pharmacogenomic effect reported on PK/PD parameters for methylene blue. |
| popPK | Araújo_2005 | irrelevant | 0 | 0 | The study is an in-vitro pharmacology investigation of sildenafil's effects on rat duodenal contractility, using methylene blue only as a nonspecific inhibitor to assess mechanism, with no PK parameters for methylene blue. |
| popPK | Arvola_1992 | irrelevant | 0 | 0 | The study is a vascular physiology experiment using methylene blue as a nitric oxide synthase inhibitor (mechanistic agent), not a pharmacokinetic study of the drug. |
| PGx | Baird_1986 | not_relevant | 0 | 0 | The paper studies primaquine analogs and red blood cell toxicity; while methylene blue is mentioned as a mechanistic comparison, no pharmacokinetic or pharmacodynamic effects of gene variants on methylene blue are reported. |
| PGx | Belfield_2018 | not_relevant | 2 | 1 | The paper reviews G6PD deficiency and contraindicates methylene blue use in G6PD-deficient patients to avoid hemolysis, but does not report pharmacokinetic or pharmacodynamic parameter changes of methylene blue caused by the genotype. |
| popPK | Berkenboom_1989 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of coronary artery relaxation where methylene blue is used as an inhibitor, not a pharmacokinetic study of the drug. |
| popPK | Boşnak_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for levofloxacin, not methylene blue. |
| popPK | Bryant_2025 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics and electrophysiological effects of acute alcohol (ethanol) on the mouse prefrontal cortex and does not investigate the pharmacokinetics of methylene blue. |
| PGx | Bucklin_2013 | not_relevant | 0 | 0 | The paper reports a case of methemoglobinemia and mortality associated with rasburicase and mentions G6PD status, but it does not report any change in the pharmacokinetic or pharmacodynamic parameters of methylene blue based on genotype. |
| PGx | Burelle_2015 | not_relevant | 1 | 0 | The study reports a pharmacodynamic response to methylene blue (protection from cell death) in fibroblasts with a genetic mitochondrial disorder, but does not report changes in pharmacokinetic parameters or standard PK/PD metrics. |
| PGx | Caprari_1991 | not_relevant | 0 | 0 | The paper reports membrane protein changes in G6PD/PK-deficient erythrocytes, not standard PK/PD parameters for methylene blue therapy. |
| PGx | Carson_1981 | not_relevant | 1 | 0 | The paper focuses on the toxicology of primaquine and uses methylene blue only as a control agent to demonstrate in vitro metabolic mechanisms; it does not report pharmacogenomic changes in the PK or PD of methylene blue itself. |
| popPK | Carucci_2023 | irrelevant | 0 | 0 | The paper focuses on PK parameters for the drugs TD-6450 and NITD609, while methylene blue is only mentioned as a known candidate in a screening library without providing any of its quantitative PK data. |
| popPK | Cena_2001 | irrelevant | 0 | 0 | The paper is a mechanistic/pharmacological study on new vasodilator drugs where methylene blue is used only as a guanylate cyclase inhibitor (comparator/probe) to distinguish NO-dependent effects, not as the subject of pharmacokinetic analysis. |
| PGx | Clifton_2003 | not_relevant | 2 | 0 | The text mentions G6PD deficiency as a risk factor for hemolytic effects (toxicity/PD) but does not provide specific PK/PD parameter changes or fitted effect sizes linked to the genotype. |
| PGx | Coleman_1996 | not_relevant | 2 | 5 | The text mentions G6PD deficiency as a cause of treatment failure (lack of response) with methylene blue but does not report quantitative changes in specific PK or PD parameters attributable to genetic variants. |
| PGx | Coleman_2026 | not_relevant | 0 | 0 | The paper focuses on Dapsone and strategies to reduce its toxicity; methylene blue is mentioned only as an alternative treatment, not as the subject of pharmacogenomic analysis. |
| popPK | Cuccia_2003 | irrelevant | 2 | 0 | The study uses methylene blue as an optical contrast agent to characterize tumor hemodynamics (blood flow/permeability) in rats, rather than performing a standard population pharmacokinetic analysis for drug disposition parameters like clearance or volume of distribution. |
| popPK | Dong_2025 | irrelevant | 0 | 0 | The paper is a clinical trial assessing microcirculation outcomes, not a pharmacokinetic study reporting clearance, volume, or half-life. |
| popPK | Drábková_2007 | irrelevant | 0 | 0 | The study is an in-vitro algal toxicity assessment using methylene blue as a photosensitizer, not a pharmacokinetic study. |
| PGx | Duflot_2018 | not_relevant | 0 | 0 | The paper discusses ifosfamide and CYP2B6/3A4 polymorphisms, not methylene blue. |
| popPK | Eltze_1989 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study using methylene blue as a mechanism probe (nitric oxide/cGMP inhibitor) to antagonize nicorandil, not a study reporting methylene blue's own pharmacokinetic parameters. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The study is a pharmacovigilance analysis of sedation adverse events for antipsychotics; methylene blue is only mentioned in the discussion as a derivative of chlorpromazine, with no PK parameters reported. |
| popPK | Fan_2015 | irrelevant | 0 | 0 | The paper describes an enzymatic biofuel cell where methylene blue is used as an electron transfer mediator, not as a drug subject to pharmacokinetic analysis. |
| popPK | Fan_2024 | irrelevant | 0 | 0 | The paper investigates the adsorption of methylene blue onto biochar materials, not the pharmacokinetics of methylene blue in biological systems. |
| popPK | Fernandes_1989 | irrelevant | 0 | 0 | Methylene blue is used only as a pharmacological inhibitor in a functional bioassay to characterize a relaxant factor, not as the subject drug for pharmacokinetic analysis. |
| PGx | Friedman_2020 | not_relevant | 1 | 0 | This case series describes the clinical management of methemoglobinemia and notes the contraindication of methylene blue in G6PD deficiency, but it does not report quantitative pharmacokinetic or pharmacodynamic parameters influenced by genetic variants. |
| popPK | Fu_2011 | irrelevant | 0 | 0 | Methylene blue is used solely as a pharmacological inhibitor (NO scavenger) in in-vitro aortic ring experiments, and no pharmacokinetic parameters for it are reported. |
| popPK | Fujimoto_1990 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of the drug pimobendan on rat vessels, where methylene blue is used only as a tool compound to demonstrate a cGMP mechanism, and no pharmacokinetic parameters for methylene blue are reported. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | The study focuses on the antibacterial synergy of dihydroquercetin and ceftazidime against Pseudomonas aeruginosa; methylene blue is used only as a histological counterstain and is not the subject drug. |
| PGx | Garcea_1988 | not_relevant | 0 | 0 | The paper investigates the effects of DHEA on liver enzyme activities and carcinogenesis, using methylene blue only as a control agent to stimulate hexose monophosphate shunt, rather than studying pharmacogenomic effects on its PK/PD parameters. |
| popPK | Gendrot_2020 | irrelevant | 1 | 0 | The paper is an in vitro antiviral activity study (dosing in cell culture) and does not report original pharmacokinetic disposition parameters (CL, V, Q) for methylene blue; it only cites literature values for Cmax and half-life. |
| popPK | Gibhard_2024 | irrelevant | 0 | 0 | The study investigates the PK/PD of the drug UCT594, not methylene blue. |
| popPK | Ginsparg_2026 | irrelevant | 0 | 0 | The paper describes a computational drug discovery pipeline and functional profiling in zebrafish, containing no pharmacokinetic data for methylene blue. |
| popPK | Gorzalczany_2013 | irrelevant | 0 | 0 | Methylene blue is used only as a pharmacological tool to assess the mechanism of Artemisia copa extract in an isolated organ bath, not as the subject of a pharmacokinetic study. |
| popPK | Goud_2025 | irrelevant | 0 | 0 | The study investigates the inhibition of tau protein aggregation by purpurin and oleocanthal, with methylene blue only mentioned as a class of compounds in the introduction, and no pharmacokinetic data for methylene blue is provided. |
| popPK | Haefliger_1997 | irrelevant | 0 | 0 | Methylene blue is used as a pharmacological inhibitor in an in vitro mechanistic study, not as a drug for pharmacokinetic analysis. |
| PGx | Hamza_2022 | not_relevant | 0 | 0 | The paper is a case report on phenazopyridine-induced methaemoglobinaemia and does not report any pharmacogenomic effect on the PK/PD of methylene blue. |
| popPK | Hansen_2024 | irrelevant | 0 | 0 | The study focuses on lymphatic imaging using indocyanine green (ICG) and quantum dots (QDs) in rats, and mentions methylene blue only as a comparator to ICG in the context of FDA approval, without dosing it or reporting its pharmacokinetic parameters. |
| popPK | Ishii_1991 | irrelevant | 0 | 0 | Methylene blue is used as a pharmacological inhibitor in an in vitro mechanistic study, not as the subject of a pharmacokinetic analysis. |
| popPK | Jackson_1996 | irrelevant | 0 | 0 | The study investigates the vasodilatory properties of maxadilan in rabbit aorta, using methylene blue only as an inhibitor to determine the mechanism of action, not as a subject for pharmacokinetic analysis. |
| PGx | Jacobasch_1982 | not_relevant | 2 | 2 | The paper describes the metabolic phenotype of G6PD deficiency and its effect on oxidative pathways, but it does not report a gene variant-driven change in the specific pharmacokinetics (ADME) or clinical pharmacodynamics of methylene blue itself; the mention of "methylene blue stimulation" refers to an in-vitro metabolic test rather than a PK/PD parameter of the drug. |
| popPK | Johannsen_2023 | irrelevant | 0 | 0 | The study is a preclinical safety/efficacy trial in pigs evaluating cardiac arrest outcomes and does not report any pharmacokinetic parameters (CL, V, t1/2) for methylene blue. |
| PGx | Kashari_2022 | not_relevant | 0 | 0 | The paper is a case report discussing the contraindication of methylene blue in G6PD-deficient patients due to clinical failure and risk, not a study quantifying pharmacokinetic or pharmacodynamic parameters. |
| PGx | Khan_2017 | not_relevant | 0 | 0 | The paper discusses the contraindication of methylene blue in G6PD deficiency due to lack of efficacy and toxicity, but does not report quantitative PK/PD changes of methylene blue mediated by the gene variant. |
| popPK | Khazipov_1999 | irrelevant | 0 | 0 | Methylene blue is used as a passive diffusion tracer to verify chamber isolation, not as a drug subject to pharmacokinetic modeling. |
| PGx | Kirkman_1980 | not_relevant | 0 | 0 | The study investigates G6PD enzyme kinetics in normal red cells using methylene blue as a probe, but does not report pharmacogenomic effects on methylene blue PK or PD parameters. |
| popPK | Komas_1991 | irrelevant | 0 | 0 | This is an in vitro pharmacology study using methylene blue solely as a tool compound to inhibit soluble guanylate cyclase, not a pharmacokinetic study of methylene blue. |
| PGx | Koronica_2026 | not_relevant | 0 | 0 | The paper discusses methylene blue as a treatment for ifosfamide toxicity, not as a pharmacogenomic model drug, and reports no PK/PD data for methylene blue. |
| popPK | Lad_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacological properties of Eucalyptus globulus essential oil, and methylene blue is mentioned only as an anaerobic indicator, not as a drug subject of PK study. |
| PGx | Lee_2014 | not_relevant | 0 | 0 | The paper describes a case of naproxen-induced methemoglobinemia treated with methylene blue but does not report a pharmacogenomic effect on methylene blue's PK or PD. |
| popPK | Li_2004 | irrelevant | 0 | 0 | The study is a pharmacological investigation of peroxynitrite in isolated canine cerebral arteries where methylene blue is used only as a non-specific nitric oxide scavenger/comparator, with no pharmacokinetic parameters reported. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a review of polysaccharide hydrogels for colorectal cancer and does not contain pharmacokinetic data for methylene blue. |
| PGx | Lu_2018 | not_relevant | 0 | 0 | This paper is a systematic review of efficacy and safety; it mentions G6PD deficiency but does not report quantitative pharmacokinetic or pharmacodynamic data linked to specific gene variants/genotypes. |
| PGx | Meissner_2005 | not_relevant | 0 | 0 | The study compares diagnostic tests for G6PD deficiency and does not measure or report changes in the pharmacokinetic or pharmacodynamic parameters of methylene blue. |
| popPK | Milani_1998 | irrelevant | 2 | 0 | Methylene blue is used as a diagnostic/dilution agent to measure ascites free-water clearance, not as the subject of a pharmacokinetic study reporting drug disposition parameters (CL, V, half-life, etc.) for the drug itself. |
| popPK | Mitchell_2026 | irrelevant | 0 | 0 | The paper is a study on FAK inhibition in NF2-related schwannomatosis and does not contain any pharmacokinetic data or parameters for methylene blue. |
| popPK | Montaño_2025 | irrelevant | 0 | 0 | The paper describes the development of new near-infrared fluorophores for nerve imaging and does not involve methylene blue or its pharmacokinetics. |
| PGx | Moretti_1996 | not_relevant | 2 | 0 | The paper describes a case of methemoglobinemia in a patient with G6PD deficiency treated with methylene blue, but does not report quantitative changes in PK/PD parameters of methylene blue due to the genotype. |
| popPK | Muramatsu_1983 | irrelevant | 0 | 0 | The study investigates the vasorelaxing mechanism of molsidomine in isolated dog vessels, using methylene blue only as a pharmacological tool/inhibitor, and does not report any pharmacokinetic parameters for methylene blue. |
| popPK | Narendran_2023 | irrelevant | 0 | 0 | The paper describes an in-vitro biomimetic device for controlled release of methylene blue from a hydrogel, reporting release kinetics rather than pharmacokinetic parameters like clearance or volume of distribution in a biological system. |
| popPK | Nozari_2016 | irrelevant | 0 | 0 | The study is an in-vitro anti-parasitic assay where methylene blue is used solely as a staining agent, and no pharmacokinetic parameters are reported. |
| popPK | Ooi_2011 | irrelevant | 0 | 0 | This is an in-vitro study of a natural product where methylene blue is used as a reagent for the MTT cytotoxicity assay, not as a subject drug for pharmacokinetic analysis. |
| popPK | Ooi_2015 | irrelevant | 0 | 0 | Methylene blue is used as a diagnostic reagent in a cytotoxicity assay, not studied for pharmacokinetic parameters. |
| PGx | PMID24787449_2014 | not_relevant | 0 | 0 | The paper discusses CPIC guidelines for rasburicase and G6PD deficiency, which is unrelated to the pharmacokinetics or pharmacodynamics of methylene blue. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper is a guideline for G6PD genotype and does not report pharmacokinetic or pharmacodynamic parameter data for methylene blue. |
| PGx | Pannu_2020 | not_relevant | 2 | 1 | The paper discusses methylene blue as a treatment for naphthalene toxicity and mentions G6PD deficiency as a contraindication, but does not report a pharmacogenomic study or quantitative effect of a variant on a PK/PD parameter of methylene blue. |
| PGx | Pascale_1987 | not_relevant | 0 | 0 | This paper reports G6PD's effect on methylene blue's PD in leukocytes, which does not relate to the drug's pharmacokinetic or pharmacodynamic profile in humans. |
| popPK | Paul_2026 | irrelevant | 0 | 0 | The paper is a review on artificial intelligence in photodynamic therapy and does not report quantitative pharmacokinetic parameters for methylene blue. |
| popPK | Pomerleau_1997 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of vasodilation in mouse aorta where methylene blue is used solely as an inhibitor of nitric oxide synthase, not as the subject of pharmacokinetic analysis. |
| popPK | Purificação_2023 | irrelevant | 0 | 0 | The paper is a study on DHODH inhibitors for SARS-CoV-2 and does not report pharmacokinetic parameters for methylene blue. |
| popPK | Ricardo_2002 | irrelevant | 0 | 0 | Methylene blue is used only as a pharmacological inhibitor/comparator in a hemodynamic study of S-nitroso-N-acetylcysteine, with no PK parameters reported. |
| PGx | Sato_1981 | not_relevant | 0 | 0 | The paper studies the metabolic role of methylene blue as an inhibitor in thyroid hormone synthesis, not a pharmacogenomic effect on the PK/PD of methylene blue. |
| PGx | Schuster_1990 | not_relevant | 5 | 2 | The paper uses methylene blue as a standard metabolic stimulant in a model of G6PD deficiency to assess cellular energy/redox status, rather than reporting pharmacogenomic effects on the clinical PK or PD parameters of methylene blue therapy itself. |
| PGx | Seltzer_2022 | not_relevant | 1 | 0 | The paper describes a case where a G6PD gene variant caused a pharmacodynamic adverse reaction (hemolytic anemia) to methylene blue, but does not report a change in standard PK or PD efficacy parameters like clearance, AUC, or specific methemoglobin reduction kinetics. |
| popPK | Sikandar_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paroxetine, not methylene blue. |
| PGx | Singhal_2017 | not_relevant | 0 | 0 | The paper reports on the use of methylene blue as an electrochemical indicator for a viral diagnostic sensor, not its pharmacokinetics or pharmacodynamics in relation to genetic variants. |
| PGx | Springer_2024 | not_relevant | 0 | 0 | The paper uses methylene blue as a model redox cycler to study its mechanism of action (ATP depletion) in Plasmodium falciparum, not to report pharmacogenomic effects on PK/PD. |
| PGx | Tiwari_2020 | not_relevant | 0 | 0 | The paper is a case report describing the management of a G6PD-deficient patient with red cell exchange, not a study on the pharmacokinetics or pharmacodynamics of methylene blue. |
| popPK | Tonta_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of pilocarpine in rat arteries where methylene blue is used only as a nitric oxide synthase inhibitor (comparator/tool drug), not as the subject of pharmacokinetic analysis. |
| PGx | Torchia_2025 | not_relevant | 0 | 0 | The paper reviews ifosfamide-induced encephalopathy and mentions methylene blue only as a therapeutic option, but does not report any pharmacogenomic effects of gene variants on the PK or PD parameters of methylene blue. |
| PGx | Vidhyashree_2022 | not_relevant | 2 | 0 | The paper reviews rasburicase-induced methemoglobinemia and mentions G6PD deficiency as a contraindication for methylene blue, but it does not report quantitative pharmacokinetic or pharmacodynamic parameters for methylene blue modified by the gene variant. |
| popPK | Vilela_2020 | irrelevant | 0 | 0 | Methylene blue is used only as a pharmacological blocker (NO inhibitor) in an in-vitro spasmolysis study of Lippia alnifolia essential oil, not as the subject drug for pharmacokinetic analysis. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review of oxidative stress in Acanthamoeba keratitis and does not contain any pharmacokinetic data for methylene blue. |
| PGx | Wilson_1980 | not_relevant | 2 | 2 | The paper describes in vitro enzymatic regulation in G6PD-deficient vs normal cells using methylene blue, but does not report a pharmacokinetic or pharmacodynamic parameter of the drug itself in a human pharmacogenomic context. |
| PGx | Wright_1998 | not_relevant | 1 | 2 | The paper investigates the pharmacodynamics of N-acetylcysteine in G6PD deficiency, noting only that methylene blue is ineffective in this context without reporting specific PK/PD parameters for methylene blue. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper is a study on neuroinflammation and nanotechnology delivery (siMETTL3-hNVs) in mice and does not mention methylene blue or report any pharmacokinetic parameters for it. |
| popPK | Yam_2016 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of eupatorin using methylene blue only as a diagnostic probe agent for NO pathway blockade, not as the subject of a pharmacokinetic study. |
| popPK | Yamada_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasodilator potency, using methylene blue only as a pharmacological inhibitor of guanylate cyclase, with no pharmacokinetic parameters reported. |
| PGx | Yang_2004 | not_relevant | 2 | 5 | The paper reports a case of copper toxicity where methylene blue treatment was ineffective due to G6PD deficiency, which is a pharmacogenomic context, but it does not report a measured change in a specific PK (e.g., clearance, AUC) or PD parameter of methylene blue itself resulting from the genotype, but rather a clinical failure to respond. |
| PGx | Youngster_2010 | not_relevant | 2 | 0 | The paper is a qualitative evidence-based review of safety in G6PD deficiency that lists methylene blue as a drug to be avoided due to hemolysis risk, but it does not report quantitative changes in pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, or response magnitude) associated with the genotype. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The study focuses on the performance of a biosensor platform using irinotecan and antibiotics as probe drugs, with no mention of methylene blue or its pharmacokinetic parameters. |
| popPK | Zuna_2017 | irrelevant | 0 | 0 | Methylene blue is used as a tracer dye in a mechanical "patient" simulator (in vitro/physical model) for teaching, not as a drug in a biological species, so it does not report physiological pharmacokinetic parameters. |
| popPK | van_2026 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of hydromethylthionine (methylthioninium), not methylene blue. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 09:50 UTC</sub>
