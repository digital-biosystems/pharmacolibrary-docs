<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;eltrombopag&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eltrombopag_Farrell2014_reference&quot;,&quot;label&quot;:&quot;Farrell_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eltrombopag_Gibiansky2011_reference&quot;,&quot;label&quot;:&quot;Gibiansky_2011_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eltrombopag_Saleh2019_reference&quot;,&quot;label&quot;:&quot;Saleh_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Saleh2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# eltrombopag

- **generic name:** eltrombopag
- **ATC codes:** `B02BX05`
- **DrugBank:** [DB06210](https://go.drugbank.com/drugs/DB06210)
- **groups:** approved, investigational

## About

**Description.** Eltrombopag is used to treat low blood platelet counts in adults with chronic immune (idiopathic) thrombocytopenia (ITP), when certain other medicines, or surgery to remove the spleen, have not worked well enough. ITP is a condition that may cause unusual bruising or bleeding due to an abnormally low number of platelets in the blood. Eltrombopag has also been recently approved (late 2012) for the treatment of thrombocytopenia (low blood platelet counts) in patients with chronic hepatitis C to allow them to initiate and maintain interferon-based therapy.

**Indication.** Thrombopoietin receptor agonists are pharmaceutical agents that stimulate platelet production in the bone marrow. In this, they differ from the previously discussed agents that act by attempting to curtail platelet destruction.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 21:26 | 4:35 | 2/0/1 | 1/0/0 | 0/0/0 | 70,983/12,370 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Farrell_2014_reference](drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference.md) | Farrell C et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2014) | [10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Gibiansky_2011_reference](drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference.md) | Gibiansky E et al., Population pharmacokinetics of eltrombo…, Journal of clinical pharmac… (2011) | [10.1177/0091270010375427](https://doi.org/10.1177/0091270010375427) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Saleh_2019_reference](drugs/drug_eltrombopag/Eltrombopag_Saleh2019_reference.md) | Saleh MI et al., Bayesian Population Pharmacokinetic Mod…, European journal of drug me… (2019) | [10.1007/s13318-018-0490-x](https://doi.org/10.1007/s13318-018-0490-x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Farrell_2014](drugs/drug_eltrombopag/pd_Farrell_2014_unknown.md) | Farrell C et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2014) | [10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eltrombopag) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` inhibitor/substrate, `SLCO1B1` inhibitor, `UGT1A1` inhibitor/substrate, `UGT1A3` substrate, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Eltrombopag is eliminated primarily via the feces (59%), along with 31% being renally excr…”</sub> | prose |

<sub>Actors without a tissue in the table: MPL (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gibiansky_2011.pdf` | Gibiansky E et al., Population pharmacokinetics of eltrombo…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010375427](https://doi.org/10.1177/0091270010375427) | [20663993](https://pubmed.ncbi.nlm.nih.gov/20663993) | The paper is a population PK study of eltrombopag and provides explicit numeric values for CL/F, Vc/F, Vp/F, and Q/F in the text. |
| `Hayes_2011.pdf` | Hayes S et al., Population PK/PD modeling of eltrombopa…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010383019](https://doi.org/10.1177/0091270010383019) | [21148042](https://pubmed.ncbi.nlm.nih.gov/21148042) | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Hayes_2013.pdf` | Hayes S et al., Population PK/PD modeling of eltrombopa…, Cancer chemotherapy and pha… (2013) | popPK | 10 | [10.1007/s00280-013-2150-9](https://doi.org/10.1007/s00280-013-2150-9) | [23564375](https://pubmed.ncbi.nlm.nih.gov/23564375) | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Saleh_2019.pdf` | Saleh MI et al., Bayesian Population Pharmacokinetic Mod…, European journal of drug me… (2019) | popPK | 10 | [10.1007/s13318-018-0490-x](https://doi.org/10.1007/s13318-018-0490-x) | [29948848](https://pubmed.ncbi.nlm.nih.gov/29948848) | The paper is a population PK study of eltrombopag and explicitly reports numeric values for clearance, volume of distribution, and absorption lag time in the text. |
| `Wire_2018.pdf` | Wire MB et al., Modeling and Simulation Support Eltromb…, Clinical pharmacology and t… (2018) | popPK | 10 | [10.1002/cpt.1066](https://doi.org/10.1002/cpt.1066) | [29536526](https://pubmed.ncbi.nlm.nih.gov/29536526) | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Wu_2015.pdf` | Wu K et al., Population Pharmacokinetic and Pharmaco…, Clinical therapeutics (2015) | popPK | 10 | [10.1016/j.clinthera.2015.03.024](https://doi.org/10.1016/j.clinthera.2015.03.024) | [25929594](https://pubmed.ncbi.nlm.nih.gov/25929594) | The paper is a population PK study of eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Zhang_2015.pdf` | Zhang J et al., Modeling and simulation support eltromb…, Pharmaceutical research (2015) | popPK | 10 | [10.1007/s11095-014-1594-x](https://doi.org/10.1007/s11095-014-1594-x) | [25534682](https://pubmed.ncbi.nlm.nih.gov/25534682) | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Zhang_2024.pdf` | Zhang W et al., Efficacy, Safety, and Population Pharma…, Journal of clinical pharmac… (2024) | popPK | 9 | [10.1002/jcph.2430](https://doi.org/10.1002/jcph.2430) | [38497347](https://pubmed.ncbi.nlm.nih.gov/38497347) | The paper describes a population pharmacokinetic study of eltrombopag, but the specific numeric parameter values (CL/F, V/F) are not present in the provided abstract text. |

<sub>queue written 2026-09-18T21:22:52.291632+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hayes_2011 | relevant | 10 | 0 | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Hayes_2013 | relevant | 10 | 0 | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Wire_2018 | relevant | 10 | 0 | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Wu_2015 | relevant | 10 | 0 | The paper is a population PK study of eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Zhang_2015 | relevant | 10 | 0 | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Zhang_2024 | relevant | 9 | 2 | The paper describes a population pharmacokinetic study of eltrombopag, but the specific numeric parameter values (CL/F, V/F) are not present in the provided abstract text. |
| popPK | van_2023 | irrelevant | 0 | 0 | The study focuses on hemostatic and procoagulant parameters (platelet function, thrombin generation) rather than pharmacokinetic disposition parameters for eltrombopag. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 21:23 UTC</sub>
