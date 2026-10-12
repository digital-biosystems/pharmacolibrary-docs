<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;piroxicam&quot;}]"></div>

# piroxicam

- **generic name:** piroxicam
- **ATC codes:** `M01AC01`, `M02AA07`, `S01BC06`
- **DrugBank:** [DB00554](https://go.drugbank.com/drugs/DB00554) · **PubChem:** [CID 54676228](https://pubchem.ncbi.nlm.nih.gov/compound/54676228)
- **molar mass:** 331.346 g/mol (C15H13N3O4S) — DrugBank
- **groups:** approved, investigational

## About

Piroxicam is a non-steroidal anti-inflammatory drug used to treat inflammatory and rheumatic conditions such as osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis. It is an approved medicine, available in oral and topical forms for joint and muscular pain, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408676](https://www.wikidata.org/wiki/Q408676) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| piroxicam | parent | 331.346 | C15H13N3O4S | DrugBank | [54676228](https://pubchem.ncbi.nlm.nih.gov/compound/54676228) | Schiantarelli_1981 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:10 | 0:43 | 0/1/0 | 2/0/0 | 0/0/0 | 96,326/4,053 | einfracz / qwen3.8-27b | 15 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Schiantarelli_1981_reference](drugs/drug_piroxicam/Piroxicam_Schiantarelli1981_reference.md) | — | 1-compartment (no model) | 2 | Schiantarelli P et al., Some pharmacokinetic properties and bio…, Arzneimittel-Forschung (1981) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Baird_1989_ISC](drugs/drug_piroxicam/pd_Baird_1989_ISC.md) | short circuit current (bradykinin response) ← piroxicam · inhibition effect | — | Baird AW et al., Bradykinin stimulates electrogenic bica…, The Journal of pharmacology… (1989) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2000_PID](drugs/drug_piroxicam/pd_Wang_2000_PID.md) | pain relief ← piroxicam · delayed effect through an effect compartment | — | Wang D et al., Comparative population pharmacokinetic-…, Journal of clinical pharmac… (2000) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=piroxicam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2000.pdf` | Wang D et al., Comparative population pharmacokinetic-…, Journal of clinical pharmac… (2000) | popPK | 10 | not captured | [11075311](https://pubmed.ncbi.nlm.nih.gov/11075311) | The study reports population PK parameters (ka, half-life, model structure) for piroxicam in humans, with specific numeric values provided in the abstract for ka and t1/2, though central parameters like CL and V may be in the main text or figures not fully detailed here. |
| `Schiantarelli_1981.pdf` | Schiantarelli P et al., Some pharmacokinetic properties and bio…, Arzneimittel-Forschung (1981) | popPK | 9 | not captured | [6971114](https://pubmed.ncbi.nlm.nih.gov/6971114) | The study reports specific pharmacokinetic parameters for piroxicam, including plasma half-life in humans (~35 h), rodents (3-5.5 h), and specific compartmental half-lives in rabbits (0.67 h, 3.16 h). |

<sub>queue written 2026-10-07T01:10:37.142865+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baird_1989 | irrelevant | 0 | 0 | The study investigates bradykinin effects on guinea pig gallbladder ion transport, using piroxicam only as a cyclooxygenase inhibitor to confirm the mechanism, not as the subject drug for pharmacokinetic analysis. |
| popPK | Baird_2008 | irrelevant | 0 | 0 | The paper is a study on bradykinin's effects on intestinal ion transport where piroxicam is used only as a COX inhibitor to block prostaglandin synthesis, not as a PK subject. |
| popPK | Brayden_1994 | irrelevant | 0 | 0 | Piroxicam is used only as a prostaglandin synthetase inhibitor in an in-vitro electrophysiology study of rabbit Peyer's patches, with no pharmacokinetic parameters reported. |
| popPK | Cox_1994 | irrelevant | 0 | 0 | Piroxicam is used only as a tool to inhibit cyclo-oxygenase in an in-vitro study of CGRP receptors, with no pharmacokinetic parameters reported. |
| popPK | Imani_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of piroxicam analogs as anti-HIV agents, not on the pharmacokinetics of piroxicam itself. |
| popPK | Kozjek_1987 | irrelevant | 3 | 0 | The study is a bioequivalence trial reporting only AUC and Cmax without specific numeric values for PK parameters like clearance or volume. |
| popPK | Leung_1999 | irrelevant | 0 | 0 | The study investigates the mechanism of serotonin-stimulated anion secretion in rat epididymal epithelium, where piroxicam is used only as a pharmacological tool to block prostaglandin synthesis, not as the subject of PK analysis. |
| popPK | Mirfazaelian_2006 | irrelevant | 1 | 0 | The paper describes a software algorithm and uses piroxicam data only for verification without reporting the specific numeric PK parameters in the provided text. |
| popPK | Odeberg_2004 | irrelevant | 1 | 0 | Piroxicam is used as a co-administered agent to investigate pharmacodynamic effects on desmopressin, not as the subject of pharmacokinetic analysis. |
| popPK | Szederkényi_2024 | irrelevant | 0 | 0 | The study is an in vitro ex vivo microfluidic diffusion model for transdermal delivery, not a pharmacokinetic study measuring systemic disposition parameters (CL, V, T1/2) for piroxicam. |
| popPK | Thürmann_1995 | irrelevant | 1 | 0 | Piroxicam is used only as a co-administered drug to study the pharmacokinetics of recombinant hirudin, with no quantitative PK parameters reported for piroxicam itself. |
| popPK | Wade_2010 | irrelevant | 0 | 0 | The study is a mechanistic investigation of Prokineticin-1 in rat intestine, using piroxicam only as a pharmacological tool to block prostaglandin receptors, with no pharmacokinetic parameters reported. |
| popPK | Wang_2000 | relevant | 10 | 4 | The study reports population PK parameters (ka, half-life, model structure) for piroxicam in humans, with specific numeric values provided in the abstract for ka and t1/2, though central parameters like CL and V may be in the main text or figures not fully detailed here. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:10 UTC</sub>
