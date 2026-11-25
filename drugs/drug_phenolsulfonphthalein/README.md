<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;phenolsulfonphthalein&quot;}]"></div>

# phenolsulfonphthalein

- **generic name:** phenolsulfonphthalein
- **ATC codes:** `V04CH03`
- **DrugBank:** [DB13212](https://go.drugbank.com/drugs/DB13212) · **PubChem:** none
- **molar mass:** 354.38 g/mol (C19H14O5S) — DrugBank
- **groups:** experimental

## About

Phenolsulfonphthalein is a diagnostic agent used to test for renal function and ureteral injuries. It is also used as a pH indicator in cell biology laboratories.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q418719](https://www.wikidata.org/wiki/Q418719), [Wikipedia](https://en.wikipedia.org/wiki/Phenol_red?oldid=1385287548) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenolsulfonphthalein | parent | 354.38 | C19H14O5S | DrugBank | — | Hinchcliff_1987, Nishida_2003 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Hinchcliff_1987_reference](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Hinchcliff1987_reference.md) | — | 1-compartment (no model) | 3 | Hinchcliff KW et al., Pharmacokinetics of phenolsulfonphthale…, American journal of veterin… (1987) | — |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Nishida_2003_ccl_4](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Nishida2003_ccl_4.md) | — | 1-compartment (no model) | 7 | Nishida K et al., Influence of liver disease on phenolsul…, Biological & pharmaceutical… (2003) | [10.1248/bpb.26.988](https://doi.org/10.1248/bpb.26.988) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ gal](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Nishida2003_gal.md) | — | 1-compartment (no model) | 8 |  |  |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ none_a](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Nishida2003_none_a.md) | — | 1-compartment (no model) | 7 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:59 | 0:03 | 1/3/0 | 0/0/0 | 0/0/0 | 4,294/151 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hinchcliff_1987 | not_relevant | 0 | 0 | The paper reports pharmacokinetic differences between horses and ponies (species/breed), not the effect of a specific gene variant or genotype on PK parameters. |
| popPK | Honjo_2014 | relevant | 9 | 2 | Study reports PK of PSP in rats using a two-compartment model, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Honjo_2014 | not_relevant | 0 | 10 | The study reports the effect of a drug (lumiracoxib) on pharmacokinetics, not a gene variant/genotype (pharmacogenomic effect). |
| popPK | Kym_1996 | irrelevant | 0 | 0 | The study investigates chemical impurities in the pH indicator phenol red and their effect on cellular ion transport, not the pharmacokinetics of the phenolsulfonphthalein drug. |
| PGx | Kym_1996 | not_relevant | 0 | 0 | The paper reports pharmacological effects of impurities on cell ion transport, not pharmacogenomic effects on phenolsulfonphthalein pharmacokinetics/pharmacodynamics. |
| PGx | Nishida_2003 | not_relevant | 0 | 0 | The paper investigates the influence of liver disease models (chemical intoxication) on PK, not genetic variants or genotypes. |
| popPK | Nishida_2004 | irrelevant | 3 | 4 | The study reports an absorption rate constant (ka) and a two-compartment model fit for phenolsulfonphthalein in rats, but lacks key disposition parameters like clearance or volume. |
| PGx | Nishida_2004 | not_relevant | 0 | 0 | The study investigates the physical absorption mechanism based on molecular weight in rats and does not report any pharmacogenomic effects involving gene variants or genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenolsulfonphthalein%5D&body=Drug%3A%20phenolsulfonphthalein%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_phenolsulfonphthalein/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:59 UTC</sub>
