<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;bempedoic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BempedoicAcid_Amore2023_reference&quot;,&quot;label&quot;:&quot;Amore_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bempedoic_acid/BempedoicAcid_Amore2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BempedoicAcid_Jadhav2023_reference&quot;,&quot;label&quot;:&quot;Jadhav_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# bempedoic acid

- **generic name:** bempedoic acid
- **ATC codes:** `C10AX15`, `C10BA10`
- **DrugBank:** [DB11936](https://go.drugbank.com/drugs/DB11936) · **PubChem:** [CID 10472693](https://pubchem.ncbi.nlm.nih.gov/compound/10472693)
- **molar mass:** 344.492 g/mol (C19H36O5) — DrugBank
- **groups:** approved, investigational

## About

Bempedoic acid is a lipid-lowering medicine used to treat high cholesterol and other dyslipidaemias. It is authorised in the European Union and is used, alone or in combination with other lipid-modifying agents, to lower blood cholesterol.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27075007](https://www.wikidata.org/wiki/Q27075007) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bempedoic_acid | metabolite | 344.492 | C19H36O5 | DrugBank | [10472693](https://pubchem.ncbi.nlm.nih.gov/compound/10472693) | Jadhav_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 01:08 | 1:05 | 0/0/2 | 0/0/0 | 0/0/0 | 70,798/4,899 | einfracz / qwen3.8-27b | 5 | 0/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: unreported model parameter default(s): k21</sub><br><sub>route_to: `scholar`</sub> | [Amore_2023_reference](drugs/drug_bempedoic_acid/BempedoicAcid_Amore2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Amore BM et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2023) | [10.3390/pharmaceutics15051476](https://doi.org/10.3390/pharmaceutics15051476) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.944), gpt-oss:120b (not confirmed, agreement 0.789). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Jadhav_2023_reference](drugs/drug_bempedoic_acid/BempedoicAcid_Jadhav2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+4 cov.) | Jadhav SB et al., Population pharmacokinetic and pharmaco…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09864-w](https://doi.org/10.1007/s10928-023-09864-w) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bempedoic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `SLCO1B1` inhibitor, `SLCO1B3` inhibitor/substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCC3` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACLY (inhibitor), NUAK2 (activator), SLC27A2 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nguyen_2026 | irrelevant | 0 | 0 | The study is a clinical practice analysis of lipid-lowering therapy utilization and LDL-C goal achievement, reporting no pharmacokinetic parameters for bempedoic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 01:07 UTC</sub>
