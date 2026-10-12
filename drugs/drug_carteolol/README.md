<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carteolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carteolol_Ishizaki1983_reference&quot;,&quot;label&quot;:&quot;Ishizaki_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carteolol/Carteolol_Ishizaki1983_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# carteolol

- **generic name:** carteolol
- **ATC codes:** `C07AA15`, `S01ED05`
- **DrugBank:** [DB00521](https://go.drugbank.com/drugs/DB00521) · **PubChem:** [CID 2583](https://pubchem.ncbi.nlm.nih.gov/compound/2583)
- **molar mass:** 292.3734 g/mol (C16H24N2O3) — DrugBank
- **groups:** approved

## About

Carteolol is a non-selective beta blocker used to treat arterial hypertension and to lower pressure in the eye in open-angle glaucoma and ocular hypertension. It is an approved medicine, available both as a cardiovascular beta blocker and as an eye drop for glaucoma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q546434](https://www.wikidata.org/wiki/Q546434) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| carteolol | parent | 292.373 | C16H24N2O3 | DrugBank | [2583](https://pubchem.ncbi.nlm.nih.gov/compound/2583) | Ishizaki_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:30 | 3:10 | 1/0/0 | 1/0/0 | 0/0/0 | 46,351/7,256 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.846), gpt-oss:120b (not confirmed, agreement 0.15). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ishizaki_1983_reference](drugs/drug_carteolol/Carteolol_Ishizaki1983_reference.md) | ▶ model + simulator | 2-compartment, IV | 7 | Ishizaki T et al., Pharmacokinetics and absolute bioavaila…, European journal of clinica… (1983) | [10.1007/BF00544023](https://doi.org/10.1007/BF00544023) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Floreani_2004_adenylate_cyclase_activity](drugs/drug_carteolol/pd_Floreani_2004_adenylate_cyclase_activity.md) | cAMP production ← carteolol · direct sigmoid Emax (Hill) effect | — | Floreani M et al., Characterization of intrinsic sympathom…, Journal of pharmacological… (2004) | [10.1254/jphs.95.115](https://doi.org/10.1254/jphs.95.115) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Floreani_2004_chronotropic_effect](drugs/drug_carteolol/pd_Floreani_2004_chronotropic_effect.md) | heart rate ← carteolol · stimulation effect | — | Floreani M et al., Characterization of intrinsic sympathom…, Journal of pharmacological… (2004) | [10.1254/jphs.95.115](https://doi.org/10.1254/jphs.95.115) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Floreani_2004_inotropic_effect](drugs/drug_carteolol/pd_Floreani_2004_inotropic_effect.md) | force of contraction ← carteolol · direct sigmoid Emax (Hill) effect | model (no simulator) | Floreani M et al., Characterization of intrinsic sympathom…, Journal of pharmacological… (2004) | [10.1254/jphs.95.115](https://doi.org/10.1254/jphs.95.115) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=carteolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (partial agonist), ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ishizaki_1983.pdf` | Ishizaki T et al., Pharmacokinetics and absolute bioavaila…, European journal of clinica… (1983) | popPK | 10 | [10.1007/BF00544023](https://doi.org/10.1007/BF00544023) | [6137389](https://pubmed.ncbi.nlm.nih.gov/6137389) | The paper reports quantitative pharmacokinetic parameters (CL, V, t1/2) for carteolol in humans with all numeric values explicitly present in the abstract. |
| `Zhao_1998.pdf` | Zhao J et al., Carteolol is a weak partial agonist on…, Canadian journal of physiol… (1998) | pd | 4 | [10.1139/cjpp-76-4-428](https://doi.org/10.1139/cjpp-76-4-428) | [9795752](https://www.ncbi.nlm.nih.gov/pubmed/9795752) | metadata signals extractable PD data (EC50) |
| `Ishii_2002.pdf` | Ishii Y et al., Pharmacokinetic and pharmacodynamic dif…, Journal of clinical pharmac… (2002) | pgx | 8 | not captured | [12211218](https://www.ncbi.nlm.nih.gov/pubmed/12211218) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kudo_1999.pdf` | Kudo S et al., Pharmacokinetics of haloperidol: an upd…, Clinical pharmacokinetics (1999) | pgx | 8 | [10.2165/00003088-199937060-00001](https://doi.org/10.2165/00003088-199937060-00001) | [10628896](https://www.ncbi.nlm.nih.gov/pubmed/10628896) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T00:27:13.172402+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Floreani_2004 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of carteolol's intrinsic sympathomimetic activity in isolated rat tissues, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Hester_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxing properties and does not report pharmacokinetic parameters. |
| PGx | Ishii_2002 | not_relevant | 2 | 10 | The study compares pharmacokinetic and pharmacodynamic parameters between two administration routes (ocular vs. nasal) in a single genotype group (extensive metabolizers), rather than comparing different genotypes to establish a pharmacogenomic effect. |
| PGx | Kudo_1997 | not_relevant | 0 | 0 | The paper identifies CYP2D6 as the enzyme metabolizing carteolol using cDNA-expressed systems but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Kudo_1998 | not_relevant | 0 | 0 | The paper investigates the metabolism of haloperidol and its interaction with CYP2D6 using carteolol as a probe substrate, but it does not report pharmacogenomic effects on the PK or PD parameters of carteolol itself. |
| PGx | Kudo_1999 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of haloperidol and mentions carteolol only as a drug interaction partner, not as the subject of a pharmacogenomic study. |
| popPK | Kuwahara_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UVB protection and radical scavenging, reporting no pharmacokinetic parameters. |
| PGx | Umehara_1997 | not_relevant | 0 | 0 | The study investigates in vitro metabolism in rat liver microsomes and does not report pharmacogenomic effects of human gene variants on PK or PD parameters. |
| popPK | Zhao_1998 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Zhao_1998 | not_relevant | 0 | 0 | The paper describes the pharmacological mechanism (partial agonism) but does not report a quantitative exposure-response or dose-response analysis with numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:27 UTC</sub>
