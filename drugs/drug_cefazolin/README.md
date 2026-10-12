<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefazolin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefazolin_Ryan2022_reference&quot;,&quot;label&quot;:&quot;Ryan_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/Cefazolin_Ryan2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefazolin_Santavy2023_reference&quot;,&quot;label&quot;:&quot;Santavy_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/Cefazolin_Santavy2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefazolin

- **generic name:** cefazolin
- **ATC codes:** `J01DB04`
- **DrugBank:** [DB01327](https://go.drugbank.com/drugs/DB01327) · **PubChem:** [CID 33255](https://pubchem.ncbi.nlm.nih.gov/compound/33255)
- **molar mass:** 454.507 g/mol (C14H14N8O4S3) — DrugBank
- **groups:** approved, investigational

## About

Cefazolin is a first-generation cephalosporin antibiotic used to treat bacterial infections such as staphylococcal and urinary tract infections. It is an approved medicine and appears on the WHO list of essential medicines, so it is widely used around the world.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415739](https://www.wikidata.org/wiki/Q415739) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefazolin | parent | 454.507 | C14H14N8O4S3 | DrugBank | [33255](https://pubchem.ncbi.nlm.nih.gov/compound/33255) | Alli_2023, Lanoiselée_2021, Ryan_2022, Santavy_2023, Wassef_2026, Šantavý_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:57 | 6:20 | 2/4/2 | 0/0/1 | 0/0/0 | 316,058/15,415 | einfracz / qwen3.8-27b | 9 | 1/7 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span> | [Ryan_2022_reference](drugs/drug_cefazolin/Cefazolin_Ryan2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ryan RL et al., Plasma and Interstitial Fluid Pharmacok…, Antimicrobial agents and ch… (2022) | [10.1128/aac.00419-22](https://doi.org/10.1128/aac.00419-22) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span> | [Santavy_2023_reference](drugs/drug_cefazolin/Cefazolin_Santavy2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Santavy P et al., Population pharmacokinetics of three al…, Biomedical papers of the Me… (2023) | [10.5507/bp.2022.033](https://doi.org/10.5507/bp.2022.033) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Lanoiselée_2021_reference](drugs/drug_cefazolin/Cefazolin_Lanoisele2021_reference.md) | — | 2-compartment (no model) | 3 | Lanoiselée J et al., Population pharmacokinetic model of cef…, Scientific reports (2021) | [10.1038/s41598-021-99162-7](https://doi.org/10.1038/s41598-021-99162-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Šantavý_2022_reference](drugs/drug_cefazolin/Cefazolin_antav2022_reference.md) | — | 3-compartment (no model) | 5 | Šantavý P et al., Population Pharmacokinetics of Prophyla…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11111582](https://doi.org/10.3390/antibiotics11111582) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Alli_2023_mean](drugs/drug_cefazolin/Cefazolin_Alli2023_mean.md) | — | 2-compartment (no model) | 7 | Alli A et al., Peri-operative pharmacokinetics of cefa…, PloS one (2023) | [10.1371/journal.pone.0291425](https://doi.org/10.1371/journal.pone.0291425) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Alli_2023_median](drugs/drug_cefazolin/Cefazolin_Alli2023_median.md) | — | 2-compartment (no model) | 7 | Alli A et al., Peri-operative pharmacokinetics of cefa…, PloS one (2023) | [10.1371/journal.pone.0291425](https://doi.org/10.1371/journal.pone.0291425) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wassef_2026_all](drugs/drug_cefazolin/Cefazolin_Wassef2026_all.md) | — | 1-compartment (no model) | 7 | Wassef A et al., Cefazolin surgical prophylaxis in obesi…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01677-25](https://doi.org/10.1128/aac.01677-25) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wassef_2026_dosage](drugs/drug_cefazolin/Cefazolin_Wassef2026_dosage.md) | — | 1-compartment (no model) | 7 | Wassef A et al., Cefazolin surgical prophylaxis in obesi…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01677-25](https://doi.org/10.1128/aac.01677-25) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Smith_2024_Kmax_ECs](drugs/drug_cefazolin/pd_Smith_2024_Kmax_ECs.md) | E. coli bacterial killing rate ← cefazolin · direct Emax (saturable) effect | model (no simulator) | Smith NM et al., Influence of β-lactam pharmacodynamics…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1339858](https://doi.org/10.3389/fphar.2024.1339858) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Smith_2024_Kmax_SC](drugs/drug_cefazolin/pd_Smith_2024_Kmax_SC.md) | S. aureus bacterial killing rate ← cefazolin · direct Emax (saturable) effect | model (no simulator) | Smith NM et al., Influence of β-lactam pharmacodynamics…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1339858](https://doi.org/10.3389/fphar.2024.1339858) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefazolin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | blood | `TPMT` substrate | DrugBank actor |
| metabolism | liver | `TPMT` substrate | DrugBank actor |
| excretion | kidney | `ABCC4` substrate, `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IL15 (inhibitor), IL2 (inhibitor), PON1 (inhibitor), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 100 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 8  ·  extracted 2  ·  needs_review 2  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2024.pdf` | Liu S et al., Morphomics-informed population pharmaco…, Pharmacotherapy (2024) | popPK | 10 | [10.1002/phar.2878](https://doi.org/10.1002/phar.2878) | [37728152](https://pubmed.ncbi.nlm.nih.gov/37728152) | The paper is a relevant population PK study for cefazolin in humans, but specific quantitative parameter estimates (CL, V) are not listed in the provided abstract evidence. |
| `Ryan_2022.pdf` | Ryan RL et al., Plasma and Interstitial Fluid Pharmacok…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.00419-22](https://doi.org/10.1128/aac.00419-22) | [35762797](https://pubmed.ncbi.nlm.nih.gov/35762797) | The study reports quantitative PK parameters (clearance, volume of distribution) for cefazolin in a population of bariatric surgery patients. |
| `Scala-Bertola_2025.pdf` | Scala-Bertola J et al., Population pharmacokinetics of cefazoli…, Biomedicine & pharmacothera… (2025) | popPK | 10 | [10.1016/j.biopha.2025.118150](https://doi.org/10.1016/j.biopha.2025.118150) | [40393279](https://pubmed.ncbi.nlm.nih.gov/40393279) | The paper describes a population pharmacokinetic model of cefazolin with numeric median concentrations, but specific model parameter estimates (CL, V, Q) are not listed in the provided evidence. |
| `Pelligand_2024.pdf` | Pelligand L et al., Population pharmacokinetic meta-analysi…, Veterinary journal (London,… (2024) | popPK | 8 | [10.1016/j.tvjl.2024.106136](https://doi.org/10.1016/j.tvjl.2024.106136) | [38759725](https://pubmed.ncbi.nlm.nih.gov/38759725) | The study is a population PK analysis of cefazolin in dogs, but the specific numeric PK parameter values (CL, V) are not listed in the provided text, only dosing intervals and timing are reported. |

<sub>queue written 2026-10-07T10:52:01.969238+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul-Mutakabbir_2020 | irrelevant | 2 | 4 | Cefazolin is used as a comparator/co-administered agent in an in vitro PK/PD model, not as the primary subject for population PK parameter estimation, although simulated human PK values are provided. |
| popPK | Ahmed_2024 | irrelevant | 2 | 2 | The study focuses on in vitro protein binding and antibacterial growth inhibition rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Bahnasawy_2025 | irrelevant | 0 | 0 | The study is an in vitro PK/PD modeling analysis of bacterial killing dynamics and protein binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Dallmann_2019 | irrelevant | 2 | 1 | This is a review article that only qualitatively cites cefazolin PK parameters from other studies without providing original quantitative data or model values. |
| popPK | Del_2024 | irrelevant | 2 | 0 | The study focuses on cephalothin as the subject drug in dogs, and cefazolin is only mentioned as a related class drug without providing specific quantitative PK parameters for cefazolin. |
| popPK | Liu_2024 | relevant | 10 | 2 | The paper is a relevant population PK study for cefazolin in humans, but specific quantitative parameter estimates (CL, V) are not listed in the provided abstract evidence. |
| popPK | Mancheño-Losa_2025 | irrelevant | 0 | 0 | The study is an in-vitro PK/PD biofilm efficacy trial where cefazolin serves only as a comparator antibiotic, and the paper does not report population pharmacokinetic parameters (CL, V, etc.) for cefazolin. |
| popPK | Moine_2013 | irrelevant | 3 | 0 | This is a pharmacodynamic simulation study that cites literature for PK parameters, but no specific numeric PK values for cefazolin are provided in the text. |
| popPK | Pelligand_2024 | relevant | 8 | 2 | The study is a population PK analysis of cefazolin in dogs, but the specific numeric PK parameter values (CL, V) are not listed in the provided text, only dosing intervals and timing are reported. |
| popPK | Scala-Bertola_2025 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model of cefazolin with numeric median concentrations, but specific model parameter estimates (CL, V, Q) are not listed in the provided evidence. |
| popPK | Smith_2024 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study evaluating antibiotic killing and bacterial interactions, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for cefazolin. |
| popPK | Song_2018 | irrelevant | 2 | 0 | The paper is a pharmacodynamic Monte Carlo simulation using literature-derived PK parameters, and no original quantitative PK parameter values (CL, V, etc.) for cefazolin are present in the evidence. |
| popPK | Zelenitsky_2016 | irrelevant | 4 | 0 | The paper is a simulation study that uses existing PK parameters (not reported in the evidence) to evaluate dosing, and no quantitative PK parameter values (CL, V, etc.) for cefazolin are present in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:52 UTC</sub>
