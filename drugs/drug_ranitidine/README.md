<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;ranitidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ranitidine_Hawwa2013_reference&quot;,&quot;label&quot;:&quot;Hawwa_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranitidine/Ranitidine_Hawwa2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ranitidine

- **generic name:** ranitidine
- **ATC codes:** `A02BA02`, `A02BA07`
- **DrugBank:** [DB00863](https://go.drugbank.com/drugs/DB00863) · **PubChem:** [CID 3001055](https://pubchem.ncbi.nlm.nih.gov/compound/3001055)
- **molar mass:** 314.4 g/mol (C13H22N4O3S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Ranitidine is an H2-receptor antagonist that was used to treat acid-related stomach problems such as peptic ulcers, gastritis, heartburn and reflux disease. It has been withdrawn from many markets after the drug was found to contain an impurity that may cause cancer, so it is no longer generally available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423037](https://www.wikidata.org/wiki/Q423037) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ranitidine | parent | 314.4 | C13H22N4O3S | DrugBank | [3001055](https://pubchem.ncbi.nlm.nih.gov/compound/3001055) | Hawwa_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 11:32 | 4:33 | 1/0/0 | 1/0/0 | 0/0/2 | 78,214/8,690 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.231). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Hawwa_2013_reference](drugs/drug_ranitidine/Ranitidine_Hawwa2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Hawwa AF et al., Prophylactic ranitidine treatment in cr…, British journal of clinical… (2013) | [10.1111/j.1365-2125.2012.04473.x](https://doi.org/10.1111/j.1365-2125.2012.04473.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Koch_1997_pH](drugs/drug_ranitidine/pd_Koch_1997_pH.md) | gastric pH ← ranitidine · direct sigmoid Emax (Hill) effect | — | Koch KM et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1997) | [10.1007/s002280050279](https://doi.org/10.1007/s002280050279) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | **SLC22A1** | `Q349` · kuptake | transport | [Meyer_2017](drugs/drug_ranitidine/pgx_Meyer_2017_SLC22A1_Q349.md) | Meyer MJ et al., Effects of genetic polymorphisms on the…, PloS one (2017) | [10.1371/journal.pone.0189521](https://doi.org/10.1371/journal.pone.0189521) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | **SLC22A2** | `Q349` · kuptake | transport | [Meyer_2017](drugs/drug_ranitidine/pgx_Meyer_2017_SLC22A2_Q349.md) | Meyer MJ et al., Effects of genetic polymorphisms on the…, PloS one (2017) | [10.1371/journal.pone.0189521](https://doi.org/10.1371/journal.pone.0189521) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ranitidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2D6` inhibitor, `CYP3A4` inhibitor, `SLC22A1` inhibitor/substrate/transport | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` substrate/transport, `SLC22A8` substrate | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 140 matched, 60 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_19 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hawwa_2013.pdf` | Hawwa AF et al., Prophylactic ranitidine treatment in cr…, British journal of clinical… (2013) | popPK | 10 | [10.1111/j.1365-2125.2012.04473.x](https://doi.org/10.1111/j.1365-2125.2012.04473.x) | [23016949](https://pubmed.ncbi.nlm.nih.gov/23016949) | The paper reports a population pharmacokinetic study of ranitidine in critically ill children with explicit numeric values for clearance, volume of distribution, absorption rate, and bioavailability in the abstract. |
| `Castañeda-Hernández_1996.pdf` | Castañeda-Hernández G et al., Pharmacokinetics of oral ranitidine in…, Archives of medical research (1996) | popPK | 9 | not captured | [8854394](https://pubmed.ncbi.nlm.nih.gov/8854394) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, t1/2, AUC) for ranitidine in humans. |
| `Koch_1997.pdf` | Koch KM et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1997) | popPK | 9 | [10.1007/s002280050279](https://doi.org/10.1007/s002280050279) | [9218931](https://pubmed.ncbi.nlm.nih.gov/9218931) | The study reports a two-compartment PK model and qualitative changes in clearance and volume for ranitidine in humans, but specific numeric parameter values are not present in the provided abstract text. |
| `Schaiquevich_2002.pdf` | Schaiquevich P et al., Comparison of two compartmental models…, Pharmacological research (2002) | popPK | 8 | [10.1006/phrs.2002.0954](https://doi.org/10.1006/phrs.2002.0954) | [12123628](https://pubmed.ncbi.nlm.nih.gov/12123628) | The paper describes compartmental PK modeling of ranitidine in humans and rats, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| `Dolton_2012.pdf` | Dolton MJ et al., Multicenter study of posaconazole thera…, Antimicrobial agents and ch… (2012) | pd | 5 | [10.1128/AAC.00802-12](https://doi.org/10.1128/AAC.00802-12) | [22890761](https://www.ncbi.nlm.nih.gov/pubmed/22890761) | metadata signals extractable PD data (exposure-response) |
| `Mathôt_1999.pdf` | Mathôt RA et al., Pharmacodynamic modeling of the acid in…, Clinical pharmacology and t… (1999) | pd | 5 | [10.1053/cp.1999.v66.99988](https://doi.org/10.1053/cp.1999.v66.99988) | [10460068](https://www.ncbi.nlm.nih.gov/pubmed/10460068) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Mishra_1994.pdf` | Mishra Y et al., In-vitro interaction between H2 antagon…, The Journal of pharmacy and… (1994) | pd | 4 | [10.1111/j.2042-7158.1994.tb03779.x](https://doi.org/10.1111/j.2042-7158.1994.tb03779.x) | [7913133](https://www.ncbi.nlm.nih.gov/pubmed/7913133) | metadata signals extractable PD data (EC50) |
| `Schepp_1996.pdf` | Schepp W et al., Oxyntomodulin: a cAMP-dependent stimulu…, Digestion (1996) | pd | 4 | [10.1159/000201367](https://doi.org/10.1159/000201367) | [8913701](https://www.ncbi.nlm.nih.gov/pubmed/8913701) | metadata signals extractable PD data (EC50) |
| `Shimokawa_1996.pdf` | Shimokawa M et al., Neurotoxic convulsions induced by hista…, Toxicology and applied phar… (1996) | pd | 4 | [10.1006/taap.1996.0038](https://doi.org/10.1006/taap.1996.0038) | [8619239](https://www.ncbi.nlm.nih.gov/pubmed/8619239) | metadata signals extractable PD data (EC50) |
| `Soto_2018.pdf` | Soto J et al., Rats can predict aversiveness of Active…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejpb.2018.09.027](https://doi.org/10.1016/j.ejpb.2018.09.027) | [30267837](https://www.ncbi.nlm.nih.gov/pubmed/30267837) | metadata signals extractable PD data (IC50) |
| `Akazawa_2018.pdf` | Akazawa T et al., Application of Intestinal Epithelial Ce…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.118.083246](https://doi.org/10.1124/dmd.118.083246) | [30135242](https://www.ncbi.nlm.nih.gov/pubmed/30135242) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Johansson_2014.pdf` | Johansson S et al., Pharmacokinetic evaluations of the co-a…, Clinical pharmacokinetics (2014) | pgx | 7 | [10.1007/s40262-014-0161-2](https://doi.org/10.1007/s40262-014-0161-2) | [25117183](https://www.ncbi.nlm.nih.gov/pubmed/25117183) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kakuda_2011.pdf` | Kakuda TN et al., Pharmacokinetic interactions between et…, Clinical pharmacokinetics (2011) | pgx | 7 | [10.2165/11534740-000000000-00000](https://doi.org/10.2165/11534740-000000000-00000) | [21142266](https://www.ncbi.nlm.nih.gov/pubmed/21142266) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Labbé_1999.pdf` | Labbé L et al., Clinical pharmacokinetics of mexiletine, Clinical pharmacokinetics (1999) | pgx | 7 | [10.2165/00003088-199937050-00002](https://doi.org/10.2165/00003088-199937050-00002) | [10589372](https://www.ncbi.nlm.nih.gov/pubmed/10589372) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Lemahieu_2005.pdf` | Lemahieu WP et al., Impact of gastric acid suppressants on…, Kidney international (2005) | pgx | 7 | [10.1111/j.1523-1755.2005.00182.x](https://doi.org/10.1111/j.1523-1755.2005.00182.x) | [15698457](https://www.ncbi.nlm.nih.gov/pubmed/15698457) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Martínez_1999.pdf` | Martínez C et al., Comparative in vitro and in vivo inhibi…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1016/S0009-9236(99)70129-3](https://doi.org/10.1016/S0009-9236(99)70129-3) | [10223772](https://www.ncbi.nlm.nih.gov/pubmed/10223772) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Parri_2013.pdf` | Parri MS et al., Pantoprazole significantly interferes w…, International journal of ca… (2013) | pgx | 5 | [10.1016/j.ijcard.2012.05.080](https://doi.org/10.1016/j.ijcard.2012.05.080) | [22727972](https://www.ncbi.nlm.nih.gov/pubmed/22727972) | metadata signals extractable PGX data (CYP2C19*2) |

<sub>queue written 2026-10-04T11:29:06.078818+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abebe_2020 | irrelevant | 2 | 0 | Ranitidine is used as a probe inhibitor/co-administered drug to study trospium chloride, and while some PK changes are mentioned, no quantitative disposition parameters (CL, V, ka) for ranitidine itself are reported. |
| popPK | Advenier_1987 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacological investigation of airway relaxation effects, not a pharmacokinetic study, and ranitidine is only a comparator agent. |
| PD | Advenier_1987 | not_relevant | 0 | 0 | The paper reports that ranitidine was completely inactive in the tested preparations, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| PGx | Akazawa_2018 | not_relevant | 0 | 0 | The paper uses ranitidine only as a non-substrate probe to validate a cell model for intestinal absorption and does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Arnold_2019 | not_relevant | 0 | 0 | The study investigates drug transport in porcine intestine using chemical inhibitors (verapamil, clotrimazole) rather than genetic variants, so it does not report a pharmacogenomic effect. |
| popPK | Blouin_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefetamet pivoxil, with ranitidine serving only as a co-administered agent to test for drug interactions, not as the subject drug. |
| PGx | Bouatou_2014 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on voriconazole pharmacokinetics, not ranitidine. |
| popPK | Buck_2003 | irrelevant | 1 | 0 | The paper is a review that mentions ranitidine only as an example of a drug with altered disposition during ECMO, without providing any original quantitative pharmacokinetic parameter values. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of posaconazole, with ranitidine mentioned only as a co-administered drug for interaction assessment. |
| PGx | Chung_2000 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and isozyme contributions to ranitidine metabolism but does not report pharmacogenomic effects (genotype-phenotype associations) on PK or PD parameters in humans. |
| popPK | Dolton_2012 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PD | Dolton_2012 | not_relevant | 0 | 0 | The paper focuses on posaconazole, not ranitidine, and does not report any pharmacodynamic or exposure-response data for ranitidine. |
| PGx | Furtado_2016 | not_relevant | 2 | 5 | The study reports a drug-drug interaction (clopidogrel with ranitidine/omeprazole) and a subgroup analysis based on CYP2C19 genotype, but it does not report a pharmacogenomic effect on the PK or PD parameters of ranitidine itself. |
| PGx | Geus_2000 | not_relevant | 0 | 0 | The paper discusses clinical efficacy and drug interactions of acid-inhibiting drugs but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Gupta_1996 | irrelevant | 0 | 0 | The study focuses on ethanol pharmacodynamics and pharmacokinetics, using ranitidine only as a context for BAC changes rather than measuring ranitidine's own disposition parameters. |
| PGx | Harvey_2016 | not_relevant | 0 | 0 | The study investigates the effect of PPIs on CYP2C19 activity and clopidogrel efficacy, not the effect of a gene variant on the PK/PD of ranitidine. |
| popPK | Ji_2021 | irrelevant | 0 | 0 | Ranitidine is used only as a co-administered acid-reducing agent to assess drug-drug interactions with pemigatinib, not as the subject drug for PK parameter estimation. |
| PGx | Johansson_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between vandetanib and ranitidine, not the effect of a gene variant on ranitidine pharmacokinetics. |
| PGx | Kakuda_2011 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving etravirine and ranitidine, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Koch_1997 | relevant | 9 | 2 | The study reports a two-compartment PK model and qualitative changes in clearance and volume for ranitidine in humans, but specific numeric parameter values are not present in the provided abstract text. |
| PGx | Labbé_1999 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of mexiletine, not ranitidine, and only mentions ranitidine as a drug that does not modify mexiletine's disposition. |
| PGx | Lemahieu_2005 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (gastric acid suppressants affecting tacrolimus/CYP3A4), not the impact of a gene variant on ranitidine's PK/PD. |
| PGx | Lennard_1986 | not_relevant | 0 | 0 | The paper studies the metabolism of metoprolol and the inhibitory effects of ranitidine on it, but does not report a pharmacogenomic effect on the PK/PD of ranitidine itself. |
| popPK | Leucuţa_2004 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for metoclopramide (the subject drug), while ranitidine is only a co-administered agent used to test for interaction. |
| PGx | Mai_2022 | not_relevant | 0 | 0 | The study investigates sex-specific effects of excipients on ranitidine bioavailability in rats, not the effect of a gene variant or genotype. |
| PGx | Martínez_1999 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP inhibition) and does not report any pharmacogenomic effects (gene variants) on ranitidine's PK or PD parameters. |
| popPK | Mathôt_1999 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions with cisapride and does not report pharmacogenomic effects on ranitidine. |
| popPK | Mishra_1994 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Mishra_1994 | not_relevant | 0 | 0 | The paper describes an in-vitro interaction study between H2 antagonists and vecuronium, which does not constitute a pharmacodynamic exposure-response or dose-response analysis for ranitidine in a biological system with extractable PD parameters. |
| PGx | Monsarrat_1997 | not_relevant | 0 | 0 | The paper focuses on the metabolism of taxoids (paclitaxel/docetaxel) and only mentions ranitidine as a non-inhibitor in a drug interaction context, without reporting any pharmacogenomic effects on ranitidine's PK/PD. |
| PGx | Moody_2013 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interactions (inhibition of CYP enzymes by ranitidine) but does not report any pharmacogenomic effects (gene variants) on ranitidine's PK or PD parameters. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper describes a general framework for predicting CYP3A4 drug interactions and does not report any pharmacogenomic effects (gene variants) on the PK/PD of ranitidine. |
| PGx | Parri_2013 | not_relevant | 0 | 0 | The paper investigates the interaction between pantoprazole and clopidogrel, not the pharmacokinetics or pharmacodynamics of ranitidine. |
| PGx | Reddy_2018 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for FMO substrates and does not report specific pharmacogenomic effects (gene variants) on ranitidine PK parameters. |
| PGx | Royer_1996 | not_relevant | 0 | 0 | The paper investigates the metabolism of docetaxel and paclitaxel, and while it mentions ranitidine, it only states that ranitidine had no effect on taxoid metabolism; it does not report a pharmacogenomic effect on ranitidine's PK/PD. |
| PGx | Sajib_2018 | not_relevant | 0 | 0 | The paper is an in silico analysis of SLC22A2 variants affecting metformin transport and potential interactions with ranitidine, but it does not report pharmacokinetic or pharmacodynamic parameters for ranitidine itself. |
| popPK | Schaiquevich_2002 | relevant | 8 | 0 | The paper describes compartmental PK modeling of ranitidine in humans and rats, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| popPK | Schepp_1996 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Schepp_1996 | not_relevant | 0 | 0 | The paper focuses on oxyntomodulin and GLP-1 receptor signaling in rat parietal cells and does not report any pharmacodynamic or exposure-response data for ranitidine. |
| PGx | Schöller-Gyüre_2008 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (etavirine with ranitidine/omeprazole) and excludes CYP2C19 poor metabolizers, rather than reporting a pharmacogenomic effect on ranitidine's PK/PD. |
| popPK | Shimokawa_1996 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | Shimokawa_1996 | not_relevant | 0 | 0 | The paper describes neurotoxic convulsions in mice but does not report a pharmacodynamic exposure-response or dose-response relationship for ranitidine with numeric PD parameters. |
| popPK | Soto_2018 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| PD | Soto_2018 | not_relevant | 0 | 0 | The paper focuses on behavioral aversiveness in rats and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for ranitidine. |
| popPK | Tadić_2008 | irrelevant | 0 | 0 | The study investigates the pharmacological activities of hawthorn extract, using ranitidine only as a reference drug for gastroprotection, and contains no pharmacokinetic parameters for ranitidine. |
| PD | Tadić_2008 | not_relevant | 0 | 0 | The paper studies hawthorn berries extract; ranitidine is only mentioned as a reference drug for gastroprotection, and no PD or exposure-response relationship for ranitidine is reported. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and explicitly states that ranitidine was not found to influence theophylline disposition; it does not report pharmacogenomic effects on ranitidine. |
| PGx | Vernaz_2016 | not_relevant | 0 | 0 | The paper evaluates prescribing practices and costs for clopidogrel and esomeprazole, mentioning ranitidine only as a cost alternative, and does not report pharmacogenomic effects on ranitidine PK/PD. |
| PGx | Xiao_2026 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (SCARs) and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Xu_2017 | not_relevant | 0 | 0 | The paper reports genetic associations with FMO3 protein abundance in liver microsomes, but does not report pharmacokinetic or pharmacodynamic parameters for ranitidine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 11:29 UTC</sub>
