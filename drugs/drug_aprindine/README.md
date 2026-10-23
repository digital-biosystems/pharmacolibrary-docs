<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;aprindine&quot;}]"></div>

# aprindine

- **generic name:** aprindine
- **ATC codes:** `C01BB04`
- **DrugBank:** [DB01429](https://go.drugbank.com/drugs/DB01429) · **PubChem:** [CID 2218](https://pubchem.ncbi.nlm.nih.gov/compound/2218)
- **molar mass:** 322.487 g/mol (C22H30N2) — DrugBank
- **groups:** experimental

## About

Aprindine is an antiarrhythmic drug of class Ib, used to treat heart rhythm disorders associated with heart disease. It is considered experimental and is not authorised in the European Union, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q263612](https://www.wikidata.org/wiki/Q263612) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aprindine | parent | 322.487 | C22H30N2 | DrugBank | [2218](https://pubchem.ncbi.nlm.nih.gov/compound/2218) | Kobari_1984 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Kobari_1984_reference](drugs/drug_aprindine/Aprindine_Kobari1984_reference.md) | — | 1-compartment (no model) | 1 | Kobari T et al., Dose-dependent pharmacokinetics of apri…, European journal of clinica… (1984) | [10.1007/BF00546721](https://doi.org/10.1007/BF00546721) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Ebner_1993](drugs/drug_aprindine/pgx_Ebner_1993_CYP2D6_Q27.md) | Ebner T et al., The metabolism of aprindine in relation…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb04161.x](https://doi.org/10.1111/j.1365-2125.1993.tb04161.x) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aprindine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` metabolism/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (inhibitor), CALM2 (inhibitor), CALM3 (inhibitor), SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 16:01 | 9:07 | 0/1/0 | 0/0/0 | 0/0/1 | 131,355/5,937 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 15/2 | 8/10 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 14  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_1981.pdf` | de Suray JM et al., Pharmacokinetic study of aprindine and…, International journal of cl… (1981) | popPK | 10 | not captured | [7251236](https://pubmed.ncbi.nlm.nih.gov/7251236) | The study reports quantitative PK parameters for aprindine in dogs, but the specific numeric values for clearance, volume, and rate constants are described qualitatively (e.g., "similar", "twice as high") without explicit numbers in the provided text. |
| `Matsumoto_1990.pdf` | Matsumoto N et al., [Effects of intravenous aprindine on he…, Kokyu to junkan. Respiratio… (1990) | popPK | 8 | not captured | [1694595](https://pubmed.ncbi.nlm.nih.gov/1694595) | The study reports quantitative PK parameters for aprindine in humans, specifically the elimination half-life (18.9 +/- 8.4 hours) and plasma concentration-time data, though it lacks explicit clearance or volume of distribution values. |
| `Wirth_1983.pdf` | Wirth KE et al., [Detection of aprindine and its metabol…, Herz (1983) | popPK | 8 | not captured | [6642401](https://pubmed.ncbi.nlm.nih.gov/6642401) | The study reports a two-compartment model and elimination half-lives (37h plasma, 31h urine) for aprindine in humans, but lacks explicit values for clearance, volume of distribution, or absorption rate constants. |
| `Nawada_1994.pdf` | Nawada T et al., Evaluation of negative inotropic and an…, International journal of cl… (1994) | pd | 4 | not captured | [7952796](https://www.ncbi.nlm.nih.gov/pubmed/7952796) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-08T16:01:12.262876+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_1986 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic classification of antiarrhythmic drugs and contains no pharmacokinetic data or quantitative disposition parameters for aprindine. |
| popPK | Hashimoto_1991 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of a different drug (TYB-3823) in dogs, mentioning aprindine only as a comparator for its antiarrhythmic profile. |
| popPK | Hiiro_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of negative inotropic effects in guinea pig tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Honerjäger_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of negative inotropic effects on guinea-pig papillary muscles and does not report pharmacokinetic parameters for aprindine. |
| popPK | Honerjäger_1986_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of negative inotropic and electrophysiological effects in guinea-pig papillary muscles, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for aprindine. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a general automated pipeline for generating initial PK estimates and uses other drugs (e.g., cefaclor, ceftriaxone) for validation, with no data or parameters reported for aprindine. |
| popPK | Huang_2025_2 | irrelevant | 0 | 0 | The paper describes a general method for calculating initial PK estimates and uses various drugs (e.g., ceftriaxone, vancomycin) as test cases, but does not study aprindine. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated PopPK modeling using 22 datasets, and aprindine is only mentioned in a reference list without any associated data or parameters. |
| popPK | Kobayashi_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP1A2 inhibition by antiarrhythmic drugs, not a pharmacokinetic study reporting disposition parameters for aprindine. |
| PGx | Kobayashi_1998 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP1A2 inhibition) and does not report any pharmacogenomic effects (gene variants) on the PK or PD of aprindine. |
| popPK | Komatsu_2015 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for digoxin, not aprindine (which is only listed as a concomitant medication). |
| popPK | Lesko_1989 | irrelevant | 1 | 0 | The paper is a review of amiodarone drug interactions where aprindine is only a co-administered drug, and no quantitative PK parameters (CL, V, t1/2) for aprindine are reported. |
| popPK | Mannhold_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calmodulin inhibition and lipophilicity, not a pharmacokinetic study. |
| popPK | Matsuo_2000 | irrelevant | 0 | 0 | The study focuses on propiverine and other anticholinergics in mice, with aprindine mentioned only as a prior comparator for receptor binding, not as the subject of PK analysis. |
| PD | Matsuo_2000 | not_relevant | 1 | 0 | The paper focuses on propiverine and other drugs, mentioning aprindine only in the context of previous work without providing any new numeric PD parameters or exposure-response data for aprindine. |
| popPK | Nawada_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and mechanistic evaluation of negative inotropic effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ohmoto-Sekine_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of aprindine's mechanism of action on ion channels in guinea-pig cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sakuta_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel blockade in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Taguchi_2006 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bepridil, with aprindine serving only as a co-administered inhibitor/comparator, not as the subject drug. |
| PGx | Taguchi_2006 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for bepridil, not aprindine; aprindine is only mentioned as a co-administered drug affecting bepridil clearance. |
| popPK | Tamura_2009 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel inhibition (IC50) and does not report pharmacokinetic disposition parameters for aprindine. |
| popPK | Tanaka_1990 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Watanabe_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of aprindine's mechanism of action on Na+/Ca2+ exchangers, reporting IC50 values rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Wirth_1983 | relevant | 8 | 4 | The study reports a two-compartment model and elimination half-lives (37h plasma, 31h urine) for aprindine in humans, but lacks explicit values for clearance, volume of distribution, or absorption rate constants. |
| popPK | de_1981 | relevant | 10 | 2 | The study reports quantitative PK parameters for aprindine in dogs, but the specific numeric values for clearance, volume, and rate constants are described qualitatively (e.g., "similar", "twice as high") without explicit numbers in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-08 15:53 UTC</sub>
