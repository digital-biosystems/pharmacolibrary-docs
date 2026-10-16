<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;timolol&quot;}]"></div>

# timolol

- **generic name:** timolol
- **ATC codes:** `C07AA06`, `C07BA06`, `S01ED01`
- **DrugBank:** [DB00373](https://go.drugbank.com/drugs/DB00373) · **PubChem:** [CID 33624](https://pubchem.ncbi.nlm.nih.gov/compound/33624)
- **molar mass:** 316.42 g/mol (C13H24N4O3S) — DrugBank
- **groups:** approved, investigational

## About

Timolol is a non-selective beta blocker used for high blood pressure, angina, after a heart attack, and as eye drops for glaucoma and raised eye pressure. It is an approved medicine and is listed as a WHO essential medicine, so it is widely used worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413994](https://www.wikidata.org/wiki/Q413994) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| timolol | parent | 316.42 | C13H24N4O3S | DrugBank | [33624](https://pubchem.ncbi.nlm.nih.gov/compound/33624) | Ishizaki_1978, Ji_1993 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:50 | 1:50 | 0/1/2 | 1/0/1 | 1/0/3 | 136,521/9,944 | einfracz / qwen3.8-27b | 9 | 4/5 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167), gpt-oss:120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Ishizaki_1978_reference](drugs/drug_timolol/Timolol_Ishizaki1978_reference.md) | — | 1-compartment (no model) | 4 | Ishizaki T et al., Clinical pharmacologic observations on…, Journal of clinical pharmac… (1978) | [10.1002/j.1552-4604.1978.tb01580.x](https://doi.org/10.1002/j.1552-4604.1978.tb01580.x) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Ji_1993_reference](drugs/drug_timolol/Timolol_Ji1993_reference.md) | held back | 1-compartment, IV | 5 | Ji XF et al., [The bioavailability of transdermal the…, Yao xue xue bao = Acta phar… (1993) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.444), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chiang_1996_reference](drugs/drug_timolol/Timolol_Chiang1996_reference.md) | — | 1-compartment (no model) | 0 | Chiang CH et al., Pharmacokinetics and intraocular pressu…, Journal of ocular pharmacol… (1996) | [10.1089/jop.1996.12.471](https://doi.org/10.1089/jop.1996.12.471) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Sakanaka_2008_2_IOP](drugs/drug_timolol/pd_Sakanaka_2008_2_IOP.md) | intraocular pressure (IOP) ← timolol · indirect response — drug inhibits the production of intraocular pressure (IOP) | — | Sakanaka K et al., Ocular pharmacokinetic/pharmacodynamic…, Biological & pharmaceutical… (2008) | [10.1248/bpb.31.970](https://doi.org/10.1248/bpb.31.970) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Sakanaka_2008_IOP](drugs/drug_timolol/pd_Sakanaka_2008_IOP.md) | IOP ← timolol · indirect response — drug inhibits the production of IOP | — | Sakanaka K et al., Ocular pharmacokinetic/pharmacodynamic…, Biological & pharmaceutical… (2008) | [10.1248/bpb.31.1590](https://doi.org/10.1248/bpb.31.1590) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Samer_2013](drugs/drug_timolol/pgx_Samer_2013_CYP2C9_safety.md) | Samer CF et al., Applications of CYP450 testing in the c…, Molecular diagnosis & thera… (2013) | [10.1007/s40291-013-0028-5](https://doi.org/10.1007/s40291-013-0028-5) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Liu_2016](drugs/drug_timolol/pgx_Liu_2016_CYP2C19_Q100.md) | Liu XL et al., Roles of CYP2C19 Gene Polymorphisms in…, Medical science monitor : i… (2016) | [10.12659/msm.894868](https://doi.org/10.12659/msm.894868) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Samer_2013](drugs/drug_timolol/pgx_Samer_2013_CYP2C19_Q100.md) | Samer CF et al., Applications of CYP450 testing in the c…, Molecular diagnosis & thera… (2013) | [10.1007/s40291-013-0028-5](https://doi.org/10.1007/s40291-013-0028-5) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Samer_2013](drugs/drug_timolol/pgx_Samer_2013_CYP2D6_Q100.md) | Samer CF et al., Applications of CYP450 testing in the c…, Molecular diagnosis & thera… (2013) | [10.1007/s40291-013-0028-5](https://doi.org/10.1007/s40291-013-0028-5) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=timolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` formation/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` metabolism/substrate, `CYP2C9` safety_allele, `CYP2D6` formation/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 98 matched, 60 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_16 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ishizaki_1978.pdf` | Ishizaki T et al., Clinical pharmacologic observations on…, Journal of clinical pharmac… (1978) | popPK | 10 | [10.1002/j.1552-4604.1978.tb01580.x](https://doi.org/10.1002/j.1552-4604.1978.tb01580.x) | [721948](https://pubmed.ncbi.nlm.nih.gov/721948) | The abstract provides clear quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for timolol in humans. |
| `Ji_1993.pdf` | Ji XF et al., [The bioavailability of transdermal the…, Yao xue xue bao = Acta phar… (1993) | popPK | 10 | not captured | [8285070](https://pubmed.ncbi.nlm.nih.gov/8285070) | The abstract explicitly lists quantitative pharmacokinetic parameters (Tmax, Cmax, AUC, Vss, K) for timolol in healthy volunteers. |
| `Chiang_1996.pdf` | Chiang CH et al., Pharmacokinetics and intraocular pressu…, Journal of ocular pharmacol… (1996) | popPK | 9 | [10.1089/jop.1996.12.471](https://doi.org/10.1089/jop.1996.12.471) | [8951683](https://pubmed.ncbi.nlm.nih.gov/8951683) | Reports quantitative PK parameters (ka, AUC, rate constants) for timolol in rabbits using a compartmental model. |
| `Fayyaz_2021.pdf` | Fayyaz A et al., Ocular pharmacokinetics of atenolol, ti…, European journal of pharmac… (2021) | popPK | 7 | [10.1016/j.ejpb.2021.06.003](https://doi.org/10.1016/j.ejpb.2021.06.003) | [34139290](https://pubmed.ncbi.nlm.nih.gov/34139290) | The study reports ocular pharmacokinetics for timolol in rabbits but the evidence contains only comparative ratios and qualitative trends, not specific numeric values for clearance, volume, or rate constants. |
| `McCrea_1990.pdf` | McCrea JB et al., Transdermal timolol: beta blockade and…, Pharmacotherapy (1990) | pd | 5 | not captured | [2388875](https://www.ncbi.nlm.nih.gov/pubmed/2388875) | metadata signals extractable PD data (EMAX) |
| `Yoshida_1991.pdf` | Yoshida S et al., A potassium current evoked by growth ho…, The Journal of physiology (1991) | pd | 5 | [10.1113/jphysiol.1991.sp018856](https://doi.org/10.1113/jphysiol.1991.sp018856) | [1822542](https://www.ncbi.nlm.nih.gov/pubmed/1822542) | metadata signals extractable PD data (EC50) |
| `Sharif_2024.pdf` | Sharif NA, Human experience and efficacy of omiden…, Current opinion in pharmaco… (2024) | pd | 4 | [10.1016/j.coph.2023.102426](https://doi.org/10.1016/j.coph.2023.102426) | [38168596](https://www.ncbi.nlm.nih.gov/pubmed/38168596) | metadata signals extractable PD data (EC50) |
| `Nieminen_2005.pdf` | Nieminen T et al., Polymorphisms of genes CYP2D6, ADRB1 an…, European journal of clinica… (2005) | pgx | 8 | [10.1007/s00228-005-0052-4](https://doi.org/10.1007/s00228-005-0052-4) | [16315032](https://www.ncbi.nlm.nih.gov/pubmed/16315032) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nieminen_2007.pdf` | Nieminen T et al., Ophthalmic timolol: plasma concentratio…, Scandinavian journal of cli… (2007) | pgx | 8 | [10.1080/00365510601034736](https://doi.org/10.1080/00365510601034736) | [17366003](https://www.ncbi.nlm.nih.gov/pubmed/17366003) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mäenpää_2014.pdf` | Mäenpää J et al., Paroxetine markedly increases plasma co…, Drug metabolism and disposi… (2014) | pgx | 7 | [10.1124/dmd.114.059576](https://doi.org/10.1124/dmd.114.059576) | [25261563](https://www.ncbi.nlm.nih.gov/pubmed/25261563) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Volotinen_2007.pdf` | Volotinen M et al., Timolol metabolism in human liver micro…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.012906](https://doi.org/10.1124/dmd.106.012906) | [17431033](https://www.ncbi.nlm.nih.gov/pubmed/17431033) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Volotinen_2010.pdf` | Volotinen M et al., Effects of selective serotonin reuptake…, Basic & clinical pharmacolo… (2010) | pgx | 7 | [10.1111/j.1742-7843.2009.00487.x](https://doi.org/10.1111/j.1742-7843.2009.00487.x) | [19912165](https://www.ncbi.nlm.nih.gov/pubmed/19912165) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Elikowski_2022.pdf` | Elikowski W et al., Bradycardia during optical timolol ther…, Polski merkuriusz lekarski… (2022) | pgx | 5 | not captured | [35278294](https://www.ncbi.nlm.nih.gov/pubmed/35278294) | metadata signals extractable PGX data (CYP2D6) |
| `Epperla_2014.pdf` | Epperla N et al., Topical timolol for treatment of epista…, BMJ case reports (2014) | pgx | 5 | [10.1136/bcr-2013-203056](https://doi.org/10.1136/bcr-2013-203056) | [24518395](https://www.ncbi.nlm.nih.gov/pubmed/24518395) | metadata signals extractable PGX data (CYP2D6) |
| `He_2016.pdf` | He A et al., Genotyping for CYP2D6 in Patients with…, Pediatric dermatology (2016) | pgx | 5 | [10.1111/pde.12942](https://doi.org/10.1111/pde.12942) | [27882672](https://www.ncbi.nlm.nih.gov/pubmed/27882672) | metadata signals extractable PGX data (CYP2D6) |
| `Volotinen_2011.pdf` | Volotinen M et al., Metabolism of ophthalmic timolol: new a…, Basic & clinical pharmacolo… (2011) | pgx | 5 | [10.1111/j.1742-7843.2011.00694.x](https://doi.org/10.1111/j.1742-7843.2011.00694.x) | [21385322](https://www.ncbi.nlm.nih.gov/pubmed/21385322) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-15T03:49:18.851733+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belalcazar_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring intraocular pressure, not a pharmacokinetic study reporting disposition parameters like clearance or volume for timolol. |
| popPK | Denet_2003 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of transdermal drug transport through stratum corneum using diffusion cells, not a pharmacokinetic study reporting disposition parameters for timolol in vivo. |
| popPK | Denet_2003_2 | irrelevant | 0 | 0 | The study is an in vitro ex vivo investigation of transdermal flux mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Elikowski_2022 | not_relevant | 5 | 5 | The paper reports a case where a CYP2D6 variant slowed timolol metabolism (PK), but it is a single case report describing a qualitative clinical outcome (bradycardia) without quantifying a specific PK parameter like AUC or Cmax. |
| popPK | Fayyaz_2021 | relevant | 7 | 2 | The study reports ocular pharmacokinetics for timolol in rabbits but the evidence contains only comparative ratios and qualitative trends, not specific numeric values for clearance, volume, or rate constants. |
| PGx | Fishbain_2004 | not_relevant | 2 | 5 | The paper mentions timolol as a drug where genetic polymorphism has potential clinical consequences, but it is a qualitative structured review that does not report specific quantitative changes in PK or PD parameters for timolol in this text. |
| popPK | Floreani_2004 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study on carteolol, where timolol is used only as a comparator antagonist, not for PK parameter estimation. |
| PD | Floreani_2004 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of carteolol, not timolol; timolol is only used as a reference antagonist. |
| popPK | Friedrich_1996 | irrelevant | 1 | 0 | The study focuses on local ocular tissue distribution (conjunctiva, iris-ciliary body) in rabbits, reporting AUC ratios and absorption coefficients, but does not provide standard systemic PK parameters (CL, V, t1/2) for the subject drug. |
| popPK | Gómez_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic patch-clamp analysis of timolol's effect on Kir2.1 ion channels, not a pharmacokinetic study reporting disposition parameters. |
| PD | Gómez_2014 | not_relevant | 4 | 2 | The paper reports a qualitative effect of timolol on Kir2.1 currents but does not provide numeric PD parameters (e.g., EC50) or a concentration-effect curve for timolol, unlike the data provided for propafenone. |
| popPK | Inatani_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing intraocular pressure (IOP) reduction and tolerability, not a pharmacokinetic study reporting clearance, volume, or other disposition parameters. |
| PGx | Kalenak_1996 | not_relevant | 0 | 0 | The text is a title regarding excessive beta-blockade side effects and does not describe a pharmacogenomic study linking gene variants to timolol PK/PD parameters. |
| popPK | Kolli_2021 | irrelevant | 0 | 0 | The study measures hemodynamic effects (IOP and blood pressure) rather than reporting pharmacokinetic disposition parameters (CL, V, ka) for timolol. |
| PGx | Lennard_1986_2 | not_relevant | 7 | 0 | The paper is a review discussing the genetic polymorphism affecting timolol PK (increased plasma concentrations, prolonged half-life), but it does not present primary data, fitted effect sizes, or specific genotype parameters for timolol in this text. |
| PGx | Mann_2010 | not_relevant | 0 | 0 | The paper uses timolol as a CYP2D6 inhibitor to study neuroprotection against MPP+ toxicity, not to characterize the pharmacokinetics or pharmacodynamics of timolol itself based on genetic variants. |
| popPK | McCrea_1990 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PGx | Moshetova_2019 | not_relevant | 0 | 0 | The text is an introduction discussing the general rationale for pharmacogenetics and side effects of timolol, but it does not report any specific gene variants or quantitative PK/PD data. |
| PGx | Mäenpää_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (paroxetine inhibiting CYP2D6) rather than a pharmacogenomic effect based on a specific genetic variant or genotype. |
| PGx | Novack_1996 | not_relevant | 0 | 0 | The text is a title regarding excessive beta-blockade side effects and does not describe a pharmacogenomic study linking gene variants to timolol PK/PD parameters. |
| popPK | Sakanaka_2008 | relevant | 7 | 2 | The paper presents a quantitative ocular PK/PD model for timolol in rabbits, but the specific numeric parameter values are explicitly stated to be adopted from a previous report (ref 7) rather than listed in the current text. |
| popPK | Sakanaka_2008_2 | relevant | 10 | 0 | The paper is a pharmacokinetic study of timolol in rabbits with a compartmental model, but the specific numeric parameter values are located in Tables 1 and 2 which are not included in the provided evidence. |
| popPK | Sharif_2024 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Sharif_2024 | not_relevant | 0 | 0 | The paper focuses on omidenepag isopropyl, not timolol, and does not report PD parameters for the target drug. |
| popPK | Sidorova_2022 | irrelevant | 0 | 0 | The paper is an in vitro study investigating the anticancer activity (cell viability and colony formation) of beta-blockers, not a pharmacokinetic study. |
| PGx | Volotinen_2007 | not_relevant | 4 | 5 | The paper describes general CYP2D6-mediated metabolism and inhibition kinetics in vitro but does not report specific genotype-based differences in PK parameters (e.g., poor metabolizers vs. extensive metabolizers). |
| PGx | Volotinen_2010 | not_relevant | 0 | 0 | The study investigates the effect of exogenous drugs (SSRIs) on timolol metabolism, not the effect of gene variants/genotypes. |
| PGx | Volotinen_2011 | not_relevant | 6 | 0 | The text mentions a qualitative association between CYP2D6 poor metabolizer status and higher systemic timolol concentrations, but does not provide or reference specific quantitative pharmacokinetic data from a specific study in this text. |
| PGx | Witczyńska_2025 | not_relevant | 0 | 0 | The paper focuses on the structural crystallography and general pharmacology of propranolol, mentioning timolol only for structural comparison, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Yamamoto_2003 | not_relevant | 1 | 5 | The paper reports time-dependent inhibition of CYP2D6 by timolol in an in vitro system, not the effect of a gene variant on timolol's pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Yoshida_1991 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Yoshida_1991 | not_relevant | 0 | 0 | The paper studies the effect of growth hormone-releasing hormone on potassium currents in Xenopus oocytes and does not mention timolol or report any pharmacodynamic parameters for it. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The provided text consists only of an external link and a list of generic figure captions (referring to CYP2C19, FMO) without any specific information regarding timolol or its PK/PD parameters. |
| popPK | de_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of beta-adrenergic receptor activity in bovine tissue, not a pharmacokinetic study of timolol. |
| PD | de_2000 | not_relevant | 3 | 2 | The paper reports qualitative inverse agonism and rank order of efficacy for timolol in a tissue model, but does not provide numeric PD parameters (e.g., pA2, Ki, Emax) or a quantitative concentration-effect curve for timolol itself. |
| popPK | van_2009 | irrelevant | 1 | 0 | The study is a PK/PD pharmacodynamics investigation focusing on receptor affinities (KB) rather than standard quantitative disposition parameters (CL, Vd, t1/2), and while PK data existed for modeling, the specific numeric disposition values are not provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:49 UTC</sub>
