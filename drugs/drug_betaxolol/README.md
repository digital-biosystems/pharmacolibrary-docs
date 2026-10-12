<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;betaxolol&quot;}]"></div>

# betaxolol

- **generic name:** betaxolol
- **ATC codes:** `C07AB05`, `S01ED02`
- **DrugBank:** [DB00195](https://go.drugbank.com/drugs/DB00195) · **PubChem:** [CID 2369](https://pubchem.ncbi.nlm.nih.gov/compound/2369)
- **molar mass:** 307.4278 g/mol (C18H29NO3) — DrugBank
- **groups:** approved, investigational

## About

Betaxolol is a selective beta blocker used to treat high blood pressure and to lower pressure in the eye in open-angle glaucoma and ocular hypertension. It is an approved medicine, available both as a cardiovascular drug and as an eye preparation for glaucoma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q794162](https://www.wikidata.org/wiki/Q794162) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:55 | 4:11 | 0/0/0 | 2/0/0 | 0/0/5 | 127,446/6,421 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 7/6 | 4/6 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM popPK screen).">in vitro</span> | [Houtman_2021_IKATP_2](drugs/drug_betaxolol/pd_Houtman_2021_IKATP_2.md) | IKATP inward current ← betaxolol · direct sigmoid Emax (Hill) effect | — | Houtman MJC et al., Development of IKATP Ion Channel Blocke…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.814066](https://doi.org/10.3389/fphar.2021.814066) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> | [Sambol_1991_SDBP](drugs/drug_betaxolol/pd_Sambol_1991_SDBP.md) | supine diastolic blood pressure ← betaxolol · direct Emax (saturable) effect | — | Sambol NC et al., Population dose versus response of beta…, Clinical pharmacology and t… (1991) | [10.1038/clpt.1991.5](https://doi.org/10.1038/clpt.1991.5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM popPK screen).">in vitro</span> | [Houtman_2021_IKATP](drugs/drug_betaxolol/pd_Houtman_2021_IKATP.md) | IKATP outward current ← betaxolol · direct sigmoid Emax (Hill) effect | — | Houtman MJC et al., Development of IKATP Ion Channel Blocke…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.814066](https://doi.org/10.3389/fphar.2021.814066) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓ 2/2</span> | **ADRB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Messina_2014](drugs/drug_betaxolol/pgx_Messina_2014_ADRB1_Q100.md) | Messina Baas O et al., ADRB1 and ADBR2 gene polymorphisms and…, Current eye research (2014) | [10.3109/02713683.2014.900807](https://doi.org/10.3109/02713683.2014.900807) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓ 2/2</span> | **ADRB2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Messina_2014](drugs/drug_betaxolol/pgx_Messina_2014_ADRB2_Q100.md) | Messina Baas O et al., ADRB1 and ADBR2 gene polymorphisms and…, Current eye research (2014) | [10.3109/02713683.2014.900807](https://doi.org/10.3109/02713683.2014.900807) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-check: partial 1/2</span> | **ADRB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Schwartz_2005](drugs/drug_betaxolol/pgx_Schwartz_2005_ADRB1_Q100.md) | Schwartz SG et al., Beta1-adrenergic receptor polymorphisms…, Ophthalmology (2005) | [10.1016/j.ophtha.2005.08.014](https://doi.org/10.1016/j.ophtha.2005.08.014) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial 0/2</span> | **ADRB1** | `Q322` · IC50 | target | [Zateyshchikov_2007](drugs/drug_betaxolol/pgx_Zateyshchikov_2007_ADRB1_Q322.md) | Zateyshchikov DA et al., Association of CYP2D6 and ADRB1 genes w…, Fundamental & clinical phar… (2007) | [10.1111/j.1472-8206.2007.00518.x](https://doi.org/10.1111/j.1472-8206.2007.00518.x) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial 0/2</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Zateyshchikov_2007](drugs/drug_betaxolol/pgx_Zateyshchikov_2007_CYP2D6_Q27.md) | Zateyshchikov DA et al., Association of CYP2D6 and ADRB1 genes w…, Fundamental & clinical phar… (2007) | [10.1111/j.1472-8206.2007.00518.x](https://doi.org/10.1111/j.1472-8206.2007.00518.x) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=betaxolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` metabolism/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 84 matched, 83 returned
- **screened:** 10  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fayyaz_2021.pdf` | Fayyaz A et al., Ocular pharmacokinetics of atenolol, ti…, European journal of pharmac… (2021) | popPK | 8 | [10.1016/j.ejpb.2021.06.003](https://doi.org/10.1016/j.ejpb.2021.06.003) | [34139290](https://pubmed.ncbi.nlm.nih.gov/34139290) | The study reports ocular pharmacokinetics for betaxolol in rabbits, but specific quantitative disposition parameters (CL, V, t1/2) are not explicitly listed in the provided text, only relative AUC ratios. |
| `Lieberman_1996.pdf` | Lieberman R et al., Role of pharmacokinetic-pharmacodynamic…, Therapeutic drug monitoring (1996) | pd | 5 | [10.1097/00007691-199608000-00019](https://doi.org/10.1097/00007691-199608000-00019) | [8857562](https://www.ncbi.nlm.nih.gov/pubmed/8857562) | metadata signals extractable PD data (PK-PD) |
| `Hernando_2004.pdf` | Hernando MD et al., Analysis by liquid chromatography-elect…, Journal of chromatography. A (2004) | pd | 4 | not captured | [15387181](https://www.ncbi.nlm.nih.gov/pubmed/15387181) | metadata signals extractable PD data (EC50) |
| `Klockow_1986.pdf` | Klockow M et al., Studies on the receptor profile of biso…, Arzneimittel-Forschung (1986) | pd | 4 | not captured | [2870719](https://www.ncbi.nlm.nih.gov/pubmed/2870719) | metadata signals extractable PD data (IC50) |
| `Melena_1999.pdf` | Melena J et al., Betaxolol, a beta1-adrenoceptor antagon…, European journal of pharmac… (1999) | pd | 4 | [10.1016/s0014-2999(99)00459-8](https://doi.org/10.1016/s0014-2999(99)00459-8) | [10493108](https://www.ncbi.nlm.nih.gov/pubmed/10493108) | metadata signals extractable PD data (IC50) |
| `Street_1984.pdf` | Street JA et al., Inhibition of synaptosomal [3H]noradren…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90263-2](https://doi.org/10.1016/0014-2999(84)90263-2) | [6148250](https://www.ncbi.nlm.nih.gov/pubmed/6148250) | metadata signals extractable PD data (IC50) |
| `Zhang_1990.pdf` | Zhang L et al., Characterization of beta-adrenoreceptor…, The American journal of phy… (1990) | pd | 4 | [10.1152/ajpgi.1990.259.3.G436](https://doi.org/10.1152/ajpgi.1990.259.3.G436) | [1698037](https://www.ncbi.nlm.nih.gov/pubmed/1698037) | metadata signals extractable PD data (IC50) |
| `Maideen_2021.pdf` | Maideen NMP et al., A Review on Pharmacokinetic and Pharmac…, Current drug metabolism (2021) | pgx | 7 | [10.2174/1389200222666210614112529](https://doi.org/10.2174/1389200222666210614112529) | [34182907](https://www.ncbi.nlm.nih.gov/pubmed/34182907) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06T23:51:51.363751+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez-Guerra_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of celiprolol in rats, using betaxolol only as a comparator antagonist without reporting any pharmacokinetic parameters. |
| PGx | Ardestani_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of xamoterol in a mouse model of Alzheimer's disease and does not report any pharmacogenomic effects on the PK or PD parameters of betaxolol. |
| PD | Beresford_1986 | not_relevant | 0 | 0 | The text is a narrative review of pharmacodynamic and pharmacokinetic properties, not a primary research article reporting population PD modeling or exposure-response analysis with estimated parameters. |
| popPK | Bristow_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor pharmacology and does not report any pharmacokinetic parameters for betaxolol. |
| PD | Bristow_1989 | not_relevant | 3 | 2 | The paper reports receptor binding constants (Ki) and qualitative changes in maximal stimulation in failing hearts, but does not provide a full concentration-effect curve or standard PD parameters (Emax, EC50) for betaxolol itself. |
| popPK | Chidlow_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of betaxolol's interaction with sodium channels in rat synaptosomes and does not report any pharmacokinetic parameters. |
| popPK | Crider_2002 | irrelevant | 0 | 0 | The study reports in vitro receptor binding affinities (Ki) and agonist potencies (EC50), not pharmacokinetic disposition parameters. |
| popPK | Edwards_1989 | irrelevant | 0 | 0 | The study focuses on the effects of clenbuterol on amino acid levels, with betaxolol serving only as a beta-1 antagonist comparator to demonstrate receptor specificity, and no pharmacokinetic parameters for betaxolol are reported. |
| PD | Edwards_1989 | not_relevant | 0 | 0 | The paper reports a dose-response relationship (ED50) for clenbuterol, not betaxolol; betaxolol is only mentioned as a beta-1 antagonist that failed to block the effect. |
| popPK | Egginger_1993 | irrelevant | 1 | 0 | The paper is a review of enantioselective HPLC bioanalysis methods and does not report original quantitative pharmacokinetic parameter values for betaxolol. |
| PD | Egginger_1993 | not_relevant | 0 | 0 | The paper is a review of enantioselective bioanalytical methods (HPLC) and does not report any population pharmacodynamic or exposure-response modeling. |
| popPK | Fayyaz_2021 | relevant | 8 | 2 | The study reports ocular pharmacokinetics for betaxolol in rabbits, but specific quantitative disposition parameters (CL, V, t1/2) are not explicitly listed in the provided text, only relative AUC ratios. |
| popPK | Gaul_1989 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (aqueous flow reduction) rather than pharmacokinetic parameters (CL, V, t1/2) for betaxolol. |
| popPK | Hayashi-Morimoto_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of beta-antagonists on rabbit ciliary artery mechanics and does not report any pharmacokinetic parameters for betaxolol. |
| popPK | Henry_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor antagonism in mouse trachea, not a pharmacokinetic study of betaxolol. |
| PD | Henry_1990 | not_relevant | 0 | 0 | The paper describes in vitro receptor characterization using isolated mouse trachea and Schild analysis, not population pharmacodynamic or exposure-response modeling in humans or animals with systemic drug administration. |
| popPK | Hernando_2004 | irrelevant | 0 | 0 | no_text gate: only 180 chars of text extracted (&lt; 400) |
| PD | Hernando_2004 | not_relevant | 0 | 0 | The paper focuses on analytical method development (LC-MS/MS) and acute toxicity evaluation in wastewater, not on pharmacodynamic modeling or exposure-response relationships for betaxolol. |
| popPK | Herpin_1987 | irrelevant | 2 | 1 | Clinical pharmacodynamic comparison with plasma levels mentioned but no quantitative PK disposition parameters (CL, V, t½) reported. |
| popPK | Hester_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxing properties and does not report pharmacokinetic parameters. |
| popPK | Hicks_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of beta-adrenoceptor agonists/antagonists where betaxolol is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Hicks_1987 | not_relevant | 1 | 0 | The paper focuses on the pharmacology of cicloprolol, xamoterol, and pindolol; betaxolol is only mentioned as a reference antagonist, and no exposure-response or dose-response data for betaxolol are provided. |
| popPK | Houtman_2021 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| popPK | Huang_2016 | relevant | 8 | 0 | The paper is a pharmacokinetic study of betaxolol, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract or text. |
| PD | Huang_2016 | not_relevant | 2 | 1 | The paper reports standard pharmacokinetic and pharmacodynamic comparisons (e.g., IOP reduction) between formulations but does not describe or estimate a population exposure-response model with specific PD parameters. |
| popPK | Huang_2017 | irrelevant | 1 | 0 | The study focuses on the formulation and in vitro/in vivo ocular delivery characteristics (retention, release, pharmacodynamics) of betaxolol, but does not report systemic pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Huang_2017 | not_relevant | 1 | 0 | The paper describes a formulation study with descriptive pharmacodynamic results (IOP reduction) but does not report a population pharmacodynamic or exposure-response model with estimated parameters. |
| popPK | Irvine_1990 | irrelevant | 1 | 0 | The study focuses on beta-adrenoceptor selectivity and dose-response pharmacodynamics, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Jain_2013 | irrelevant | 0 | 0 | The study focuses on formulation development and pharmacodynamic efficacy (IOP reduction) without reporting quantitative pharmacokinetic parameters (CL, V, ka) for betaxolol. |
| PD | Jain_2013 | not_relevant | 2 | 1 | The paper reports a qualitative comparison of intraocular pressure reduction between a nanoparticle formulation and a marketed formulation, but it does not provide a concentration-effect or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) or a simultaneous PK/PD fit. |
| popPK | Jankovic_2014 | irrelevant | 2 | 0 | This is a review article that discusses betaxolol as under-investigated but does not report original quantitative pharmacokinetic parameter values. |
| PGx | Jankovic_2014 | not_relevant | 2 | 0 | The paper is a review that explicitly states betaxolol was under-investigated and does not report specific pharmacogenomic effect sizes for betaxolol. |
| popPK | Kaur_2000 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats where betaxolol is used as a comparator antagonist, and no pharmacokinetic parameters are reported. |
| PD | Kaur_2000 | not_relevant | 1 | 0 | The paper mentions betaxolol only as a qualitative antagonist in a behavioral assay and does not provide any numeric concentration-effect data, dose-response curves, or PD parameters for betaxolol. |
| popPK | Klockow_1986 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding profile analysis, not a pharmacokinetic study, and betaxolol is only a comparator. |
| PD | Klockow_1986 | not_relevant | 1 | 2 | The paper reports in vitro receptor binding affinities (IC50) for betaxolol, which are pharmacological properties but do not constitute a pharmacodynamic exposure-response or dose-response relationship for a clinical effect. |
| popPK | Kulkarni_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxant effects on bovine retinal vessels and does not report pharmacokinetic parameters. |
| popPK | Kuwahara_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UVB protection where betaxolol is only a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Kuwahara_2005 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study on cell viability and radical scavenging, not a population pharmacodynamic or exposure-response modeling study. |
| popPK | Lazebnik_1998 | irrelevant | 0 | 0 | The study reports only pharmacodynamic effects (blood pressure, ECG, etc.) and contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Lazebnik_1998 | not_relevant | 1 | 0 | The paper reports clinical efficacy (blood pressure reduction) in a fixed-dose cohort but provides no concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Li_2018 | irrelevant | 2 | 0 | The study focuses on a nanoparticle delivery system for brimonidine (BH) in rabbits, not betaxolol, and lacks quantitative PK parameters for the target drug. |
| PD | Li_2018 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacodynamic effect (decreased intraocular pressure) but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model fit. |
| popPK | Lieberman_1996 | irrelevant | 2 | 0 | The paper is a review discussing PK-PD principles and mentions betaxolol only in the context of a population PD (pharmacodynamic) modeling example for dose-response, without reporting quantitative PK disposition parameters (CL, V, etc.) for betaxolol. |
| popPK | Liu_2020 | irrelevant | 2 | 0 | The study focuses on the formulation and bioavailability of betaxolol nanoparticles for ocular delivery, not on reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for the drug. |
| PD | Liu_2020 | not_relevant | 0 | 0 | The paper focuses on the formulation and bioavailability of betaxolol nanoparticles, with no pharmacodynamic or exposure-response analysis reported. |
| popPK | Liu_2021 | irrelevant | 2 | 0 | The study focuses on the formulation and precorneal retention of a novel microsphere delivery system, and while it mentions aqueous humor pharmacokinetics, no quantitative PK parameters (CL, V, ka, etc.) for betaxolol are reported in the provided text. |
| PD | Liu_2021 | not_relevant | 1 | 0 | The paper describes a formulation study comparing pharmacokinetics and intraocular pressure reduction of microspheres versus commercial eye drops, but does not employ population pharmacodynamic modeling or estimate exposure-response parameters. |
| popPK | Maideen_2021 | irrelevant | 1 | 0 | The paper is a review of drug interactions for beta-blockers and does not report original quantitative pharmacokinetic parameters for betaxolol. |
| PD | Maideen_2021 | not_relevant | 0 | 0 | The paper is a narrative review of drug interactions and does not report original population pharmacodynamic modeling or estimated PD parameters for betaxolol. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) and mentions CYP2D6 metabolism, but it does not report specific pharmacogenomic effects (gene variant/genotype) on PK/PD parameters for betaxolol. |
| popPK | Maselli_2014 | irrelevant | 0 | 0 | Betaxolol is used only as a pharmacological antagonist in an in-vitro smooth muscle study, with no pharmacokinetic parameters reported. |
| PD | Maselli_2014 | not_relevant | 0 | 0 | The paper reports in vitro concentration-response experiments on human tissue strips, not a population pharmacodynamic or exposure-response model for betaxolol in vivo. |
| popPK | Melena_1999 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PD | Melena_1999 | not_relevant | 0 | 0 | The provided text is a single sentence describing the pharmacological mechanism of betaxolol (affinity for L-type Ca2+ channels) and contains no data, analysis, or numeric parameters regarding exposure-response or dose-response relationships. |
| popPK | Miki_2003 | irrelevant | 2 | 0 | The study is a case report focusing on pharmacodynamic receptor occupancy and adverse effects, using literature parameters rather than reporting original quantitative PK disposition parameters (CL, V, etc.) for betaxolol. |
| PD | Miki_2003 | not_relevant | 2 | 1 | This is a single case report using literature-derived parameters for simulation, not a population pharmacodynamic study estimating PD parameters from new data. |
| PGx | PMID38951961_2024 | not_relevant | 0 | 0 | The paper explicitly states there was insufficient evidence to make therapeutic recommendations for CYP2D6 and other beta-blockers (including betaxolol), focusing only on metoprolol. |
| popPK | Pathe_1983 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Pathe_1983 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to verify the presence of numeric PD parameters or an extractable dose-response relationship. |
| popPK | Pringle_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of cardioselectivity and does not report any pharmacokinetic parameters for betaxolol. |
| popPK | Rhoden_1988 | irrelevant | 0 | 0 | In vitro pharmacology study of beta-agonists on human airway; betaxolol is only a beta1-antagonist tool, no PK parameters. |
| popPK | Riddell_1985 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of beta-blockade potency and cardioselectivity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sambol_1991 | irrelevant | 2 | 0 | The study reports population pharmacodynamic (dose-response) parameters and concentration variability, but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for betaxolol. |
| popPK | Schliep_1984 | irrelevant | 1 | 1 | Pharmacodynamic beta1-selectivity study in dogs/guinea pigs; betaxolol is only a comparator with no PK disposition parameters. |
| popPK | Sidorova_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer activity and cell viability, not a pharmacokinetic study reporting disposition parameters. |
| PD | Sidorova_2022 | not_relevant | 1 | 1 | The paper reports in vitro cell viability and clonogenic assays with EC50 values, but does not perform population pharmacodynamic or exposure-response modeling. |
| popPK | Simpson_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adrenergic receptors in rat heart cells where betaxolol is used only as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| PD | Simpson_1985 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study on cultured rat heart cells using betaxolol as a pharmacological tool, not a population pharmacodynamic or exposure-response modeling study. |
| popPK | Stevens_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of inverse agonist efficacy in cell lines, not a pharmacokinetic study reporting disposition parameters for betaxolol. |
| PD | Stevens_1998 | not_relevant | 0 | 0 | The paper describes in vitro molecular pharmacology experiments on cell lines to characterize inverse agonist efficacy, not a population pharmacodynamic or exposure-response model in humans or animals. |
| popPK | Street_1984 | irrelevant | 0 | 0 | In-vitro synaptosomal uptake inhibition study; betaxolol is only one of many comparator drugs with IC50 values, no PK disposition parameters. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Sun_2023 | not_relevant | 2 | 2 | Only an in vitro enzyme-inhibition IC50 (19.3 μM) and qualitative dose-group comparisons in mice; no PK, no concentration-effect or dose-response PD modeling with derivable PD parameters. |
| popPK | Tan_1983 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study in rat adipocytes; betaxolol is only a blocking agent with no PK parameters reported. |
| popPK | Tang_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring intracellular potential, not a pharmacokinetic study, and reports no disposition parameters for betaxolol. |
| popPK | Tian_2018 | irrelevant | 1 | 0 | The study focuses on the formulation and in vitro release characteristics of betaxolol microspheres, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| PD | Tian_2018 | not_relevant | 1 | 0 | The paper focuses on the formulation and in vitro/in vivo release characteristics of betaxolol microspheres, mentioning only qualitatively that the formulation extends the duration of action without providing numeric PD parameters or concentration-effect data. |
| popPK | Vinceneux_1986 | relevant | 8 | 0 | The study investigates the pharmacokinetics of betaxolol, but the provided evidence (abstract only) lacks specific quantitative parameter values like clearance or volume. |
| PD | Vinceneux_1986 | not_relevant | 1 | 0 | The study is a small crossover trial (n=6) reporting descriptive PK/PD observations without fitting a population pharmacodynamic model or estimating PD parameters. |
| PGx | Vranjkovic_2012 | not_relevant | 0 | 0 | The paper investigates the behavioral effects of betaxolol on cocaine reinstatement in mice, not the impact of genetic variants on betaxolol's pharmacokinetics or pharmacodynamics. |
| popPK | Warrington_1980 | irrelevant | 2 | 0 | The paper reports bioavailability and qualitative concentration comparisons but does not provide quantitative compartmental PK parameters (CL, V, ka, t1/2) for betaxolol. |
| PD | Warrington_1980 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of PD effects (heart rate, blood pressure) and PK parameters (bioavailability) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Williams_1992 | irrelevant | 0 | 0 | The study is a clinical efficacy trial assessing blood pressure response to betaxolol and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wong_2016 | irrelevant | 0 | 0 | The paper is a systematic review of blood pressure efficacy and does not report pharmacokinetic parameters for betaxolol. |
| PD | Wong_2016 | not_relevant | 0 | 0 | This is a Cochrane systematic review comparing clinical outcomes (blood pressure) across different beta-blockers, not a population pharmacodynamic modeling study estimating exposure-response parameters for betaxolol. |
| popPK | Wu_2019 | irrelevant | 0 | 0 | The paper describes a chiral separation method (CE) for betaxolol and reports analytical parameters (LOD, LOQ, linearity), not pharmacokinetic disposition parameters. |
| PD | Wu_2019 | not_relevant | 0 | 0 | The paper describes analytical methods (CE, MSPE) for quantifying beta-blockers and reports calibration lines and adsorption isotherms, but contains no pharmacodynamic or exposure-response data. |
| popPK | Yu_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of retinal arteriole vasodilation and does not report any pharmacokinetic parameters for betaxolol. |
| popPK | Zhang_1990 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Zhang_1990 | not_relevant | 0 | 0 | The paper characterizes beta-adrenoreceptors in guinea pig stomach smooth muscle cells and does not involve betaxolol or report any pharmacodynamic exposure-response or dose-response relationship for the drug. |
| popPK | Zhang_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in mouse retinal cells, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Zheng_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of transgenerational addiction to methamphetamine using betaxolol as a pharmacological tool, but does not report pharmacogenomic effects on betaxolol's PK or PD parameters. |
| popPK | de_1989 | irrelevant | 1 | 0 | The study assesses pharmacodynamic beta-blockade (isoproterenol dose-response) rather than reporting quantitative pharmacokinetic parameters like clearance or volume for betaxolol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
