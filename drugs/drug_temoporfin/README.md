<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;temoporfin&quot;}]"></div>

# temoporfin

- **generic name:** temoporfin
- **ATC codes:** `L01XD05`
- **DrugBank:** [DB11630](https://go.drugbank.com/drugs/DB11630) · **PubChem:** not captured
- **molar mass:** 680.764 g/mol (C44H32N4O4) — DrugBank
- **groups:** approved

## About

Temoporfin is a photosensitizing antineoplastic agent used in photodynamic therapy for head and neck cancers, notably squamous cell carcinoma. It is authorised in the European Union, but its use remains limited to specialised treatment of these tumours.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7698204](https://www.wikidata.org/wiki/Q7698204) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| temoporfin | parent | 680.764 | C44H32N4O4 | DrugBank | — | Jones_2003 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Bovis_2012_reference](drugs/drug_temoporfin/Temoporfin_Bovis2012_reference.md) | — | 1-compartment (no model) | 0 | Bovis MJ et al., Improved in vivo delivery of m-THPC via…, Journal of controlled relea… (2012) | [10.1016/j.jconrel.2011.09.085](https://doi.org/10.1016/j.jconrel.2011.09.085) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Jones_2003_reference](drugs/drug_temoporfin/Temoporfin_Jones2003_reference.md) | — | 1-compartment (no model) | 6 | Jones HJ et al., Photodynamic therapy effect of m-THPC (…, British journal of cancer (2003) | [10.1038/sj.bjc.6601101](https://doi.org/10.1038/sj.bjc.6601101) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wang_2011_reference](drugs/drug_temoporfin/Temoporfin_Wang2011_reference.md) | — | 1-compartment (no model) | 0 | Wang JD et al., [Pharmacokinetics of photosensitizer m-…, Zhonghua wai ke za zhi [Chi… (2011) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:44 | 0:43 | 0/3/0 | 0/0/0 | 0/0/0 | 92,133/4,215 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2011.pdf` | Wang JD et al., [Pharmacokinetics of photosensitizer m-…, Zhonghua wai ke za zhi [Chi… (2011) | popPK | 10 | not captured | [21612701](https://pubmed.ncbi.nlm.nih.gov/21612701) | The study reports quantitative pharmacokinetic parameters (two-compartment model, half-lives) for m-THPC in rats, although specific values for clearance and volume of distribution are not explicitly listed in the provided text. |
| `Decker_2013.pdf` | Decker C et al., Pharmacokinetics of temoporfin-loaded l…, Journal of controlled relea… (2013) | popPK | 9 | [10.1016/j.jconrel.2013.01.005](https://doi.org/10.1016/j.jconrel.2013.01.005) | [23313962](https://pubmed.ncbi.nlm.nih.gov/23313962) | The study is a pharmacokinetic analysis in rats using compartmental models for temoporfin, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided text. |
| `Bovis_2012.pdf` | Bovis MJ et al., Improved in vivo delivery of m-THPC via…, Journal of controlled relea… (2012) | popPK | 8 | [10.1016/j.jconrel.2011.09.085](https://doi.org/10.1016/j.jconrel.2011.09.085) | [21982898](https://pubmed.ncbi.nlm.nih.gov/21982898) | The study reports quantitative PK parameters (elimination half-lives from a 3-compartment model) for temoporfin (m-THPC) in rats. |

<sub>queue written 2026-10-06T21:43:34.084580+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Decker_2013 | relevant | 9 | 0 | The study is a pharmacokinetic analysis in rats using compartmental models for temoporfin, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided text. |
| popPK | Desroches_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of m-TPP(glu)3 and m-THPC, not temoporfin. |
| popPK | Ghazal_2017 | irrelevant | 0 | 0 | The paper is a study on novel phthalocyanine compounds where temoporfin is used only as a comparator for photodynamic activity, with no pharmacokinetic data reported. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The study investigates Zika virus protease inhibitors in vitro and in a mouse model, using temoporfin only as a positive control for enzyme inhibition, and contains no pharmacokinetic data for temoporfin. |
| popPK | Machacek_2016 | irrelevant | 0 | 0 | The paper is an in-vitro structure-activity relationship study on novel photosensitizers, with temoporfin used only as a comparator for potency, and no pharmacokinetic data are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:43 UTC</sub>
