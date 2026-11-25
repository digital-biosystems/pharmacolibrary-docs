<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05B&quot;,&quot;href&quot;:&quot;atc/D05B.md&quot;},{&quot;label&quot;:&quot;bergapten&quot;}]"></div>

# bergapten

- **generic name:** bergapten
- **ATC codes:** `D05BA03`
- **DrugBank:** [DB12216](https://go.drugbank.com/drugs/DB12216) · **PubChem:** [CID 2355](https://pubchem.ncbi.nlm.nih.gov/compound/2355)
- **molar mass:** 216.192 g/mol (C12H8O4) — DrugBank
- **groups:** investigational

## About

Bergapten is a furanocoumarin chemical compound classified as an antipsoriatic drug for systemic use. The drug is currently classified as investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q414779](https://www.wikidata.org/wiki/Q414779), [Wikipedia](https://en.wikipedia.org/wiki/Bergapten?oldid=1329243983) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-23 18:41 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,775/181 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 44 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Caboni_2015.pdf` | Caboni P et al., Nematicidal activity of furanocoumarins…, Pest management science (2015) | pd | 4 | [10.1002/ps.3890](https://doi.org/10.1002/ps.3890) | [25157855](https://www.ncbi.nlm.nih.gov/pubmed/25157855) | metadata signals extractable PD data (EC50) |
| `Bendriss_1996.pdf` | Bendriss EK et al., Inhibition of caffeine metabolism by 5-…, British journal of clinical… (1996) | pgx | 7 | [10.1046/j.1365-2125.1996.33311.x](https://doi.org/10.1046/j.1365-2125.1996.33311.x) | [8735685](https://www.ncbi.nlm.nih.gov/pubmed/8735685) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Harapu_2010.pdf` | Harapu CD et al., [Flavonoids--bioactive compounds in fru…, Revista medico-chirurgicala… (2010) | pgx | 7 |  | [21500482](https://www.ncbi.nlm.nih.gov/pubmed/21500482) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ho_2000.pdf` | Ho PC et al., Content of CYP3A4 inhibitors, naringin,…, Pharmaceutica acta Helvetiae (2000) | pgx | 7 | [10.1016/s0031-6865(99)00062-x](https://doi.org/10.1016/s0031-6865(99)00062-x) | [10812937](https://www.ncbi.nlm.nih.gov/pubmed/10812937) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Malhotra_2001.pdf` | Malhotra S et al., Seville orange juice-felodipine interac…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.113185](https://doi.org/10.1067/mcp.2001.113185) | [11180034](https://www.ncbi.nlm.nih.gov/pubmed/11180034) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-23 18:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alehaideb_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of caffeine (as a probe for CYP1A2 activity) in the presence of furanocoumarins, but does not report pharmacokinetic parameters (CL, V, etc.) for bergapten itself. |
| PGx | Alehaideb_2021 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship for CYP1A2 inhibition by furanocoumarins to determine benchmark doses, but it does not report any effects of genetic variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Alehaideb_2021_2 | not_relevant | 0 | 0 | The study examines furanocoumarin inhibition of caffeine metabolism but does not report gene variant, genotype, or phenotype effects on any bergapten PK or PD parameter. |
| popPK | Bendriss_1996 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PGx | Bendriss_1996 | not_relevant | 2 | 0 | The study focuses on 5-methoxypsoralen, not bergapten, and reports an inhibition of caffeine metabolism without analyzing genetic variants. |
| popPK | Bode_2005 | irrelevant | 0 | 0 | The paper investigates the phototoxicity mechanisms of psoralen derivatives in vitro and does not report pharmacokinetic parameters for bergapten. |
| PGx | Bode_2005 | not_relevant | 0 | 0 | The paper studies the phototoxicity mechanism of psoralen derivatives and does not involve bergapten or any pharmacogenomic analysis. |
| popPK | Caboni_2015 | irrelevant | 0 | 0 | The study investigates nematicidal activity and chemical characterization in plants and nematodes, with no pharmacokinetic parameters reported. |
| PGx | Caboni_2015 | not_relevant | 0 | 0 | The paper investigates the nematicidal activity of furanocoumarins (including bergapten) from parsley against plant nematodes and does not report any pharmacogenomic effects on human or animal PK/PD parameters. |
| popPK | Chlouchi_2007 | irrelevant | 0 | 0 | The study evaluates UGT induction in hepatocytes (in vitro mechanism) and does not report pharmacokinetic parameters for bergapten. |
| PGx | Chlouchi_2007 | not_relevant | 0 | 0 | The paper investigates the induction of UGT enzymes by bergapten and other compounds, which is a pharmacodynamic effect of bergapten itself, not a pharmacogenomic effect of a variant on bergapten's pharmacokinetics. |
| popPK | Fujita_2008 | irrelevant | 0 | 0 | The paper is an in-vitro study of CYP enzyme inhibition by citrus extracts, not a pharmacokinetic study of bergapten. |
| PGx | Fujita_2008 | not_relevant | 0 | 0 | The paper investigates the effect of citrus extracts on CYP activity in vitro and does not report pharmacogenomic effects (gene variants) on the PK/PD of bergapten. |
| popPK | Goto_2010 | irrelevant | 0 | 0 | The study investigates the in-vitro metabolism of 5-methoxypsoralen (5-MOP) using recombinant enzymes, not the pharmacokinetics of bergapten. |
| PGx | Goto_2010 | not_relevant | 0 | 0 | The study investigates the metabolism of 5-methoxypsoralen, not bergapten. |
| popPK | Harapu_2010 | irrelevant | 0 | 0 | This is a food chemistry study measuring flavonoid concentrations in fruit juices, not a pharmacokinetic study of bergapten. |
| PGx | Harapu_2010 | not_relevant | 0 | 0 | The paper analyzes flavonoid and furanocoumarin content in fruit juices but does not report pharmacogenomic effects of gene variants on the PK/PD of bergapten or other drugs. |
| popPK | Ho_2000 | irrelevant | 0 | 0 | The paper reports bergapten concentrations in grapefruit juice, not pharmacokinetic parameters in biological subjects. |
| PGx | Ho_2000 | not_relevant | 0 | 0 | The paper analyzes the chemical content of bergapten in grapefruit juices and mentions potential drug interactions but does not report a pharmacogenomic effect on bergapten's own PK or PD parameters. |
| popPK | Ho_2001 | irrelevant | 0 | 0 | This is an in-vitro enzyme inhibition study, not a pharmacokinetic study, and no disposition parameters are reported. |
| PGx | Ho_2001 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of CYP3A4 by bergapten but does not investigate the effect of genetic variants (pharmacogenomics) on bergapten's pharmacokinetics or pharmacodynamics. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study focuses on the chemopreventive effects of phytochemicals on PhIP-induced DNA adducts and enzyme activities, with no report of bergapten pharmacokinetic parameters. |
| PGx | Kim_2016 | not_relevant | 0 | 0 | The paper studies the effect of phytochemicals on PhIP metabolism, not the effect of genetic variants on bergapten pharmacokinetics or pharmacodynamics. |
| PGx | Kim_2016_2 | not_relevant | 0 | 0 | The study reports no gene variant, genotype, or phenotype effect on bergapten PK or PD; bergapten was only quantified in plant extracts and was not tested for effects. |
| popPK | Ma_1994 | irrelevant | 0 | 0 | The paper describes in vitro enzymatic mechanisms (CYP450) in butterfly larvae, not a pharmacokinetic study with quantitative disposition parameters. |
| PGx | Ma_1994 | not_relevant | 0 | 0 | The study investigates insect metabolism of plant compounds (bergapten) and is not a pharmacogenomic study of a human drug candidate. |
| popPK | Ma_2012 | irrelevant | 1 | 0 | The abstract only states that a two-compartment model was formed but does not report any quantitative PK parameter values (e.g., clearance, volume, half-life, ka). |
| PGx | Ma_2012 | not_relevant | 0 | 0 | The paper describes a standard pharmacokinetic study in rats using LC-MS/MS and does not investigate any gene variants or pharmacogenomic effects. |
| popPK | Malhotra_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of felodipine and the effect of furocoumarins (including bergapten) as enzyme inhibitors, not the PK of bergapten itself. |
| PGx | Malhotra_2001 | not_relevant | 0 | 0 | The paper reports a food-drug interaction (orange juice inhibiting CYP3A4) affecting felodipine PK, not a pharmacogenomic effect (gene variant) on bergapten's PK or PD. |
| popPK | Mao_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of CYP6AB3 activity in caterpillar Sf9 cells, not a pharmacokinetic study reporting disposition parameters for bergapten. |
| PGx | Mao_2006 | not_relevant | 0 | 0 | The paper investigates insect enzymology (CYP6AB3) and substrate specificity, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of bergapten as a drug. |
| popPK | Messer_2012 | irrelevant | 0 | 0 | The study focuses on in-vitro phototoxicity, mutagenicity, and CYP3A4 inhibition of furocoumarins, not pharmacokinetic parameters. |
| PGx | Messer_2012 | not_relevant | 0 | 0 | The paper reports the phototoxicity and CYP3A4 inhibition properties of furocoumarins but does not examine any gene variant or genotype associated with changes in a PK/PD parameter. |
| popPK | Ohnishi_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-gp and CYP3A4 inhibition by grapefruit juice components, not a pharmacokinetic study reporting disposition parameters for bergapten. |
| PGx | Ohnishi_2000 | not_relevant | 0 | 0 | The paper investigates the chemical mechanism of drug-drug interactions (grapefruit juice components inhibiting CYP3A4/P-gp on vinblastine) in cell models, not the effect of human genetic variants on bergapten's PK/PD. |
| popPK | Papagiannidou_2014 | irrelevant | 0 | 0 | The study investigates in vitro drug interactions with melatonin and does not report pharmacokinetic parameters for bergapten. |
| PGx | Papagiannidou_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (specifically CYP1A2 inhibition) affecting melatonin metabolism and does not mention bergapten or any genetic variants (pharmacogenomics). |
| popPK | Peterson_2006 | irrelevant | 0 | 0 | The study is an in vitro investigation of enzyme inhibition (CYP1A2) and mutagenicity, not a pharmacokinetic study, and does not report PK parameters for bergapten. |
| PGx | Peterson_2006 | not_relevant | 0 | 0 | The paper studies the inhibition of CYP1A2 by various phytochemicals (including 5-MOP/bergapten) in yeast, but does not report the effect of a human gene variant/genotype on the pharmacokinetic or pharmacodynamic parameters of bergapten. |
| popPK | Stohs_2014 | irrelevant | 0 | 0 | The study analyzes the chemical composition of bitter orange extracts via LC-MS to determine furanocoumarin content, but does not perform any pharmacokinetic study or report disposition parameters (CL, V, t1/2) for bergapten. |
| PGx | Stohs_2014 | not_relevant | 0 | 0 | The study analyzes the chemical composition of bitter orange extracts and does not report any pharmacogenomic effects or changes in PK/PD parameters linked to gene variants. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The study reports bergapten-mediated changes in tofacitinib pharmacokinetics, but no gene variant, genotype, or phenotype effect on bergapten’s PK or PD. |
| popPK | Wrześniok_2017 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay focusing on cell viability and does not report any pharmacokinetic parameters for bergapten (or any other drug). |
| PGx | Wrześniok_2017 | not_relevant | 0 | 0 | The paper studies psoralens (5-MOP/8-MOP) and does not mention bergapten or any genetic variants influencing PK/PD. |
| popPK | Xia_2026 | relevant | 5 | 0 | The study performs PK-PD modeling on bergapten in rats, but the evidence text describes the findings qualitatively without listing any specific numeric PK parameter values (CL, V, ka, etc.). |
| PGx | Xia_2026 | not_relevant | 0 | 0 | The study investigates PK-PD modeling and metabolomics in a rat model but does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of bergapten. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | Reports bergapten’s effect on macitentan metabolism and pharmacokinetics, not a gene variant/genotype/phenotype effect on bergapten’s PK or PD. |
| popPK | Yamaguchi_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and in vitro enzymology study focusing on the synthesis of furanocoumarin derivatives and their mechanism-based inhibition of CYP3A4, containing no pharmacokinetic data for bergapten. |
| PGx | Yamaguchi_2017 | not_relevant | 0 | 0 | The paper focuses on the synthesis of furanocoumarin derivatives and their in vitro inhibition of CYP3A4, reporting no pharmacogenomic effects on bergapten's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yao_2026 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic inhibition and analytical method validation study, not a pharmacokinetic study reporting disposition parameters for bergapten. |
| PGx | Yao_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition and LC-MS/MS method validation for a herbal extract, not a pharmacogenomic effect of a gene variant on bergapten PK/PD. |
| popPK | Zaidi_2007 | irrelevant | 0 | 0 | The study is an in-vitro enzyme kinetics investigation of 5-methoxypsoralen (a fennel constituent) and does not report pharmacokinetic parameters for bergapten. |
| PGx | Zaidi_2007 | not_relevant | 0 | 0 | The paper focuses on the mechanism-based inactivation of CYP3A4 by 5-methoxypsoralen (a fennel constituent) and does not involve bergapten or any genetic variants affecting PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbergapten%5D&body=Drug%3A%20bergapten%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bergapten/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
