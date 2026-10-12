<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;triamcinolone&quot;}]"></div>

# triamcinolone

- **generic name:** triamcinolone
- **ATC codes:** `A01AC01`, `C05AA12`, `D07AB09`, `D07BB03`, `D07CB01`, `D07XB02`, `H02AB08`, `R01AD11`, `R03BA06`, `S01BA05`, `S02CA04`
- **DrugBank:** [DB00620](https://go.drugbank.com/drugs/DB00620) · **PubChem:** [CID 31307](https://pubchem.ncbi.nlm.nih.gov/compound/31307)
- **molar mass:** 394.4339 g/mol (C21H27FO6) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Triamcinolone is a glucocorticoid used to treat inflammation and related conditions such as dermatoses, keloids, joint problems, and macular edema. It is widely used in many forms, including skin, oral, nasal, inhaled, eye, and systemic preparations, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1074056](https://www.wikidata.org/wiki/Q1074056) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triamcinolone | parent | 394.434 | C21H27FO6 | DrugBank | [31307](https://pubchem.ncbi.nlm.nih.gov/compound/31307) | Beer_2003, French_2000, Oishi_2008 |
| triamcinolone acetonide | metabolite | 434.504 | C24H31FO6 | PubChem | [6436](https://pubchem.ncbi.nlm.nih.gov/compound/6436) | Beer_2003, French_2000, Oishi_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 04:38 | 10:58 | 0/4/0 | 2/0/0 | 0/0/3 | 190,127/29,923 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 7/3 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Beer_2003_reference](drugs/drug_triamcinolone/Triamcinolone_Beer2003_reference.md) | — | 1-compartment (no model) | 0 | Beer PM et al., Intraocular concentration and pharmacok…, Ophthalmology (2003) | [10.1016/S0161-6420(02)01969-3](https://doi.org/10.1016/S0161-6420(02)01969-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [French_2000_reference](drugs/drug_triamcinolone/Triamcinolone_French2000_reference.md) | — | 1-compartment (no model) | 4 | French K et al., Pharmacokinetics and metabolic effects…, Journal of veterinary pharm… (2000) | [10.1046/j.1365-2885.2000.00288.x](https://doi.org/10.1046/j.1365-2885.2000.00288.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kraus_2018_reference](drugs/drug_triamcinolone/Triamcinolone_Kraus2018_reference.md) | — | 1-compartment (no model) | 2 | Kraus VB et al., Synovial and systemic pharmacokinetics…, Osteoarthritis and cartilage (2018) | [10.1016/j.joca.2017.10.003](https://doi.org/10.1016/j.joca.2017.10.003) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Oishi_2008_reference](drugs/drug_triamcinolone/Triamcinolone_Oishi2008_reference.md) | — | 1-compartment (no model) | 3 | Oishi M et al., Pharmacokinetic behavior of intravitrea…, Japanese journal of ophthal… (2008) | [10.1007/s10384-008-0584-0](https://doi.org/10.1007/s10384-008-0584-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Katsu_2022_fold_activation](drugs/drug_triamcinolone/pd_Katsu_2022_fold_activation.md) | transcriptional activation of full-length lungfish MR ← triamcinolone · direct Emax (saturable) effect | — | Katsu Y et al., Aldosterone and dexamethasone activate…, The Journal of steroid bioc… (2022) | [10.1016/j.jsbmb.2021.106024](https://doi.org/10.1016/j.jsbmb.2021.106024) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Katsu_2022_fold_activation_2](drugs/drug_triamcinolone/pd_Katsu_2022_fold_activation_2.md) | transcriptional activation of truncated lungfish MR ← triamcinolone · direct Emax (saturable) effect | — | Katsu Y et al., Aldosterone and dexamethasone activate…, The Journal of steroid bioc… (2022) | [10.1016/j.jsbmb.2021.106024](https://doi.org/10.1016/j.jsbmb.2021.106024) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Rohatagi_1995_cortisol](drugs/drug_triamcinolone/pd_Rohatagi_1995_cortisol.md) | cortisol ← triamcinolone acetonide · direct linear effect | — | Rohatagi S et al., Pharmacokinetic and pharmacodynamic eva…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04045.x](https://doi.org/10.1002/j.1552-4604.1995.tb04045.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Rohatagi_1995_granulocytes](drugs/drug_triamcinolone/pd_Rohatagi_1995_granulocytes.md) | granulocytes ← triamcinolone acetonide · direct Emax (saturable) effect | — | Rohatagi S et al., Pharmacokinetic and pharmacodynamic eva…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04045.x](https://doi.org/10.1002/j.1552-4604.1995.tb04045.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Rohatagi_1995_lymphocytes](drugs/drug_triamcinolone/pd_Rohatagi_1995_lymphocytes.md) | lymphocytes ← triamcinolone acetonide · direct Emax (saturable) effect | — | Rohatagi S et al., Pharmacokinetic and pharmacodynamic eva…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04045.x](https://doi.org/10.1002/j.1552-4604.1995.tb04045.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **HCG22** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Jeong_2015](drugs/drug_triamcinolone/pgx_Jeong_2015_HCG22_Q100.md) | Jeong S et al., Identification of a Novel Mucin Gene HC…, Investigative ophthalmology… (2015) | [10.1167/iovs.14-14803](https://doi.org/10.1167/iovs.14-14803) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **NR3C1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Obeidat_2019](drugs/drug_triamcinolone/pgx_Obeidat_2019_NR3C1_Q100.md) | Obeidat M et al., The pharmacogenomics of inhaled cortico…, The European respiratory jo… (2019) | [10.1183/13993003.00521-2019](https://doi.org/10.1183/13993003.00521-2019) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **unknown** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Obeidat_2019](drugs/drug_triamcinolone/pgx_Obeidat_2019_unknown_Q100.md) | Obeidat M et al., The pharmacogenomics of inhaled cortico…, The European respiratory jo… (2019) | [10.1183/13993003.00521-2019](https://doi.org/10.1183/13993003.00521-2019) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 67 matched, 40 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beer_2003.pdf` | Beer PM et al., Intraocular concentration and pharmacok…, Ophthalmology (2003) | popPK | 10 | [10.1016/S0161-6420(02)01969-3](https://doi.org/10.1016/S0161-6420(02)01969-3) | [12689886](https://pubmed.ncbi.nlm.nih.gov/12689886) | The study reports quantitative pharmacokinetic parameters (half-life, AUC, peak concentration) for triamcinolone acetonide in humans, with specific numeric values provided in the abstract. |
| `French_2000.pdf` | French K et al., Pharmacokinetics and metabolic effects…, Journal of veterinary pharm… (2000) | popPK | 9 | [10.1046/j.1365-2885.2000.00288.x](https://doi.org/10.1046/j.1365-2885.2000.00288.x) | [11107002](https://pubmed.ncbi.nlm.nih.gov/11107002) | The study reports quantitative PK parameters (half-lives, volume ratios) for triamcinolone acetonide in horses, though specific clearance and volume values are not explicitly listed in the text. |
| `Oishi_2008.pdf` | Oishi M et al., Pharmacokinetic behavior of intravitrea…, Japanese journal of ophthal… (2008) | popPK | 9 | [10.1007/s10384-008-0584-0](https://doi.org/10.1007/s10384-008-0584-0) | [19089571](https://pubmed.ncbi.nlm.nih.gov/19089571) | The study reports quantitative PK parameters (half-life, compartmental model) for triamcinolone acetonide in rats, but specific clearance/volume values are not explicitly listed in the provided text. |
| `Rohatagi_1995.pdf` | Rohatagi S et al., Pharmacokinetic and pharmacodynamic eva…, Journal of clinical pharmac… (1995) | popPK | 9 | [10.1002/j.1552-4604.1995.tb04045.x](https://doi.org/10.1002/j.1552-4604.1995.tb04045.x) | [8750370](https://pubmed.ncbi.nlm.nih.gov/8750370) | The study is a clinical PK/PD evaluation of triamcinolone acetonide, but the provided evidence only contains pharmacodynamic parameters (E50, free fraction) and lacks specific quantitative PK values (CL, V, t1/2) which are likely in the full text or figures not included. |
| `Yao_2020.pdf` | Yao Q et al., Development and validation of a LC-MS/M…, Journal of pharmaceutical a… (2020) | popPK | 8 | [10.1016/j.jpba.2019.112980](https://doi.org/10.1016/j.jpba.2019.112980) | [31744668](https://pubmed.ncbi.nlm.nih.gov/31744668) | The study reports a pharmacokinetic model for triamcinolone acetonide in mice, but the specific numeric parameter values are not present in the provided evidence. |
| `Audren_2004.pdf` | Audren F et al., Pharmacokinetic-pharmacodynamic modelin…, Investigative ophthalmology… (2004) | pd | 5 | [10.1167/iovs.03-1110](https://doi.org/10.1167/iovs.03-1110) | [15452046](https://www.ncbi.nlm.nih.gov/pubmed/15452046) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Daley-Yates_2004.pdf` | Daley-Yates PT et al., Relationship between systemic corticost…, Clinical therapeutics (2004) | pd | 5 | [10.1016/j.clinthera.2004.11.017](https://doi.org/10.1016/j.clinthera.2004.11.017) | [15639702](https://www.ncbi.nlm.nih.gov/pubmed/15639702) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Derendorf_1993.pdf` | Derendorf H et al., Receptor-based pharmacokinetic-pharmaco…, Journal of clinical pharmac… (1993) | pd | 5 | [10.1002/j.1552-4604.1993.tb03930.x](https://doi.org/10.1002/j.1552-4604.1993.tb03930.x) | [8440759](https://www.ncbi.nlm.nih.gov/pubmed/8440759) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Meibohm_1999.pdf` | Meibohm B et al., A pharmacokinetic/pharmacodynamic appro…, Journal of pharmacokinetics… (1999) | pd | 5 | [10.1023/a:1020670421957](https://doi.org/10.1023/a:1020670421957) | [10567952](https://www.ncbi.nlm.nih.gov/pubmed/10567952) | metadata signals extractable PD data (PK/PD) |
| `Nakamura_2023.pdf` | Nakamura R et al., Glucocorticoid Dose Dependency on Gene…, The Laryngoscope (2023) | pd | 4 | [10.1002/lary.30330](https://doi.org/10.1002/lary.30330) | [36779842](https://www.ncbi.nlm.nih.gov/pubmed/36779842) | metadata signals extractable PD data (EC50) |
| `Moore_2013.pdf` | Moore CD et al., Metabolic pathways of inhaled glucocort…, Drug metabolism and disposi… (2013) | pgx | 7 | [10.1124/dmd.112.046318](https://doi.org/10.1124/dmd.112.046318) | [23143891](https://www.ncbi.nlm.nih.gov/pubmed/23143891) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-04T04:28:18.664190+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Audren_2004 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| popPK | Boorman_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of tissue response to triamcinolone, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Camarini_2022 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes for treating bone lesions and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Daley-Yates_2004 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| popPK | Derendorf_1993 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Derendorf_1993 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Gaffin_2023 | irrelevant | 0 | 0 | The study uses triamcinolone acetonide as a diagnostic probe to assess steroid responsiveness (change in FEV1), not to measure pharmacokinetic parameters like clearance or volume. |
| PGx | García-Martín_2013 | not_relevant | 2 | 1 | The paper is a general review of drug metabolism in allergic diseases and mentions triamcinolone only in the context of metabolic inhibition, without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Gerzenstein_2008 | not_relevant | 2 | 0 | The study reports no statistically significant association between glucocorticoid receptor polymorphisms and intraocular pressure response to triamcinolone. |
| PGx | Hagan_2010 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (nefazodone inhibiting CYP3A4), not a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Katsu_2022 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/transactivation assay measuring EC50 values for steroid activation of lungfish MR, not a pharmacokinetic study of triamcinolone disposition. |
| popPK | Kelly_1998 | irrelevant | 1 | 0 | The paper is a review discussing general pharmacokinetic principles and relative potency rankings of inhaled corticosteroids without reporting specific quantitative PK parameters (CL, V, etc.) for triamcinolone. |
| PD | Kelly_1998 | not_relevant | 2 | 0 | The text is a qualitative review discussing relative potencies and general dose-response characteristics of inhaled corticosteroids without providing specific numeric PD parameters or extractable concentration-effect curves for triamcinolone. |
| PGx | Leucker_2013 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (fluoxetine inhibiting CYP3A4) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Mager_2002 | irrelevant | 2 | 0 | The study focuses on QSAR modeling for a class of corticosteroids and does not report specific quantitative PK parameter values (CL, V, etc.) for triamcinolone in the provided evidence. |
| PD | Mager_2002 | not_relevant | 4 | 2 | The paper focuses on QSAR/QSPKR modeling and mentions predicting the time course of triamcinolone effects, but the provided text does not contain specific numeric PD parameters (Emax, EC50) or explicit concentration-effect data points for triamcinolone. |
| PGx | Mathias_2020 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cobicistat inhibiting CYP3A4) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Meibohm_1999 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Meibohm_1999 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Mohan_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 inhibition by ritonavir) causing iatrogenic Cushing syndrome, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Moore_2013 | not_relevant | 2 | 5 | The paper studies metabolism by different CYP3A isoforms (CYP3A4/5/7) rather than specific genetic variants/polymorphisms, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Nakamura_2023 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Nakamura_2023 | not_relevant | 0 | 0 | The paper investigates gene expression in cell lines (fibroblasts and macrophages) and does not report pharmacokinetic or pharmacodynamic modeling for triamcinolone in a biological system with extractable PD parameters. |
| PGx | Nowak-Sliwinska_2013 | not_relevant | 0 | 0 | The paper reviews photodynamic therapy for polypoidal choroidal vasculopathy and does not discuss triamcinolone pharmacogenomics or PK/PD parameters. |
| PGx | PMID33387367_2021 | not_relevant | 0 | 0 | The paper focuses on opioids (codeine, tramadol, etc.) and does not mention triamcinolone. |
| PGx | Pavek_2005 | not_relevant | 0 | 0 | The paper studies in vitro transporter interactions (BCRP inhibition) and does not report pharmacogenomic effects of gene variants on triamcinolone PK/PD parameters. |
| popPK | Ponsar_2023 | irrelevant | 0 | 0 | The study focuses on in vitro drug release kinetics from 3D-printed implants and does not report in vivo pharmacokinetic parameters (CL, V, ka) for triamcinolone. |
| popPK | Rohatagi_1995 | relevant | 9 | 2 | The study is a clinical PK/PD evaluation of triamcinolone acetonide, but the provided evidence only contains pharmacodynamic parameters (E50, free fraction) and lacks specific quantitative PK values (CL, V, t1/2) which are likely in the full text or figures not included. |
| PGx | Rössner_2018 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (ritonavir inhibiting CYP3A4) causing adrenal insufficiency, not a pharmacogenomic effect of a gene variant on triamcinolone PK/PD. |
| PGx | Wassner_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cobicistat inhibiting CYP3A4) causing adrenal insufficiency, not a pharmacogenomic effect based on a gene variant. |
| popPK | Weber_2013 | irrelevant | 2 | 0 | The paper describes a simulation tool and model structure for inhaled corticosteroids, but the provided evidence contains no specific quantitative PK parameter values (CL, V, etc.) for triamcinolone. |
| PGx | Wurtz_1985 | not_relevant | 0 | 0 | The paper investigates the mechanism of glucocorticoid action (chromatin changes and RNA induction) in cell lines but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Yao_2020 | relevant | 8 | 0 | The study reports a pharmacokinetic model for triamcinolone acetonide in mice, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Zhang_2008 | irrelevant | 0 | 0 | The study is an in-vitro cell screening model for glucocorticoid receptor activation and does not report pharmacokinetic parameters for triamcinolone. |
| PD | Zhang_2008 | not_relevant | 3 | 2 | The paper reports EC50/IC50 values for dexamethasone and PMA in a cell screening model, but only qualitatively states that triamcinolone acetonide activated the response without providing specific numeric PD parameters or concentration-effect data for triamcinolone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 04:28 UTC</sub>
