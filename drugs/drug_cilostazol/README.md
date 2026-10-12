<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;cilostazol&quot;}]"></div>

# cilostazol

- **generic name:** cilostazol
- **ATC codes:** `B01AC23`
- **DrugBank:** [DB01166](https://go.drugbank.com/drugs/DB01166) · **PubChem:** [CID 2754](https://pubchem.ncbi.nlm.nih.gov/compound/2754)
- **molar mass:** 369.4607 g/mol (C20H27N5O2) — DrugBank
- **groups:** approved, investigational

## About

Cilostazol is a platelet aggregation inhibitor used to treat intermittent claudication and cerebral infarction. It is an approved medicine, though it carries a boxed warning and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q258591](https://www.wikidata.org/wiki/Q258591) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cilostazol | parent | 369.461 | C20H27N5O2 | DrugBank | [2754](https://pubchem.ncbi.nlm.nih.gov/compound/2754) | Lee_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:45 | 4:57 | 0/2/0 | 2/0/0 | 0/0/0 | 81,944/12,433 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed 1/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Lee_2014_reference](drugs/drug_cilostazol/Cilostazol_Lee2014_reference.md) | — | 1-compartment (no model) | 1 | Lee D et al., Population pharmacokinetic analysis of…, Therapeutic drug monitoring (2014) | [10.1097/FTD.0000000000000077](https://doi.org/10.1097/FTD.0000000000000077) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed 1/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yoo_2010_reference](drugs/drug_cilostazol/Cilostazol_Yoo2010_reference.md) | — | 1-compartment (no model) | 0 | Yoo HD et al., Population pharmacokinetic analysis of…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2009.03558.x](https://doi.org/10.1111/j.1365-2125.2009.03558.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span> | [Jung_2018_CT](drugs/drug_cilostazol/pd_Jung_2018_CT.md) | closure time ← cilostazol · indirect response — drug inhibits the production of closure time | — | Jung YS et al., Population pharmacodynamics of cilostaz…, Translational and clinical… (2018) | [10.12793/tcp.2018.26.2.93](https://doi.org/10.12793/tcp.2018.26.2.93) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Woo_2002_DBP](drugs/drug_cilostazol/pd_Woo_2002_DBP.md) | diastolic blood pressure ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Woo_2002_platelet_aggregation](drugs/drug_cilostazol/pd_Woo_2002_platelet_aggregation.md) | platelet aggregation ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Woo_2002_HR](drugs/drug_cilostazol/pd_Woo_2002_HR.md) | heart rate ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cilostazol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PDE3A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cui_2020.pdf` | Cui A et al., Pharmacokinetic modeling analysis of ci…, Xenobiotica; the fate of fo… (2020) | popPK | 10 | [10.1080/00498254.2019.1629042](https://doi.org/10.1080/00498254.2019.1629042) | [31181990](https://pubmed.ncbi.nlm.nih.gov/31181990) | The study describes a population PK model for cilostazol in humans, but the specific numeric parameter values (CL, V, Ka, etc.) are not present in the provided evidence text. |
| `Lee_2014.pdf` | Lee D et al., Population pharmacokinetic analysis of…, Therapeutic drug monitoring (2014) | popPK | 10 | [10.1097/FTD.0000000000000077](https://doi.org/10.1097/FTD.0000000000000077) | [24739664](https://pubmed.ncbi.nlm.nih.gov/24739664) | The study reports a population PK model for cilostazol in humans with specific numeric values for absorption rate constants and relative changes in clearance provided in the abstract. |
| `Yoo_2010.pdf` | Yoo HD et al., Population pharmacokinetic analysis of…, British journal of clinical… (2010) | popPK | 10 | [10.1111/j.1365-2125.2009.03558.x](https://doi.org/10.1111/j.1365-2125.2009.03558.x) | [20078610](https://pubmed.ncbi.nlm.nih.gov/20078610) | The study reports a population pharmacokinetic model for cilostazol with explicit numeric values for clearance, volume, intercompartmental clearance, and absorption rate in the text. |
| `Woo_2002.pdf` | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | popPK | 9 | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) | [11956507](https://pubmed.ncbi.nlm.nih.gov/11956507) | The study reports a 2-compartment PK model for cilostazol in humans, but the specific numeric values for clearance, volume, and rate constants are not present in the provided abstract text. |
| `Yun_2014.pdf` | Yun HY et al., Semi-mechanistic modelling and simulati…, Basic & clinical pharmacolo… (2014) | popPK | 8 | [10.1111/bcpt.12222](https://doi.org/10.1111/bcpt.12222) | [24612881](https://pubmed.ncbi.nlm.nih.gov/24612881) | The paper describes a semi-mechanistic PK/PD model for cilostazol (including a two-compartment PK model), but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |

<sub>queue written 2026-10-05T12:40:33.708231+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cui_2020 | relevant | 10 | 0 | The study describes a population PK model for cilostazol in humans, but the specific numeric parameter values (CL, V, Ka, etc.) are not present in the provided evidence text. |
| popPK | Jung_2018 | irrelevant | 2 | 0 | The study reports population pharmacodynamic (PD) parameters (Kout, Emax, EC50) rather than pharmacokinetic (PK) disposition parameters (CL, V, ka), and the PK model values are not provided in the evidence. |
| popPK | Woo_2002 | relevant | 9 | 2 | The study reports a 2-compartment PK model for cilostazol in humans, but the specific numeric values for clearance, volume, and rate constants are not present in the provided abstract text. |
| popPK | Yoon_2022 | irrelevant | 0 | 0 | The study is a clinical trial analyzing the progression of cerebral microbleeds in patients treated with cilostazol or aspirin, and it does not report any pharmacokinetic parameters for cilostazol. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | The study investigates the association between ACE gene polymorphisms and cerebral microbleed progression, using cilostazol only as a treatment arm in the underlying trial, and reports no pharmacokinetic parameters. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | The paper describes a clinical trial design for cognitive outcomes in stroke patients and does not report any pharmacokinetic parameters for cilostazol. |
| popPK | Yun_2014 | relevant | 8 | 0 | The paper describes a semi-mechanistic PK/PD model for cilostazol (including a two-compartment PK model), but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 12:40 UTC</sub>
