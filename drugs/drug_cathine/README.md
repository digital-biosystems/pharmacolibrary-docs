<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;cathine&quot;}]"></div>

# cathine

- **generic name:** cathine
- **ATC codes:** `A08AA07`
- **DrugBank:** [DB01486](https://go.drugbank.com/drugs/DB01486) · **PubChem:** [CID 441457](https://pubchem.ncbi.nlm.nih.gov/compound/441457)
- **molar mass:** 151.2056 g/mol (C9H13NO) — DrugBank
- **groups:** experimental, illicit

## About

Cathine is classified as a centrally acting antiobesity preparation, indicating use against obesity. It is not an established medicine: databases list it as experimental and illicit, so its use is effectively restricted or prohibited rather than widely approved.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423797](https://www.wikidata.org/wiki/Q423797) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:25 | 1:59 | 0/0/0 | 1/0/0 | 0/0/2 | 64,045/2,274 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Lim_2022_CYP2A6](drugs/drug_cathine/pd_Lim_2022_CYP2A6.md) | CYP2A6 activity ← cathine · direct Emax (saturable) effect | — | Lim SYM et al., Protein-Ligand Identification and In Vi…, International journal of to… (2022) | [10.1177/10915818221103790](https://doi.org/10.1177/10915818221103790) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Lim_2022_CYP3A4](drugs/drug_cathine/pd_Lim_2022_CYP3A4.md) | CYP3A4 activity ← cathine · direct Emax (saturable) effect | — | Lim SYM et al., Protein-Ligand Identification and In Vi…, International journal of to… (2022) | [10.1177/10915818221103790](https://doi.org/10.1177/10915818221103790) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **SLC22A1** | `Q1` · Km | transport | [Jensen_2020](drugs/drug_cathine/pgx_Jensen_2020_SLC22A1_Q1.md) | Jensen O et al., Cellular Uptake of Psychostimulants - A…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.609811](https://doi.org/10.3389/fphar.2020.609811) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **SLC22A2** | `Q1` · Km | transport | [Jensen_2020](drugs/drug_cathine/pgx_Jensen_2020_SLC22A2_Q1.md) | Jensen O et al., Cellular Uptake of Psychostimulants - A…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.609811](https://doi.org/10.3389/fphar.2020.609811) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cathine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLC22A1` transport | PGx paper |
| excretion | kidney | `SLC22A2` transport | PGx paper |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ademiluyi_2016.pdf` | Ademiluyi AO et al., Alkaloid extracts from Jimson weed (Dat…, Neurotoxicology (2016) | pd | 4 | [10.1016/j.neuro.2016.06.012](https://doi.org/10.1016/j.neuro.2016.06.012) | [27450719](https://www.ncbi.nlm.nih.gov/pubmed/27450719) | metadata signals extractable PD data (EC50) |
| `Bedada_2015.pdf` | Bedada W et al., The Psychostimulant Khat (Catha edulis)…, Journal of clinical psychop… (2015) | pgx | 5 | [10.1097/JCP.0000000000000413](https://doi.org/10.1097/JCP.0000000000000413) | [26444948](https://www.ncbi.nlm.nih.gov/pubmed/26444948) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-04T20:23:44.776663+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ademiluyi_2016 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Ademiluyi_2016 | not_relevant | 0 | 0 | The paper studies alkaloid extracts from Jimson weed (Datura stramonium) and their effects on purinergic enzymes, not the specific drug cathine, and does not report pharmacodynamic parameters for cathine. |
| PGx | Bedada_2015 | not_relevant | 0 | 0 | The paper investigates the effect of khat consumption on CYP2D6 activity using dextromethorphan as a probe, not the effect of a gene variant on the PK/PD of cathine. |
| popPK | Dimba_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apoptosis induced by khat extract and its alkaloids, containing no pharmacokinetic parameters for cathine. |
| popPK | Frosch_1977 | irrelevant | 0 | 0 | The study investigates D-norpseudoephedrine, not cathine. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological and chemical analysis of Ephedra species, not a pharmacokinetic study, and does not report any disposition parameters for cathine. |
| PD | Guo_2025 | not_relevant | 0 | 0 | The paper focuses on chemical profiling and network pharmacology of Ephedra species, with no specific pharmacodynamic or exposure-response analysis for cathine. |
| popPK | Lim_2022 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of CYP inhibition (IC50/Ki) and molecular docking, not a pharmacokinetic study reporting disposition parameters like clearance or volume for cathine. |
| PGx | Lim_2022 | not_relevant | 0 | 0 | The study investigates in vitro CYP inhibition by cathine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Mohan_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis in cell lines and does not report any pharmacokinetic parameters for cathine. |
| popPK | Moya-Huff_1987 | irrelevant | 0 | 0 | The study focuses on the cardiovascular pharmacodynamics of norephedrine isomers in rats and does not report pharmacokinetic parameters for cathine. |
| popPK | Pehek_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of drug discrimination and tolerance, reporting no quantitative pharmacokinetic parameters for cathine. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of transporter and receptor binding, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Widler_1994 | irrelevant | 2 | 2 | The study focuses on cathinone (the primary active alkaloid of khat) rather than cathine, and reports only basic non-compartmental parameters (Cmax, AUC, t1/2) without volume or clearance values. |
| PD | Widler_1994 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative/significant changes in PD endpoints (ARCI, BP, HR) but does not provide a concentration-effect model, Emax/EC50, or numeric dose-response curve parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
