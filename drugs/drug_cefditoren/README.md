<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefditoren&quot;}]"></div>

# cefditoren

- **generic name:** cefditoren
- **ATC codes:** `J01DD16`
- **DrugBank:** [DB01066](https://go.drugbank.com/drugs/DB01066) · **PubChem:** [CID 9870843](https://pubchem.ncbi.nlm.nih.gov/compound/9870843)
- **molar mass:** 506.578 g/mol (C19H18N6O5S3) — DrugBank
- **groups:** approved, investigational

## About

Cefditoren is a third-generation cephalosporin antibiotic used to treat bacterial infections such as acute bronchitis, pharyngitis, upper respiratory tract infections, pneumonia, and gram-negative infections. It is an approved oral antibiotic, used mainly for respiratory tract infections, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3664175](https://www.wikidata.org/wiki/Q3664175) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefditoren | parent | 506.578 | C19H18N6O5S3 | DrugBank | [9870843](https://pubchem.ncbi.nlm.nih.gov/compound/9870843) | Matsumoto_2013 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| ka | kabs | 0.527 | 1/h | 0.527 hr(-1) | pediatric patients with infection | &gt;153&lt; | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Matsumoto_2013_reference](drugs/drug_cefditoren/Cefditoren_Matsumoto2013_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Matsumoto_2013_reference](drugs/drug_cefditoren/Cefditoren_Matsumoto2013_reference.md) | — | 1-compartment (no model) | 2 | Matsumoto K et al., Population pharmacokinetic analysis of…, The Japanese journal of ant… (2013) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefditoren).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:24 | 5:03 | 1/0/0 | 0/0/0 | 0/0/0 | 294,921/26,416 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lodise_2008.pdf` | Lodise TP et al., Use of population pharmacokinetic model…, Antimicrobial agents and ch… (2008) | popPK | 10 | [10.1128/AAC.00736-06](https://doi.org/10.1128/AAC.00736-06) | [17485507](https://pubmed.ncbi.nlm.nih.gov/17485507) | The paper describes a population PK model and reports MIC cutoffs where target attainment fails, but specific numeric PK parameter values (CL, V, ka, etc.) are not present in the provided text. |
| `Matsumoto_2013.pdf` | Matsumoto K et al., Population pharmacokinetic analysis of…, The Japanese journal of ant… (2013) | popPK | 10 | not captured | [24649799](https://pubmed.ncbi.nlm.nih.gov/24649799) | The paper reports a population PK model for cefditoren in pediatric patients with all numeric parameter values (ka, CL/F, Vd/F, Tlag) explicitly provided in the text. |
| `Matsumoto_2014.pdf` | Matsumoto K et al., Population pharmacokinetics of cefditor…, The Japanese journal of ant… (2014) | popPK | 10 | not captured | [24809208](https://pubmed.ncbi.nlm.nih.gov/24809208) | The paper reports a population pharmacokinetic model for cefditoren pivoxil in humans, but the specific numeric values for clearance, volume, and rate constants are not present in the provided abstract or evidence text. |
| `Igarashi_2023.pdf` | Igarashi Y et al., In vivo Pharmacokinetics/Pharmacodynami…, Pharmaceutical research (2023) | popPK | 9 | [10.1007/s11095-023-03539-4](https://doi.org/10.1007/s11095-023-03539-4) | [37253866](https://pubmed.ncbi.nlm.nih.gov/37253866) | The study performs PK/PD modeling in mice and refers to human PPK data, but the specific numeric PK parameter values are not present in the provided text. |
| `Sádaba_2007.pdf` | Sádaba B et al., Pharmacokinetic/pharmacodynamic serum a…, Revista espanola de quimiot… (2007) | popPK | 7 | not captured | [17530036](https://pubmed.ncbi.nlm.nih.gov/17530036) | The study reports key quantitative PK parameters (half-life, Cmax) for cefditoren, but lacks explicit clearance, volume, or compartmental model parameters required for population-PK extraction. |

<sub>queue written 2026-10-07T10:20:16.871522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | González_2011 | irrelevant | 2 | 2 | The study is an in vitro pharmacodynamic simulation of antibiotic effects on bacterial resistance, not a pharmacokinetic study measuring disposition parameters like clearance or volume in a biological subject. |
| popPK | Igarashi_2023 | relevant | 9 | 0 | The study performs PK/PD modeling in mice and refers to human PPK data, but the specific numeric PK parameter values are not present in the provided text. |
| popPK | Lodise_2008 | relevant | 10 | 0 | The paper describes a population PK model and reports MIC cutoffs where target attainment fails, but specific numeric PK parameter values (CL, V, ka, etc.) are not present in the provided text. |
| popPK | Matsumoto_2014 | relevant | 10 | 2 | The paper reports a population pharmacokinetic model for cefditoren pivoxil in humans, but the specific numeric values for clearance, volume, and rate constants are not present in the provided abstract or evidence text. |
| popPK | Matsumoto_2014_2 | irrelevant | 2 | 0 | The paper uses existing population PK parameters for simulation but does not report original quantitative PK parameter values (CL, V, etc.) for cefditoren in the provided evidence. |
| popPK | Peric_2003 | irrelevant | 1 | 0 | The study is a microbiological susceptibility assessment using PK/PD breakpoints as criteria, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for cefditoren. |
| popPK | Rodríguez-Gascón_2020 | irrelevant | 1 | 0 | The study is a Monte Carlo simulation using PK data from other sources, and no original quantitative PK parameter values (CL, V, ka, t1/2) are reported in the evidence. |
| popPK | Sevillano_2008_2 | irrelevant | 1 | 0 | The paper reports in vitro pharmacodynamic data (bactericidal activity) rather than quantitative pharmacokinetic parameters (CL, V, etc.) for cefditoren. |
| popPK | Yamada_2022 | relevant | 3 | 1 | The paper uses a cefditoren population PK model for PTA simulations, but the actual parameter values (CL, V, etc.) are not listed in the provided evidence, only derived PTA percentages. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:20 UTC</sub>
