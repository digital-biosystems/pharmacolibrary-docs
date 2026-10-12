<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;rabeprazole&quot;}]"></div>

# rabeprazole

- **generic name:** rabeprazole
- **ATC codes:** `A02BC04`
- **DrugBank:** [DB01129](https://go.drugbank.com/drugs/DB01129) · **PubChem:** [CID 5029](https://pubchem.ncbi.nlm.nih.gov/compound/5029)
- **molar mass:** 359.443 g/mol (C18H21N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Rabeprazole is a proton-pump inhibitor used to treat acid-related conditions such as gastroesophageal reflux disease, duodenal ulcer, and Zollinger–Ellison syndrome. It is an approved medication and remains in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3515](https://www.wikidata.org/wiki/Q3515) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 11:23 | 5:07 | 0/2/0 | 5/0/0 | 0/0/0 | 89,418/12,863 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sheng_2010_reference](drugs/drug_rabeprazole/Rabeprazole_Sheng2010_reference.md) | — | 1-compartment (no model) | 0 | Sheng YC et al., Effect of CYP2C19 genotypes on the phar…, European journal of clinica… (2010) | [10.1007/s00228-010-0892-4](https://doi.org/10.1007/s00228-010-0892-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2009_reference](drugs/drug_rabeprazole/Rabeprazole_Yang2009_reference.md) | — | 1-compartment (no model) | 0 | Yang JC et al., Pharmacokinetic- pharmacodynamic analys…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03393.x](https://doi.org/10.1111/j.1365-2125.2009.03393.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Chen_2006_pH](drugs/drug_rabeprazole/pd_Chen_2006_pH.md) | intragastric pH ← rabeprazole · direct sigmoid Emax (Hill) effect | — | Chen ZY et al., Pharmacokinetic and pharmacodynamic pop…, European journal of drug me… (2006) | [10.1007/BF03190639](https://doi.org/10.1007/BF03190639) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Hayato_2012_pH4HT](drugs/drug_rabeprazole/pd_Hayato_2012_pH4HT.md) | pH 4 holding time ← rabeprazole · direct sigmoid Emax (Hill) effect | — | Hayato S et al., Dose-response relationships of rabepraz…, European journal of clinica… (2012) | [10.1007/s00228-011-1164-7](https://doi.org/10.1007/s00228-011-1164-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Jeong_2023_pH](drugs/drug_rabeprazole/pd_Jeong_2023_pH.md) | gastric pH ← rabeprazole · direct sigmoid Emax (Hill) effect | — | Jeong SH et al., Exploring Differences in Pharmacometric…, Biomedicines (2023) | [10.3390/biomedicines11113021](https://doi.org/10.3390/biomedicines11113021) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Sheng_2010_pH](drugs/drug_rabeprazole/pd_Sheng_2010_pH.md) | intragastric pH values ← rabeprazole · direct sigmoid Emax (Hill) effect | — | Sheng YC et al., Effect of CYP2C19 genotypes on the phar…, European journal of clinica… (2010) | [10.1007/s00228-010-0892-4](https://doi.org/10.1007/s00228-010-0892-4) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Yang_2009_gastrin](drugs/drug_rabeprazole/pd_Yang_2009_gastrin.md) | gastrin ← rabeprazole · direct sigmoid Emax (Hill) effect | — | Yang JC et al., Pharmacokinetic- pharmacodynamic analys…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03393.x](https://doi.org/10.1111/j.1365-2125.2009.03393.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2006.pdf` | Chen ZY et al., Pharmacokinetic and pharmacodynamic pop…, European journal of drug me… (2006) | popPK | 10 | [10.1007/BF03190639](https://doi.org/10.1007/BF03190639) | [16715780](https://pubmed.ncbi.nlm.nih.gov/16715780) | The paper describes a population PK model for rabeprazole, but the specific numeric PK parameter values (CL, V, ka) are not listed in the provided evidence, only PD parameters are shown. |
| `Jeong_2023.pdf` | Jeong SH et al., Exploring Differences in Pharmacometric…, Biomedicines (2023) | popPK | 10 | [10.3390/biomedicines11113021](https://doi.org/10.3390/biomedicines11113021) | [38002021](https://pubmed.ncbi.nlm.nih.gov/38002021) | The study is a population PK/PD modeling study for rabeprazole in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| `McLeay_2014.pdf` | McLeay SC et al., Population pharmacokinetics of rabepraz…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0168-8](https://doi.org/10.1007/s40262-014-0168-8) | [25168707](https://pubmed.ncbi.nlm.nih.gov/25168707) | The paper describes a population PK model for rabeprazole, but the specific numeric parameter values (CL, Vc, ka, etc.) are not present in the provided evidence text. |
| `Sheng_2010.pdf` | Sheng YC et al., Effect of CYP2C19 genotypes on the phar…, European journal of clinica… (2010) | popPK | 10 | [10.1007/s00228-010-0892-4](https://doi.org/10.1007/s00228-010-0892-4) | [20838991](https://pubmed.ncbi.nlm.nih.gov/20838991) | The study reports a population PK model for rabeprazole in humans and provides specific numeric clearance values for different CYP2C19 genotypes in the abstract. |
| `Patel_2019.pdf` | Patel H et al., Pharmacokinetic evaluation of different…, Drug development and indust… (2019) | popPK | 9 | [10.1080/03639045.2019.1628249](https://doi.org/10.1080/03639045.2019.1628249) | [31216902](https://pubmed.ncbi.nlm.nih.gov/31216902) | The study reports PK parameters for rabeprazole in dogs, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative descriptions and relative bioavailability. |
| `Ma_2016.pdf` | Ma Z et al., Pharmacokinetics and bioavailability in…, International journal of cl… (2016) | popPK | 8 | [10.5414/CP202265](https://doi.org/10.5414/CP202265) | [26249765](https://pubmed.ncbi.nlm.nih.gov/26249765) | The study reports non-compartmental PK parameters (Cmax, AUC) for rabeprazole in humans, but lacks specific clearance (CL) or volume (V) values in the provided text. |

<sub>queue written 2026-10-04T11:19:42.095731+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2006 | relevant | 10 | 2 | The paper describes a population PK model for rabeprazole, but the specific numeric PK parameter values (CL, V, ka) are not listed in the provided evidence, only PD parameters are shown. |
| popPK | Hayato_2012 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (gastric acid suppression) and genotype effects, and while it mentions PK-PD relationships, no quantitative PK parameters (CL, V, ka, etc.) are reported in the provided evidence. |
| popPK | Jeong_2023 | relevant | 10 | 2 | The study is a population PK/PD modeling study for rabeprazole in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| popPK | Kirchheiner_2009_2 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of gastric pH effects and does not report pharmacokinetic parameters (CL, V, ka) for rabeprazole. |
| popPK | Litalien_2005 | irrelevant | 0 | 0 | The paper is a review that explicitly states no pharmacokinetic data are available for rabeprazole in children, and it does not report quantitative parameters for rabeprazole. |
| popPK | McLeay_2014 | relevant | 10 | 0 | The paper describes a population PK model for rabeprazole, but the specific numeric parameter values (CL, Vc, ka, etc.) are not present in the provided evidence text. |
| popPK | Ollier_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dabigatran, with rabeprazole serving only as a co-administered proton pump inhibitor to evaluate drug-drug interactions. |
| popPK | Patel_2019 | relevant | 9 | 2 | The study reports PK parameters for rabeprazole in dogs, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative descriptions and relative bioavailability. |
| popPK | Ruiz-Garcia_2020 | irrelevant | 0 | 0 | The study models the pharmacokinetics of dacomitinib, with rabeprazole serving only as a co-administered proton pump inhibitor covariate, not the subject drug. |
| popPK | Srinivas_2011 | irrelevant | 0 | 0 | no_text gate: only 203 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 11:19 UTC</sub>
