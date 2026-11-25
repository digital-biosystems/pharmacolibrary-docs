<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;quassia&quot;}]"></div>

# quassia

- **generic name:** quassia
- **ATC codes:** `P03AX04`
- **DrugBank:** [DB13263](https://go.drugbank.com/drugs/DB13263) · **PubChem:** none
- **groups:** experimental

## About

Quassia is a genus of plants from the Simaroubaceae family, known for containing bitter compounds used historically as remedies for parasitic skin infestations.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1947702](https://www.wikidata.org/wiki/Q1947702), [Wikipedia](https://en.wikipedia.org/wiki/Quassia?oldid=1378978576) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:43 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 4,430/160 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bertani_2005.pdf` | Bertani S et al., Evaluation of French Guiana traditional…, Journal of ethnopharmacology (2005) | pd | 4 | [10.1016/j.jep.2004.12.020](https://doi.org/10.1016/j.jep.2004.12.020) | [15849870](https://www.ncbi.nlm.nih.gov/pubmed/15849870) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-24 03:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertani_2005 | irrelevant | 0 | 0 | The study evaluates the in vitro and in vivo antimalarial activity of Quassia amara but does not report any pharmacokinetic parameters for quassia itself. |
| PGx | Bertani_2005 | not_relevant | 0 | 0 | The paper evaluates the antimalarial efficacy of traditional remedies (including Quassia amara) in vitro and in vivo, but it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bertani_2006 | irrelevant | 0 | 0 | The study is mechanistic/pharmacological focusing on antimalarial activity (IC50, ED50) of a specific compound (simalikalactone D) from Quassia, not pharmacokinetic parameters (CL, V, ka) of quassinoid compounds. |
| PGx | Bertani_2006 | not_relevant | 0 | 0 | The paper identifies the active antimalarial compound (simalikalactone D) in Quassia amara and its efficacy, but does not investigate any genetic variants or pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Boeno_2022 | irrelevant | 0 | 0 | The study investigates the in vitro antiplasmodial and cytotoxic effects of Homalolepis suffruticosa (a Quassia species) metabolites, but contains no pharmacokinetic data. |
| PGx | Boeno_2022 | not_relevant | 0 | 0 | The paper investigates the in vitro antimalarial activity and cytotoxicity of chemical compounds from Homalolepis suffruticosa, not the pharmacokinetics or pharmacodynamics of quassia, and contains no pharmacogenomic data. |
| popPK | Breaud_2025 | irrelevant | 0 | 0 | This is an in-vitro phytochemistry/antitubercular screening study of plant extracts including Quassia amara; no pharmacokinetic parameters for quassia are reported. |
| popPK | García-Barrantes_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic anti-ulcerogenic effects of Quassia amara extracts in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| PGx | García-Barrantes_2011 | not_relevant | 0 | 0 | The paper evaluates the anti-ulcerogenic efficacy of Quassia amara extracts in rodents and does not investigate the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kitagawa_1996 | irrelevant | 0 | 0 | The provided evidence contains no text, only metadata for a document processing software, thus offering no pharmacokinetic data for quassia. |
| PGx | Kitagawa_1996 | not_relevant | 0 | 0 | The text is a metadata header for GROBID software and contains no pharmacological, genetic, or pharmacokinetic information regarding quassia. |
| popPK | Lemma_2017 | irrelevant | 0 | 0 | The paper is a systematic review of in vitro antiplasmodial activities and contains no pharmacokinetic or disposition parameters for quassia. |
| PGx | Lemma_2017 | not_relevant | 0 | 0 | The paper is a systematic review of in vitro antiplasmodial activities and does not report pharmacogenomic effects on the PK/PD of quassia. |
| popPK | Mans_2016 | irrelevant | 0 | 0 | The study is an in vitro evaluation of plant extracts for anti-leishmanial activity and does not report pharmacokinetic parameters for quassia. |
| PGx | Mans_2016 | not_relevant | 0 | 0 | The paper evaluates in vitro anti-leishmanial efficacy of plant extracts and does not assess the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters of Quassia. |
| popPK | Mbatchi_2006 | irrelevant | 0 | 0 | The study focuses on in vitro antiplasmodial activity and cytotoxicity of plant extracts, not pharmacokinetic parameters. |
| PGx | Mbatchi_2006 | not_relevant | 0 | 0 | The paper reports in vitro antiplasmodial activity of plant extracts, including Quassia africana, but contains no pharmacogenomic data or gene variants affecting PK/PD. |
| popPK | Mishra_2010 | irrelevant | 0 | 0 | The study reports in vitro anti-plasmodial activity (IC50 values) and in vivo toxicity, but does not contain pharmacokinetic parameters (CL, V, etc.) for quassia or its compounds. |
| PGx | Mishra_2010 | not_relevant | 0 | 0 | The paper investigates the in vitro anti-plasmodial activity and drug interactions of quassin and neo-quassin with artesunate, containing no pharmacogenomic data or PK/PD parameters. |
| popPK | Musuyu_2012 | irrelevant | 0 | 0 | The paper is an in vitro antiprotozoal and cytotoxic activity study, not a pharmacokinetic study, and contains no disposition parameters for quassia. |
| PGx | Musuyu_2012 | not_relevant | 0 | 0 | The paper reports in vitro antiprotozoal and cytotoxic activities of plant extracts, not pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquassia%5D&body=Drug%3A%20quassia%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quassia/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
