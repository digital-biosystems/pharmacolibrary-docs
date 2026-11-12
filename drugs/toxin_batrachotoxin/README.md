<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Batrachotoxin&quot;}]"></div>

# Batrachotoxin

- **generic name:** Batrachotoxin
- **T3DB:** [T3D2527](http://www.t3db.ca/toxins/T3D2527) · **PubChem:** [CID 31958](https://pubchem.ncbi.nlm.nih.gov/compound/31958)

## About

Batrachotoxins (BTX) are extremely potent cardiotoxic and neurotoxic steroidal alkaloids found in poison dart frogs (genus Dendrobates and Phyllobates), Melyridae beetles, and certain birds (genus Pitohui and Ifrita). They act directly on sodium channels.. It is the most potent non-peptidal neurotoxin known.

- **Category:** Animal Toxin, Natural Toxin
- **Route of exposure:** injestion or inhalation (smoking). L1810
- **Sources and uses:** Batrachotoxins are found in poison dart frogs (genus Dendrobates and Phyllobates), Melyridae beetles, and certain birds (genus Pitohui and Ifrita).
- **Mechanism of toxicity:** Batrachotoxins act on sodium channels by modifying both their ion selectivity and voltage sensitivity. By increasing the permeability of the cell membrane, the cell is depolarized by the influx of sodium. …
- **Health effects:** Batrachotoxins affect the peripheral nervous system and heart muscles.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2527">T3DB T3D2527</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 23509-16-2</small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Weigele_1982_22Na_influx](drugs/toxin_batrachotoxin/pd_Weigele_1982_22Na_influx.md) | 22Na+ influx ← batrachotoxin · direct sigmoid Emax (Hill) effect | — | Weigele JB et al., Functional reconstitution of the purifi…, Proceedings of the National… (1982) | [10.1073/pnas.79.11.3651](https://doi.org/10.1073/pnas.79.11.3651) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 21:52 | 16:52 | 0/0/0 | 0/1/0 | 0/0/0 | 378,575/9,782 | einfracz / qwen3.8-27b | 13 | 2/11 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 92 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wartenberg_1994.pdf` | Wartenberg HC et al., Molecular actions of pentobarbitone on…, British journal of anaesthe… (1994) | pd | 4 | [10.1093/bja/72.6.668](https://doi.org/10.1093/bja/72.6.668) | [8024914](https://www.ncbi.nlm.nih.gov/pubmed/8024914) | metadata signals extractable PD data (IC50) |
| `Weigele_1982.pdf` | Weigele JB et al., Functional reconstitution of the purifi…, Proceedings of the National… (1982) | pd | 4 | [10.1073/pnas.79.11.3651](https://doi.org/10.1073/pnas.79.11.3651) | [6285356](https://www.ncbi.nlm.nih.gov/pubmed/6285356) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-11-09 21:50 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | AlBilasi_2025 | irrelevant | 0 | 0 | The paper studies Botulinum Toxin A (a different substance), not batrachotoxin, and reports clinical outcome metrics rather than toxicokinetic parameters. |
| popPK | Alhejaili_2024 | irrelevant | 0 | 0 | The paper is a review of Botulinum Toxin Type A for strabismus, not Batrachotoxin. |
| popPK | Arnich_2021 | irrelevant | 0 | 0 | The paper discusses Brevetoxins (BTXs), which are distinct marine toxins from Batrachotoxin (the target substance), and contains no kinetic parameters for Batrachotoxin. |
| popPK | Bae_2025 | irrelevant | 0 | 0 | The paper investigates PRMT1 and neuromuscular junction health, and the abbreviation 'BTX' refers to alpha-bungarotoxin, not batrachotoxin; no kinetic parameters for batrachotoxin are present. |
| popPK | Bag_2025 | irrelevant | 0 | 0 | The paper identifies batrachotoxin as a toxin produced by bacteria for insecticidal purposes but reports no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for the substance. |
| popPK | Ball_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for the drug BTX A51 (a kinase inhibitor), not the toxin batrachotoxin, despite the similar abbreviation. |
| popPK | Barbe_2023 | irrelevant | 0 | 0 | The paper studies brevetoxin-3, not batrachotoxin, and reports no kinetic parameters for the target substance. |
| popPK | Brown_1985 | irrelevant | 0 | 0 | The paper reports on the synthesis of a fluorescent ligand and its binding affinity (Kd) and toxicity (LD50), but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution). |
| popPK | Carlin_1977 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of xenon and iodoantipyrine, not batrachotoxin. |
| popPK | De_2012 | irrelevant | 0 | 0 | The paper focuses on biomarkers for BTEX and MTBE in petrol station workers and does not mention or study batrachotoxin. |
| popPK | Dessy_2011 | irrelevant | 0 | 0 | The paper is a review of botulinum toxin pharmacokinetics and safety for glabellar lines, containing no data on batrachotoxin. |
| popPK | El_2018 | irrelevant | 0 | 0 | The paper studies Botulinum Toxin A, not Batrachotoxin, and focuses on delivery efficacy rather than toxicokinetic parameters. |
| popPK | Eseigbe_2013 | irrelevant | 0 | 0 | The paper studies the effects of benzene, toluene, and xylene (BTX) on earthworms, and does not report any kinetic parameters for batrachotoxin. |
| popPK | Forman_1981 | irrelevant | 0 | 0 | The paper investigates the mechanism of action (inhibition of axonal transport via Na+ channels) in neuroblastoma cells, but reports no quantitative toxicokinetic parameters such as half-life, clearance, or distribution volume. |
| popPK | Franceschini_2002 | irrelevant | 0 | 0 | The paper studies nicotine in mice and does not report any toxicokinetic parameters for batrachotoxin. |
| popPK | Freschi_1986 | irrelevant | 1 | 0 | This is a mechanistic radiobiology study using batrachotoxin as a tool to manipulate sodium channel conformation in cell culture, reporting no quantitative toxicokinetic parameters (e.g., clearance, half-life, uptake rates) for the substance's disposition. |
| popPK | Fuhrman_1969 | irrelevant | 0 | 0 | The paper describes a different toxin (atelopidtoxin) and mentions batrachotoxin only as a comparator for toxicity, providing no kinetic parameters for batrachotoxin. |
| popPK | Gierak_2006 | irrelevant | 0 | 0 | The paper describes the preparation of carbon fibers for SPME and reports partition coefficients for volatile organic compounds (benzene, toluene, xylenes, etc.), not toxicokinetic parameters for batrachotoxin. |
| popPK | Giuliano_2025 | irrelevant | 0 | 0 | The paper studies botulinum toxin A (BTX/A), not batrachotoxin, and reports clinical efficacy outcomes rather than toxicokinetic parameters. |
| popPK | González-Montelongo_2016 | irrelevant | 0 | 0 | The paper studies the trafficking kinetics of the epithelial sodium channel (ENaC) using frog oocytes, and "batrachotoxin" is not the subject substance but likely refers to bungarotoxin or is unrelated to toxicokinetic parameters of the toxin. |
| popPK | Guo_2015 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics of botulinum toxin A in rats, not the toxicokinetics of batrachotoxin. |
| popPK | Hung_2009 | irrelevant | 0 | 0 | The paper studies beta-amyloid peptide and autophagy in neuronal cells, and while alpha-bungarotoxin is mentioned as an antagonist, it does not report any toxicokinetic parameters for batrachotoxin. |
| popPK | Hung_2015 | irrelevant | 0 | 0 | The paper investigates autophagy and alpha-amyloid toxicity; the toxin mentioned is alpha-bungarotoxin, not batrachotoxin, and there are no toxicokinetic parameters for batrachotoxin. |
| popPK | Jariyakosol_2021 | irrelevant | 0 | 0 | The paper investigates dry eye symptoms in patients treated with Botulinum Toxin A (BTX-A), not batrachotoxin. |
| PGx | Jung_2014 | not_relevant | 0 | 0 | The study reports the effects of HCV treatment on lipid metabolism and insulin resistance, not a pharmacogenomic effect on the PK/PD parameters of batrachotoxin. |
| popPK | Khattab_2021 | irrelevant | 0 | 0 | The paper investigates the therapeutic efficacy of Botulinum toxin A for psoriasis and contains no data on batrachotoxin. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper discusses botulinum toxin, not batrachotoxin. |
| popPK | Kopta_1994 | irrelevant | 0 | 0 | The paper studies nicotinic acetylcholine receptors and uses alpha-bungarotoxin (BTX) as a tool ligand, not batrachotoxin, and contains no kinetic parameters for batrachotoxin. |
| popPK | Kuca_2026 | irrelevant | 0 | 0 | The paper is a review focusing on chemical security and detection of natural toxins, providing no quantitative toxicokinetic parameters (half-lives, clearance, etc.) for batrachotoxin. |
| popPK | Land_1977 | irrelevant | 0 | 0 | The paper investigates alpha-bungarotoxin binding sites and acetylcholine sensitivity in myotubes, not the toxicokinetic parameters of batrachotoxin. |
| popPK | Leighfield_2013 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of brevetoxin metabolites, not batrachotoxin. |
| popPK | Leighfield_2014 | irrelevant | 0 | 0 | The paper studies brevetoxins (BTX), not batrachotoxin, and reports no kinetic parameters for the target substance. |
| popPK | Levy_2006 | irrelevant | 0 | 0 | The paper studies botulinum toxin A (BTX-A), not batrachotoxin, and reports clinical cosmetic outcomes rather than toxicokinetic parameters. |
| popPK | Mandelzys_1995 | irrelevant | 0 | 0 | The paper investigates nicotinic acetylcholine receptor pharmacology using alpha-bungarotoxin, not batrachotoxin, and contains no kinetic data for the target substance. |
| popPK | Marks_1986 | irrelevant | 0 | 0 | The study investigates nicotine tolerance and receptor changes in mice, using alpha-bungarotoxin (BTX) only as a receptor ligand, with no kinetic data for batrachotoxin. |
| popPK | Matthews-Bellinger_1978 | irrelevant | 0 | 0 | The paper studies the distribution of acetylcholine receptors using alpha-bungarotoxin as a labeling tool, and contains no toxicokinetic data for batrachotoxin. |
| popPK | Mullin_1985 | irrelevant | 0 | 0 | The study measures the effect of ethanol on sodium channel function in synaptosomes, not the toxicokinetic parameters (clearance, half-life, etc.) of batrachotoxin itself. |
| popPK | Nascimento_2020 | irrelevant | 0 | 0 | The paper studies benzene, toluene, and xylenes (BTX), not batrachotoxin. |
| popPK | Polak_2002 | irrelevant | 0 | 0 | The study investigates botulinum toxin A, not batrachotoxin, and reports no kinetic parameters for batrachotoxin. |
| popPK | Protti-Sánchez_2019 | irrelevant | 0 | 0 | The paper reports qualitative toxicity symptoms and chemical profiling (identification) of batrachotoxin, but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for the substance. |
| PGx | Radwan_2006 | not_relevant | 0 | 0 | The paper investigates the in vitro metabolism of brevetoxin (PbTx-2), not batrachotoxin, and reports no pharmacogenomic effects on PK/PD parameters. |
| popPK | Raphael_2020 | irrelevant | 0 | 0 | The paper studies the effect of botulinum toxin (Btx) on bone density in humans, not batrachotoxin, and contains no toxicokinetic parameters for the target substance. |
| popPK | Rekhadevi_2010 | irrelevant | 0 | 0 | The paper investigates genotoxicity in humans exposed to petroleum hydrocarbons (BTX) and contains no data or parameters for batrachotoxin. |
| popPK | Saal_2023 | irrelevant | 0 | 0 | The paper studies onabotulinumtoxin A, a different substance, and reports clinical efficacy data rather than toxicokinetic parameters for batrachotoxin. |
| PGx | Servelhere_2018 | not_relevant | 0 | 0 | The study evaluates Botulinum toxin type A in hereditary spastic paraplegia patients, not the pharmacogenomics of batrachotoxin, and does not report gene variant effects on batrachotoxin PK/PD. |
| PGx | Soto_2026 | not_relevant | 0 | 0 | The paper studies the effects of marine toxins on liver enzymes and does not investigate pharmacogenomic effects (gene variants/genotypes) on the PK or PD of batrachotoxin. |
| PGx | Tadesse_2025 | not_relevant | 0 | 0 | The paper discusses BTX (Benzene, Toluene, Xylene) as industrial solvents and their epidemiological link to bladder cancer, not the neurotoxin batrachotoxin. |
| popPK | Verma_2021 | irrelevant | 0 | 0 | The paper studies the toxicokinetics and pharmacodynamics of LL-00066471 (an alpha7 nAChR PAM), not batrachotoxin, and contains no kinetic parameters for the target substance. |
| popPK | Wang_1988 | irrelevant | 0 | 0 | The paper reports biophysical channel kinetics (blocker binding/dissociation) in an in vitro bilayer system, not toxicokinetic parameters (half-life, clearance, distribution) for the disposition of batrachotoxin in an organism. |
| popPK | Wang_1994 | irrelevant | 0 | 0 | The paper studies the mechanism of benzocaine binding to batrachotoxin-modified sodium channels, using BTX solely as a modifier/reagent, and does not report any toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for batrachotoxin itself. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The paper studies botulinum toxin type A (BTX-A), a different substance from batrachotoxin, and reports dose-response/outcome data rather than toxicokinetic parameters. |
| popPK | Wartenberg_1994 | irrelevant | 0 | 0 | Batrachotoxin is used solely as a reagent to activate sodium channels while studying pentobarbitone, and no toxicokinetic parameters are reported. |
| popPK | Weigele_1982 | relevant | 2 | 5 | Reports in vitro pharmacological parameters (K0.5, ion flux stimulation) for batrachotoxin binding to reconstituted rat sodium channels, which reflects mechanism/affinity rather than systemic toxicokinetic disposition (half-life, clearance, partitioning). |
| popPK | Wong_2013 | irrelevant | 0 | 0 | The paper studies brevetoxins (BTX-B), not batrachotoxin, which is a distinct neurotoxin. |
| popPK | Xie_2024 | irrelevant | 0 | 0 | The paper studies occupational exposure to benzene, toluene, and xylene and bladder cancer risk, with no mention of batrachotoxin or its toxicokinetic parameters. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper focuses on BTX (benzene, toluene, xylenes) and does not involve batrachotoxin. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper focuses on the hematological effects of benzene, toluene, and xylenes (BTX), and contains no data or parameters for batrachotoxin. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | The paper concerns brevetoxin (BTX) group toxins, not batrachotoxin. |
| popPK | Łuczak_2013 | irrelevant | 0 | 0 | The paper investigates the solubilization of benzene, toluene, and xylene in ionic liquid micelles and does not contain any data regarding batrachotoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbatrachotoxin%5D&body=Drug%3A%20batrachotoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_batrachotoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
