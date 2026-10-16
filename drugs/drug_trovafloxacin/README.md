<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;trovafloxacin&quot;}]"></div>

# trovafloxacin

- **generic name:** trovafloxacin
- **ATC codes:** `J01MA13`
- **DrugBank:** [DB00685](https://go.drugbank.com/drugs/DB00685) · **PubChem:** [CID 62959](https://pubchem.ncbi.nlm.nih.gov/compound/62959)
- **molar mass:** 416.36 g/mol (C20H15F3N4O3) — DrugBank
- **groups:** approved, withdrawn

## About

Trovafloxacin is a fluoroquinolone antibiotic that was used to treat bacterial infections, including respiratory, sexually transmitted, and other bacterial infections. It has been withdrawn and is no longer available, including withdrawal of its products in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q544393](https://www.wikidata.org/wiki/Q544393) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:27 | 2:10 | 0/0/0 | 0/3/0 | 1/0/3 | 32,540/2,053 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Peterson_2002_K](drugs/drug_trovafloxacin/pd_Peterson_2002_K.md) | rate of bacterial kill ← trovafloxacin · inhibition effect | — | Peterson ML et al., Pharmacodynamics of trovafloxacin and l…, Antimicrobial agents and ch… (2002) | [10.1128/AAC.46.1.203-210.2002](https://doi.org/10.1128/AAC.46.1.203-210.2002) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Stearne_2001_B_fragilis](drugs/drug_trovafloxacin/pd_Stearne_2001_B_fragilis.md) | Bacteroides fragilis ← trovafloxacin · direct Emax (saturable) effect | — | Stearne LE et al., In vitro activity of trovafloxacin agai…, Antimicrobial agents and ch… (2001) | [10.1128/AAC.45.1.243-251.2001](https://doi.org/10.1128/AAC.45.1.243-251.2001) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [van_1999_E_R_max](drugs/drug_trovafloxacin/pd_van_1999_E_R_max.md) | growth inhibition of Staphylococcus aureus ← trovafloxacin · inhibition effect | — | van den Broek PJ et al., Intracellular activity of trovafloxacin…, The Journal of antimicrobia… (1999) | [10.1093/jac/44.2.193](https://doi.org/10.1093/jac/44.2.193) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Annisa_2022](drugs/drug_trovafloxacin/pgx_Annisa_2022_UGT1A1_safety.md) | Annisa N et al., Transporter and metabolizer gene polymo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1063413](https://doi.org/10.3389/fphar.2022.1063413) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **ABCB1** | `Q88` · AUC | transport | [Annisa_2022](drugs/drug_trovafloxacin/pgx_Annisa_2022_ABCB1_Q88.md) | Annisa N et al., Transporter and metabolizer gene polymo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1063413](https://doi.org/10.3389/fphar.2022.1063413) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **SLCO1B1** | `Q88` · AUC | transport | [Annisa_2022](drugs/drug_trovafloxacin/pgx_Annisa_2022_SLCO1B1_Q88.md) | Annisa N et al., Transporter and metabolizer gene polymo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1063413](https://doi.org/10.3389/fphar.2022.1063413) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **UGT1A9** | `Q88` · AUC | metabolism | [Annisa_2022](drugs/drug_trovafloxacin/pgx_Annisa_2022_UGT1A9_Q88.md) | Annisa N et al., Transporter and metabolizer gene polymo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1063413](https://doi.org/10.3389/fphar.2022.1063413) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trovafloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | PGx paper |
| absorption | kidney | `ABCB1` transport | PGx paper |
| absorption | liver | `ABCB1` transport | PGx paper |
| absorption | placenta | `ABCB1` transport | PGx paper |
| absorption | small intestine | `ABCB1` transport | PGx paper |
| absorption | testis | `ABCB1` transport | PGx paper |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `UGT1A9` metabolism | PGx paper |
| metabolism | liver | `CYP1A2` inhibitor, `SLCO1B1` transport, `UGT1A1` safety_allele, `UGT1A9` metabolism | DrugBank actor |
| metabolism | small intestine | `UGT1A1` safety_allele | PGx paper |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TOP2A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peterson_2002.pdf` | Peterson ML et al., Pharmacodynamics of trovafloxacin and l…, Antimicrobial agents and ch… (2002) | pd | 5 | [10.1128/AAC.46.1.203-210.2002](https://doi.org/10.1128/AAC.46.1.203-210.2002) | [11751135](https://www.ncbi.nlm.nih.gov/pubmed/11751135) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Ross_2001.pdf` | Ross GH et al., Fluoroquinolone resistance in anaerobic…, Antimicrobial agents and ch… (2001) | pd | 5 | [10.1128/AAC.45.7.2136-2140.2001](https://doi.org/10.1128/AAC.45.7.2136-2140.2001) | [11408238](https://www.ncbi.nlm.nih.gov/pubmed/11408238) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `van_1999.pdf` | van den Broek PJ et al., Intracellular activity of trovafloxacin…, The Journal of antimicrobia… (1999) | pd | 4 | [10.1093/jac/44.2.193](https://doi.org/10.1093/jac/44.2.193) | [10473225](https://www.ncbi.nlm.nih.gov/pubmed/10473225) | metadata signals extractable PD data (EC50) |
| `Fujiwara_2015.pdf` | Fujiwara R et al., UDP-glucuronosyltransferase (UGT) 1A1 m…, Drug metabolism and pharmac… (2015) | pgx | 8 | [10.1016/j.dmpk.2014.09.003](https://doi.org/10.1016/j.dmpk.2014.09.003) | [25760534](https://www.ncbi.nlm.nih.gov/pubmed/25760534) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-10-07T12:27:34.857747+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chang_2013 | not_relevant | 0 | 0 | The paper investigates in vitro enzyme and transporter inhibition to predict bilirubin elevation, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of trovafloxacin. |
| popPK | Hamzah_2000 | irrelevant | 0 | 0 | The study is an in-vitro investigation of antimalarial activity and does not report any pharmacokinetic disposition parameters for trovafloxacin. |
| PGx | Mitsugi_2016 | not_relevant | 2 | 0 | The paper investigates the toxicological mechanism (CXCL2 induction) of trovafloxacin acyl-glucuronide using induced cell models and knockout mice, but does not report pharmacogenomic effects on standard PK or PD parameters. |
| popPK | Peterson_2002 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of antimicrobial efficacy (kill curves) and does not report pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Ross_2001 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic model assessing resistance in bacteria, not a pharmacokinetic study of the drug's disposition parameters in a biological system. |
| PGx | Rubiano_2021 | not_relevant | 0 | 0 | The paper evaluates liver microphysiological systems for drug toxicity and metabolism using trovafloxacin but does not investigate genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Stearne_2001 | irrelevant | 0 | 0 | The study is an in-vitro microbiology experiment assessing antimicrobial activity (time-kill), not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Zinner_1998 | irrelevant | 1 | 0 | The study is an in vitro dynamic model assessing antimicrobial activity, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for trovafloxacin. |
| popPK | van_1999 | irrelevant | 1 | 0 | The paper describes in vitro/intracellular antibacterial activity (microbiology) rather than pharmacokinetic disposition parameters for trovafloxacin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
