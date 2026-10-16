<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;eltrombopag&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eltrombopag_Farrell2014_reference&quot;,&quot;label&quot;:&quot;Farrell_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eltrombopag_Gibiansky2011_reference&quot;,&quot;label&quot;:&quot;Gibiansky_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# eltrombopag

- **generic name:** eltrombopag
- **ATC codes:** `B02BX05`
- **DrugBank:** [DB06210](https://go.drugbank.com/drugs/DB06210) · **PubChem:** [CID 9846180](https://pubchem.ncbi.nlm.nih.gov/compound/9846180)
- **molar mass:** 442.4666 g/mol (C25H22N4O4) — DrugBank
- **groups:** approved, investigational

## About

Eltrombopag is a medicine used to raise low platelet counts in conditions such as immune thrombocytopenic purpura and aplastic anemia. It is an approved drug authorised in the European Union, where it is used for these platelet disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411588](https://www.wikidata.org/wiki/Q411588) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eltrombopag | parent | 442.467 | C25H22N4O4 | DrugBank | [9846180](https://pubchem.ncbi.nlm.nih.gov/compound/9846180) | Farrell_2014, Gibiansky_2011, Saleh_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:44 | 10:20 | 2/1/0 | 4/0/1 | 0/0/0 | 115,350/35,303 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Farrell_2014_reference](drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Farrell C et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2014) | [10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Gibiansky_2011_reference](drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Gibiansky E et al., Population pharmacokinetics of eltrombo…, Journal of clinical pharmac… (2011) | [10.1177/0091270010375427](https://doi.org/10.1177/0091270010375427) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Saleh_2019_reference](drugs/drug_eltrombopag/Eltrombopag_Saleh2019_reference.md) | — | 1-compartment (no model) | 3 | Saleh MI et al., Bayesian Population Pharmacokinetic Mod…, European journal of drug me… (2019) | [10.1007/s13318-018-0490-x](https://doi.org/10.1007/s13318-018-0490-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Hayes_2011_PLTC](drugs/drug_eltrombopag/pd_Hayes_2011_PLTC.md) | platelet counts ← eltrombopag · direct linear effect | — | Hayes S et al., Population PK/PD modeling of eltrombopa…, Journal of clinical pharmac… (2011) | [10.1177/0091270010383019](https://doi.org/10.1177/0091270010383019) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Hayes_2013_PLT](drugs/drug_eltrombopag/pd_Hayes_2013_PLT.md) | platelet counts ← eltrombopag · indirect response — drug stimulates the production of platelet counts | — | Hayes S et al., Population PK/PD modeling of eltrombopa…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-013-2150-9](https://doi.org/10.1007/s00280-013-2150-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Wu_2015_PLTC](drugs/drug_eltrombopag/pd_Wu_2015_PLTC.md) | platelet count ← eltrombopag · delayed effect through transit (transduction) compartments | — | Wu K et al., Population Pharmacokinetic and Pharmaco…, Clinical therapeutics (2015) | [10.1016/j.clinthera.2015.03.024](https://doi.org/10.1016/j.clinthera.2015.03.024) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Zhang_2015_PLT](drugs/drug_eltrombopag/pd_Zhang_2015_PLT.md) | platelet counts ← eltrombopag · indirect response — drug stimulates the production of platelet counts | — | Zhang J et al., Modeling and simulation support eltromb…, Pharmaceutical research (2015) | [10.1007/s11095-014-1594-x](https://doi.org/10.1007/s11095-014-1594-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span> | [Farrell_2014_PLT](drugs/drug_eltrombopag/pd_Farrell_2014_PLT.md) | platelet count ← eltrombopag · indirect response — drug stimulates the production of platelet count | — | Farrell C et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2014) | [10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=eltrombopag).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` inhibitor/substrate, `SLCO1B1` inhibitor, `UGT1A1` inhibitor/substrate, `UGT1A3` substrate, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: MPL (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gibiansky_2011.pdf` | Gibiansky E et al., Population pharmacokinetics of eltrombo…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010375427](https://doi.org/10.1177/0091270010375427) | [20663993](https://pubmed.ncbi.nlm.nih.gov/20663993) | The paper reports a population PK model for eltrombopag with explicit numeric values for CL/F, Vc/F, Vp/F, and Q/F in the abstract. |
| `Hayes_2011.pdf` | Hayes S et al., Population PK/PD modeling of eltrombopa…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010383019](https://doi.org/10.1177/0091270010383019) | [21148042](https://pubmed.ncbi.nlm.nih.gov/21148042) | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Hayes_2013.pdf` | Hayes S et al., Population PK/PD modeling of eltrombopa…, Cancer chemotherapy and pha… (2013) | popPK | 10 | [10.1007/s00280-013-2150-9](https://doi.org/10.1007/s00280-013-2150-9) | [23564375](https://pubmed.ncbi.nlm.nih.gov/23564375) | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Saleh_2019.pdf` | Saleh MI et al., Bayesian Population Pharmacokinetic Mod…, European journal of drug me… (2019) | popPK | 10 | [10.1007/s13318-018-0490-x](https://doi.org/10.1007/s13318-018-0490-x) | [29948848](https://pubmed.ncbi.nlm.nih.gov/29948848) | The paper reports a population PK model for eltrombopag with specific numeric values for clearance, volume of distribution, and absorption parameters in the abstract. |
| `Wire_2018.pdf` | Wire MB et al., Modeling and Simulation Support Eltromb…, Clinical pharmacology and t… (2018) | popPK | 10 | [10.1002/cpt.1066](https://doi.org/10.1002/cpt.1066) | [29536526](https://pubmed.ncbi.nlm.nih.gov/29536526) | The paper describes a population PK/PD model for eltrombopag in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Wu_2015.pdf` | Wu K et al., Population Pharmacokinetic and Pharmaco…, Clinical therapeutics (2015) | popPK | 10 | [10.1016/j.clinthera.2015.03.024](https://doi.org/10.1016/j.clinthera.2015.03.024) | [25929594](https://pubmed.ncbi.nlm.nih.gov/25929594) | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Zhang_2015.pdf` | Zhang J et al., Modeling and simulation support eltromb…, Pharmaceutical research (2015) | popPK | 10 | [10.1007/s11095-014-1594-x](https://doi.org/10.1007/s11095-014-1594-x) | [25534682](https://pubmed.ncbi.nlm.nih.gov/25534682) | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Zhang_2024.pdf` | Zhang W et al., Efficacy, Safety, and Population Pharma…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2430](https://doi.org/10.1002/jcph.2430) | [38497347](https://pubmed.ncbi.nlm.nih.gov/38497347) | The paper describes a population pharmacokinetic model for eltrombopag in children, but the specific numeric parameter values (CL/F, V/F) are not present in the provided abstract text. |

<sub>queue written 2026-10-05T18:34:20.612781+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hayes_2011 | relevant | 10 | 0 | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Hayes_2013 | relevant | 10 | 0 | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Wire_2018 | relevant | 10 | 0 | The paper describes a population PK/PD model for eltrombopag in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Wu_2015 | relevant | 10 | 0 | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Zhang_2015 | relevant | 10 | 0 | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Zhang_2024 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for eltrombopag in children, but the specific numeric parameter values (CL/F, V/F) are not present in the provided abstract text. |
| popPK | van_2023 | irrelevant | 0 | 0 | The study evaluates hemostatic and coagulation parameters (platelet function, thrombin generation) rather than pharmacokinetic disposition parameters for eltrombopag. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 18:34 UTC</sub>
