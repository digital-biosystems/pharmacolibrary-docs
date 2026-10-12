<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Pibrentasvir&quot;}]"></div>

# Pibrentasvir

- **generic name:** Pibrentasvir
- **ATC codes:** `J05AP57`
- **DrugBank:** [DB13878](https://go.drugbank.com/drugs/DB13878) · **PubChem:** [CID 58031952](https://pubchem.ncbi.nlm.nih.gov/compound/58031952)
- **molar mass:** 1113.201 g/mol (C57H65F5N10O8) — DrugBank
- **groups:** approved, investigational

## About

Pibrentasvir is an antiviral drug used to treat hepatitis C virus infections. It is an approved medicine and is used in combination with other hepatitis C treatments.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q39048005](https://www.wikidata.org/wiki/Q39048005) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pibrentasvir | parent | 1113.2 | C57H65F5N10O8 | DrugBank | [58031952](https://pubchem.ncbi.nlm.nih.gov/compound/58031952) | Thakre_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:24 | 2:23 | 0/0/1 | 3/0/0 | 0/0/0 | 171,460/6,476 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Thakre_2026_reference](drugs/drug_pibrentasvir/Pibrentasvir_Thakre2026_reference.md) | held back | 1-compartment, oral | 7 (+2 cov.) | Thakre N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01637-1](https://doi.org/10.1007/s40262-026-01637-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ng_2017_HCV_replication](drugs/drug_pibrentasvir/pd_Ng_2017_HCV_replication.md) | HCV replication in replicon cells (luciferase reporter activity) ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Ng TI et al., Antimicrobial agents and ch… (2017) | [10.1128/AAC.02558-16](https://doi.org/10.1128/AAC.02558-16) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nguyen_2020_RLU](drugs/drug_pibrentasvir/pd_Nguyen_2020_RLU.md) | HCV replicon replication (luciferase activity) ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Nguyen D et al., Efficacy of NS5A inhibitors against unu…, Journal of hepatology (2020) | [10.1016/j.jhep.2020.05.029](https://doi.org/10.1016/j.jhep.2020.05.029) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Schnell_2018_EC50](drugs/drug_pibrentasvir/pd_Schnell_2018_EC50.md) | HCV replicon replication (luciferase reporter) inhibition by pibrentasvir in transient replicon assay ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Schnell G et al., Hepatitis C virus genetic diversity by…, PloS one (2018) | [10.1371/journal.pone.0205186](https://doi.org/10.1371/journal.pone.0205186) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Suleiman_2020.pdf` | Suleiman AA et al., Population Pharmacokinetics of Glecapre…, Journal of clinical pharmac… (2020) | popPK | 9 | [10.1002/jcph.1524](https://doi.org/10.1002/jcph.1524) | [31515816](https://pubmed.ncbi.nlm.nih.gov/31515816) | Population PK (2-compartment model) of pibrentasvir in humans, but only exposure ratios (e.g., 21% higher AUC with cirrhosis) appear; CL/V/parameter estimates likely in tables/supplements not provided. |

<sub>queue written 2026-10-07T16:22:55.594296+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ng_2017 | irrelevant | 0 | 0 | In vitro antiviral activity/resistance study with EC50s only; no PK disposition parameters (CL, V, half-life, or PK model) for pibrentasvir. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | In vitro replicon study of antiviral EC50 efficacy, not a PK study; no disposition parameters (CL, V, half-life) for pibrentasvir are reported. |
| popPK | Oberoi_2020 | irrelevant | 2 | 1 | This is a QT/ECG safety study; pibrentasvir is dosed but no PK disposition parameters (CL, V, half-life, population-PK model) are reported, only concentration-QTc relationships. |
| popPK | Schnell_2018 | irrelevant | 0 | 0 | This is an HCV genetic diversity/virology study; pibrentasvir is only the treatment drug and no PK parameters (CL, V, half-life, PK model) are reported. |
| popPK | Suleiman_2020 | relevant | 9 | 4 | Population PK (2-compartment model) of pibrentasvir in humans, but only exposure ratios (e.g., 21% higher AUC with cirrhosis) appear; CL/V/parameter estimates likely in tables/supplements not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:22 UTC</sub>
