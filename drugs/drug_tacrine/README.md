<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;tacrine&quot;}]"></div>

# tacrine

- **generic name:** tacrine
- **ATC codes:** `N06DA01`
- **DrugBank:** [DB00382](https://go.drugbank.com/drugs/DB00382) · **PubChem:** [CID 1935](https://pubchem.ncbi.nlm.nih.gov/compound/1935)
- **molar mass:** 198.2637 g/mol (C13H14N2) — DrugBank
- **groups:** approved, withdrawn

## About

Tacrine is an acetylcholinesterase inhibitor that was used to treat dementia, particularly early-onset Alzheimer's disease. It was approved but has since been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421076](https://www.wikidata.org/wiki/Q421076) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 13:50 | 2:50 | 0/1/0 | 2/1/0 | 0/0/4 | 65,078/15,065 | einfracz / qwen3.8-27b | 21 | 9/12 | 21/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hartvig_1990_reference](drugs/drug_tacrine/Tacrine_Hartvig1990_reference.md) | — | 1-compartment (no model) | 0 | Hartvig P et al., Clinical pharmacokinetics of intravenou…, European journal of clinica… (1990) | [10.1007/BF00315027](https://doi.org/10.1007/BF00315027) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> | [Cook_2016_ADAS_Cog](drugs/drug_tacrine/pd_Cook_2016_ADAS_Cog.md) | Alzheimer's Disease Assessment Scale-Cognitive Subscale ← tacrine · disease-progression model | — | Cook SF et al., Disease Progression Modeling: Key Conce…, Current pharmacology reports (2016) | [10.1007/s40495-016-0066-x](https://doi.org/10.1007/s40495-016-0066-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Holford_1992_ADASC](drugs/drug_tacrine/pd_Holford_1992_ADASC.md) | cognitive component of the Alzheimer disease assessment scale ← tacrine · disease-progression model | — | Holford NH et al., Results and validation of a population…, Proceedings of the National… (1992) | [10.1073/pnas.89.23.11471](https://doi.org/10.1073/pnas.89.23.11471) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Luo_2004_I5_HT](drugs/drug_tacrine/pd_Luo_2004_I5_HT.md) | I5-HT ← bis(7)-tacrine · inhibition effect | — | Luo JL et al., Inhibition by bis(7)-tacrine of 5-HT-ac…, Neuroreport (2004) | [10.1097/01.wnr.0000127075.51445.3e](https://doi.org/10.1097/01.wnr.0000127075.51445.3e) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **ACE** | `Q322` · IC50 | target | [Zhou_2021](drugs/drug_tacrine/pgx_Zhou_2021_ACE_Q322.md) | Zhou Y et al., Rare genetic variability in human drug…, Science advances (2021) | [10.1126/sciadv.abi6856](https://doi.org/10.1126/sciadv.abi6856) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **BCHE** | `Q322` · IC50 | target | [Zhou_2021](drugs/drug_tacrine/pgx_Zhou_2021_BCHE_Q322.md) | Zhou Y et al., Rare genetic variability in human drug…, Science advances (2021) | [10.1126/sciadv.abi6856](https://doi.org/10.1126/sciadv.abi6856) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **ITGAL** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhou_2021](drugs/drug_tacrine/pgx_Zhou_2021_ITGAL_Q100.md) | Zhou Y et al., Rare genetic variability in human drug…, Science advances (2021) | [10.1126/sciadv.abi6856](https://doi.org/10.1126/sciadv.abi6856) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **TUBB1** | `Q321` · EC50 | target | [Zhou_2021](drugs/drug_tacrine/pgx_Zhou_2021_TUBB1_Q321.md) | Zhou Y et al., Rare genetic variability in human drug…, Science advances (2021) | [10.1126/sciadv.abi6856](https://doi.org/10.1126/sciadv.abi6856) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tacrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor/target | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor/target, `CES1` unknown, `CYP1A2` substrate | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (target), ITGAL (target), TUBB1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 626 matched, 153 returned
- **screened:** 8  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hartvig_1990.pdf` | Hartvig P et al., Clinical pharmacokinetics of intravenou…, European journal of clinica… (1990) | popPK | 10 | [10.1007/BF00315027](https://doi.org/10.1007/BF00315027) | [2340845](https://pubmed.ncbi.nlm.nih.gov/2340845) | Human PK study of tacrine with numeric CL, V, half-lives, and bioavailability reported directly in the abstract. |
| `Patel_2016.pdf` | Patel N et al., Transdermal iontophoretic delivery of t…, International journal of ph… (2016) | popPK | 7 | [10.1016/j.ijpharm.2016.09.038](https://doi.org/10.1016/j.ijpharm.2016.09.038) | [27633278](https://pubmed.ncbi.nlm.nih.gov/27633278) | Tacrine plasma profiles in SD rats were fitted to a one-compartment model with absorption rates, but no numeric parameter values appear in the provided evidence (likely in figures/tables not included). |
| `Setya_2019.pdf` | Setya S et al., Design and Development of Novel Transde…, Current drug delivery (2019) | popPK | 6 | [10.2174/1567201816666191022105036](https://doi.org/10.2174/1567201816666191022105036) | [31642410](https://pubmed.ncbi.nlm.nih.gov/31642410) | PK study of tacrine in rats with bioavailability comparisons, but numeric disposition parameters (CL, V, t½) are not shown in the abstract evidence. |
| `Iga_2015.pdf` | Iga K, Use of three-compartment physiologicall…, Journal of pharmaceutical s… (2015) | popPK | 5 | [10.1002/jps.24320](https://doi.org/10.1002/jps.24320) | [25558834](https://pubmed.ncbi.nlm.nih.gov/25558834) | Tacrine is one of the simulated drugs in a PBPK model, but no numeric tacrine parameter values (CLtot, F, Vdss) are given in the evidence, only fluvoxamine numbers. |

<sub>queue written 2026-10-13T13:48:56.392112+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alugoju_2023 | irrelevant | 0 | 0 | In silico docking/ADMET study of Aquilaria phytochemicals; tacrine is not the subject drug and no PK parameters for it are reported. |
| popPK | An_2005 | irrelevant | 0 | 0 | In vitro hepatoprotection study in Hep G2 cells; tacrine is only a cytotoxicity-inducing agent, no PK parameters reported. |
| popPK | An_2006 | irrelevant | 0 | 0 | This is an in vitro natural-product hepatoprotection study using tacrine only as a cytotoxicity-inducing agent; no PK parameters for tacrine are reported. |
| popPK | An_2007 | irrelevant | 0 | 0 | Tacrine is only used as a cytotoxicity-inducing agent in vitro; no PK parameters are reported. |
| popPK | An_2008 | irrelevant | 0 | 0 | In vitro cytotoxicity study of plant compounds; tacrine is only a cytotoxicity-inducing agent, no PK parameters. |
| popPK | An_2009 | irrelevant | 0 | 0 | This is a natural-product isolation/hepatoprotection study; tacrine is only used to induce cytotoxicity, with no PK parameters reported. |
| PGx | Babu_2022 | not_relevant | 0 | 0 | Paper reports synthesis and docking of tacrine analogues; no gene variant/genotype effects on PK or PD parameters. |
| PGx | Barner_1998 | not_relevant | 0 | 0 | Paper reviews donepezil, not tacrine; no pharmacogenomic effects on tacrine PK/PD reported. |
| PGx | Becquemont_1998 | not_relevant | 2 | 3 | Reports CYP1A2 enzyme kinetics and fluvoxamine DDI for tacrine metabolism, not a gene variant/genotype effect on PK/PD. |
| PGx | Benoit_1997 | not_relevant | 3 | 5 | Study compares CYP1A2-expressing vs non-expressing engineered cells for tacrine cytotoxicity, but finds no difference in effect, and no gene variant/genotype effect on a PK/PD parameter in vivo is reported. |
| popPK | Biyah_1996 | irrelevant | 0 | 0 | Tacrine is only used as a cholinesterase inhibitor tool in an in vitro bronchi study; no PK parameters for tacrine are reported. |
| PGx | Brøsen_1998 | not_relevant | 2 | 1 | Only mentions tacrine as a CYP1A2 substrate with fluvoxamine interaction; no gene variant/genotype effect on tacrine PK/PD parameters reported. |
| popPK | Byun_2010 | irrelevant | 0 | 0 | In-vitro hepatoprotection study with no PK parameters for tacrine. |
| PGx | Cacabelos_2007 | not_relevant | 5 | 3 | Discusses CYP2D6 genotype effects on cholinesterase inhibitor response generally, but no specific tacrine PK/PD parameter effect sizes are reported. |
| PGx | Cacabelos_2020 | not_relevant | 4 | 2 | Abstract only mentions genes influencing AChEI response generally; no specific tacrine PK/PD parameter effect reported. |
| popPK | Chand_2016 | irrelevant | 0 | 0 | Medicinal chemistry study of tacrine hybrids with no pharmacokinetic parameters for tacrine. |
| popPK | Cho_2001 | irrelevant | 0 | 0 | In-vitro hepatoprotection study of bakuchiol against tacrine-induced cytotoxicity; no PK parameters for tacrine. |
| popPK | Cook_2016 | irrelevant | 2 | 1 | This is a disease progression modeling review; tacrine appears only as an example with PD effect parameters (ADAS-Cog shift), not PK disposition parameters. |
| popPK | Correia_2021 | irrelevant | 0 | 0 | Tacrine appears only as a fixed-concentration in vitro combination agent; no tacrine PK parameters are modeled or reported (numeric values shown are for gemcitabine, 5-FU, itraconazole). |
| popPK | Dawson_1991 | irrelevant | 0 | 0 | In-vitro receptor binding study with no PK disposition parameters for tacrine. |
| PGx | Ensom_2001 | not_relevant | 2 | 0 | Tacrine is only mentioned as an example of a drug with pharmacogenetic testing; no gene-variant effect on any PK/PD parameter is reported. |
| PGx | Faber_2005 | not_relevant | 2 | 0 | Mentions tacrine as a CYP1A2 substrate but reports no genotype/phenotype effect on tacrine PK/PD parameters. |
| PGx | Filley_1995 | not_relevant | 0 | 0 | General AD review mentioning tacrine approval and ApoE risk allele, with no pharmacogenomic PK/PD effect data. |
| popPK | Geci_2026 | irrelevant | 1 | 1 | Tacrine appears only as a DILI example with a Cmax-to-in vitro-toxicity ratio (3×10⁻³); no disposition parameters (CL, V, half-life, PK model) for tacrine are reported, and its Cmax value itself is not given. |
| PGx | Greenberg_2000 | not_relevant | 2 | 3 | Mentions APOE ε4 predicting tacrine failure only in passing; no PK/PD parameter effect for tacrine reported. |
| PGx | Guo_2021 | not_relevant | 2 | 2 | Review only mentions tacrine as a CYP1A2 substrate; no gene variant effect on tacrine PK/PD parameters reported. |
| PGx | Haywood_2006 | not_relevant | 3 | 2 | Mentions ApoE genotype×sex×tacrine interaction on clinical response (PD outcome) but only as P-values in a review, with no fitted effect size on a PK/PD parameter. |
| popPK | Holford_1992 | irrelevant | 2 | 0 | This is a population pharmacodynamic (not PK) model of cognitive effects; no tacrine disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Holford_1992_2 | irrelevant | 2 | 1 | This is a population pharmacodynamic (not pharmacokinetic) model of cognitive effects; no numeric disposition parameters (CL, V, ka, half-life) for tacrine appear in the evidence. |
| popPK | Holford_1995 | irrelevant | 0 | 0 | This is a population PK/PD study of romazarit, not tacrine; no tacrine parameters are reported. |
| popPK | Hrvat_2020 | irrelevant | 0 | 0 | Review of nerve agent poisoning; tacrine only mentioned as a precursor for reactivator design, no PK parameters for tacrine. |
| popPK | Iga_2015 | relevant | 5 | 2 | Tacrine is one of the simulated drugs in a PBPK model, but no numeric tacrine parameter values (CLtot, F, Vdss) are given in the evidence, only fluvoxamine numbers. |
| PGx | Jann_2002 | not_relevant | 2 | 0 | Mentions tacrine is metabolised by CYP1A2 but reports no genotype/phenotype effect on any PK or PD parameter. |
| popPK | Jin_2014 | irrelevant | 0 | 0 | This is a natural-product chemistry paper; tacrine is only used to induce cytotoxicity in vitro, with no PK parameters. |
| popPK | Jon_2025 | irrelevant | 0 | 0 | This is a review of donepezil nose-to-brain delivery; tacrine is only mentioned as a historical comparator with no PK parameters for it. |
| popPK | Jung_2004 | irrelevant | 0 | 0 | In-vitro hepatoprotection study; tacrine is only a cytotoxicity-inducing agent, no PK parameters reported. |
| PGx | Kahma_2021 | not_relevant | 0 | 0 | Tacrine is only used as a CYP1A2 probe substrate in an in vitro inhibition assay; no gene variant/genotype effect on tacrine PK/PD is reported. |
| popPK | Kato_1999 | irrelevant | 0 | 0 | In-vitro pharmacology study of TAK-147; tacrine is only a comparator with no PK parameters. |
| PGx | Kroon_2007 | not_relevant | 3 | 2 | Tacrine is only listed as a CYP1A2 substrate affected by smoking; no gene variant effect or quantitative PK/PD parameter change is reported. |
| PGx | Larsen_1999 | not_relevant | 3 | 5 | Correlates tacrine clearance with caffeine metabolic ratio (phenotype proxy), but no gene variant/genotype effect on tacrine PK is reported. |
| PGx | Larsen_1999_2 | not_relevant | 0 | 0 | Reports a drug-drug interaction (fluvoxamine inhibiting tacrine clearance), not a gene variant/genotype/phenotype effect on tacrine PK/PD. |
| popPK | Lau_1992 | irrelevant | 0 | 0 | Tacrine is only a potassium channel blocker used as a pharmacological tool in an in vitro guinea pig atrium study; no PK parameters reported. |
| popPK | Lee_2012 | irrelevant | 0 | 0 | This is a hepatoprotective radish extract study; tacrine is only a cytotoxicity-inducing agent, with no PK parameters reported. |
| popPK | Lee_2012_2 | irrelevant | 0 | 0 | In-vitro cytoprotection study in HepG2 cells; tacrine is only a cytotoxic challenge agent, no PK parameters reported. |
| popPK | Lehr_2007 | irrelevant | 0 | 0 | The paper models NS2330 (tesofensine), not tacrine; no tacrine parameters are reported. |
| PGx | Li_2014 | not_relevant | 3 | 3 | Reports tacrine 1-hydroxylation KM/Vmax variability across hepatocyte donors, but no gene variant/genotype effect is examined. |
| popPK | Li_2017 | irrelevant | 0 | 0 | Medicinal chemistry synthesis and in vitro biological evaluation of tacrine hybrids; no PK disposition parameters for tacrine. |
| popPK | Liu_2008 | irrelevant | 0 | 0 | In vitro electrophysiology study of bis(7)-tacrine on NMDA receptors; no PK parameters for tacrine. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | This is a medicinal chemistry design/synthesis paper with in vitro pharmacology (EC50/IC50), no PK disposition parameters for tacrine. |
| popPK | Luo_2004 | irrelevant | 0 | 0 | Electrophysiology study of bis(7)-tacrine on 5-HT currents in rat neurons; no PK disposition parameters for tacrine. |
| PGx | Madden_1995 | not_relevant | 3 | 2 | Mentions CYP1A2 metabolism of tacrine but reports no genotype/phenotype effect on any PK/PD parameter. |
| popPK | Makhaeva_2025 | irrelevant | 0 | 0 | Tacrine appears only as a reference AChE inhibitor in an in-vitro medicinal chemistry study of ferrocene derivatives; no PK parameters for tacrine are reported. |
| popPK | Matallana_2026 | irrelevant | 0 | 0 | Computational docking/virtual screening study of AChE inhibitors; tacrine is only mentioned historically, with no PK parameters. |
| PGx | McEneny-King_2017 | not_relevant | 2 | 5 | Study examines CYP1A2 binding of tacrine derivatives in vitro; no gene variant/genotype effect on tacrine PK/PD parameters is reported. |
| popPK | Mikaelian_2013 | irrelevant | 0 | 0 | This is a population pharmacodynamic model of serum troponin I in rats, not a PK study of tacrine; no tacrine parameters appear. |
| PGx | Naud_1997 | not_relevant | 3 | 3 | In vitro study finds no difference in tacrine cytotoxicity between CYP1A2-expressing and parental cells; no PK/PD parameter effect of genotype reported. |
| popPK | Noor_2009 | irrelevant | 0 | 0 | In-vitro cytotoxicity study (Hep G2/rat hepatocytes) with tacrine only as a hepatotoxin training compound; no PK disposition parameters reported. |
| PGx | Obach_2002 | not_relevant | 2 | 3 | Reports CYP1A2-catalyzed tacrine KM in recombinant enzymes, but no gene variant/genotype effect on tacrine PK/PD. |
| popPK | Oh_2002 | irrelevant | 0 | 0 | In-vitro cytotoxicity study of plant compounds; tacrine is only a cytotoxicity-inducing agent, no PK parameters reported. |
| popPK | Oh_2002_2 | irrelevant | 0 | 0 | In-vitro cytotoxicity study of plant compounds; tacrine is only used to induce toxicity, no PK parameters. |
| popPK | Oh_2002_3 | irrelevant | 0 | 0 | This is a natural products chemistry/cytotoxicity study; tacrine is only used to induce hepatotoxicity in vitro, with no PK parameters. |
| popPK | Oh_2004 | irrelevant | 0 | 0 | Tacrine is only used to induce cytotoxicity in an in vitro hepatoprotection assay; no PK parameters are reported. |
| popPK | Park_2004 | irrelevant | 0 | 0 | Tacrine is only used to induce cytotoxicity in vitro; no PK parameters are reported. |
| popPK | Patel_2016 | relevant | 7 | 3 | Tacrine plasma profiles in SD rats were fitted to a one-compartment model with absorption rates, but no numeric parameter values appear in the provided evidence (likely in figures/tables not included). |
| PGx | Patocka_2008 | not_relevant | 3 | 2 | Speculative discussion of CYP polymorphism affecting tacrine metabolism/toxicity with no measured PK/PD parameter or effect size. |
| PGx | Peng_2004 | not_relevant | 0 | 0 | Study reports tacrine's inhibition of CYP1A enzymes in vitro, not a gene variant/genotype effect on tacrine PK/PD parameters. |
| PGx | Qosa_2021 | not_relevant | 1 | 2 | Tacrine is only used as a hepatotoxicity probe in iPSC vs primary hepatocyte comparison; no gene variant/genotype effect on PK/PD is reported. |
| PGx | Ran_2023 | not_relevant | 0 | 0 | Reports a drug-drug interaction (xanthotoxin-CYP1A2) affecting tacrine PK, not a gene variant/genotype/phenotype effect. |
| PGx | Rasmussen_1998 | not_relevant | 0 | 0 | Paper studies fluvoxamine inhibition of caffeine metabolism in vitro; tacrine only mentioned as a CYP1A2 substrate, no gene variant effect on tacrine PK/PD. |
| popPK | Ros_2001 | irrelevant | 0 | 0 | Electrophysiology/receptor pharmacology study of bis(7)-tacrine in Torpedo electric organ; no PK disposition parameters reported. |
| popPK | Scuvée-Moreau_1998 | irrelevant | 0 | 0 | In-vitro electrophysiology/pharmacology study in rat brain slices; tacrine is only a cholinesterase inhibitor probe, with no PK parameters. |
| popPK | Setya_2019 | relevant | 6 | 3 | PK study of tacrine in rats with bioavailability comparisons, but numeric disposition parameters (CL, V, t½) are not shown in the abstract evidence. |
| PGx | Simon_2000 | not_relevant | 3 | 5 | Reports GST genotype association with tacrine hepatotoxicity (ALT elevation, a safety outcome), not a PK/PD parameter like clearance, AUC, or response measure. |
| PGx | Sinz_1997 | not_relevant | 0 | 0 | Study examines tacrine's induction of rat CYP enzymes, not a gene variant/genotype effect on tacrine PK/PD. |
| popPK | Song_2001 | irrelevant | 0 | 0 | Tacrine is only used to induce cytotoxicity in an in vitro Hep G2 assay; no PK parameters are reported. |
| popPK | Song_2003 | irrelevant | 0 | 0 | In vitro cytotoxicity study of plant compounds; tacrine is only a cytotoxicity-inducing agent, no PK parameters. |
| popPK | Spilovska_2017 | irrelevant | 0 | 0 | Medicinal chemistry paper on tacrine-scutellarin hybrids with in vitro enzyme inhibition, docking, and cytotoxicity; no PK disposition parameters for tacrine. |
| PGx | Valicherla_2019 | not_relevant | 0 | 0 | Tacrine is only used as a probe substrate for CYP1A2 activity in vitro; no gene variant/genotype effect on tacrine PK/PD is reported. |
| popPK | Vuorio_2004 | irrelevant | 2 | 1 | In-vitro iontophoretic release device study; no PK disposition parameters (CL, V, t½) for tacrine and no numeric values in the evidence. |
| PGx | Wichur_2021 | not_relevant | 0 | 0 | Medicinal chemistry study of tacrine derivatives; no gene variant/genotype effects on PK/PD parameters reported. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | This is a review of in silico ADMET prediction tools; tacrine appears only as a reference shape for virtual screening, with no tacrine PK parameters reported. |
| PGx | Youdim_2008 | not_relevant | 0 | 0 | Tacrine is only used as a CYP1A2 probe substrate in an in vitro IC50 assay; no gene variant effect on tacrine PK/PD is reported. |
| PGx | Zahodne_2008 | not_relevant | 0 | 0 | Review of PD psychosis treatment; tacrine mentioned only for hepatic toxicity with no pharmacogenomic PK/PD data. |
| PGx | Zevin_1999 | not_relevant | 2 | 3 | Tacrine is only listed among drugs with smoking-induced metabolism; no gene variant effect on tacrine PK/PD parameters is reported. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | Review of CYP1A2 structure/function; tacrine only mentioned as a substrate, no genotype effect on PK/PD reported. |
| PGx | Zhou_2009_2 | not_relevant | 5 | 2 | Tacrine is only mentioned as a CYP1A2 substrate; no genotype-specific PK/PD effect on tacrine is reported. |
| PGx | Zhou_2010 | not_relevant | 3 | 1 | Tacrine only mentioned as a CYP1A2 substrate; no genotype-specific PK/PD effect on tacrine reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:33 UTC</sub>
