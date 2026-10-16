<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;doripenem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doripenem_Nonoshita2020_reference&quot;,&quot;label&quot;:&quot;Nonoshita_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Nonoshita2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Tanaka2017_reference&quot;,&quot;label&quot;:&quot;Tanaka_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Tanaka2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# doripenem

- **generic name:** doripenem
- **ATC codes:** `J01DH04`
- **DrugBank:** [DB06211](https://go.drugbank.com/drugs/DB06211) · **PubChem:** [CID 73303](https://pubchem.ncbi.nlm.nih.gov/compound/73303)
- **molar mass:** 420.504 g/mol (C15H24N4O6S2) — DrugBank
- **groups:** approved, withdrawn

## About

Doripenem is a carbapenem antibiotic that was used to treat bacterial infections, including pneumonia, urinary tract infections, and hospital-acquired infections. It is no longer marketed in the European Union, where its product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411552](https://www.wikidata.org/wiki/Q411552) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doripenem | parent | 420.504 | C15H24N4O6S2 | DrugBank | [73303](https://pubchem.ncbi.nlm.nih.gov/compound/73303) | Ikawa_2009, Lee_2017, Nonoshita_2020, Tanaka_2017, Wang_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:59 | 4:26 | 2/1/2 | 0/0/0 | 0/0/0 | 192,700/15,115 | einfracz / qwen3.8-27b | 8 | 2/6 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Nonoshita_2020_reference](drugs/drug_doripenem/Doripenem_Nonoshita2020_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Nonoshita K et al., Population pharmacokinetic analysis of…, Scientific reports (2020) | [10.1038/s41598-020-79076-6](https://doi.org/10.1038/s41598-020-79076-6) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Tanaka_2017_reference](drugs/drug_doripenem/Doripenem_Tanaka2017_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Tanaka R et al., Pharmacokinetic/Pharmacodynamic Analysi…, Biological & pharmaceutical… (2017) | [10.1248/bpb.b17-00008](https://doi.org/10.1248/bpb.b17-00008) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.286). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Ikawa_2009_reference](drugs/drug_doripenem/Doripenem_Ikawa2009_reference.md) | — | 1-compartment (no model) | 2 | Ikawa K et al., Pharmacokinetic-pharmacodynamic target…, International journal of an… (2009) | [10.1016/j.ijantimicag.2008.08.031](https://doi.org/10.1016/j.ijantimicag.2008.08.031) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q354 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Lee_2017_reference](drugs/drug_doripenem/Doripenem_Lee2017_reference.md) | — | 1-compartment (no model) | 5 | Lee DH et al., Population Pharmacokinetic Analysis of…, Antimicrobial agents and ch… (2017) | [10.1128/AAC.02185-16](https://doi.org/10.1128/AAC.02185-16) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.737). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wang_2022_reference](drugs/drug_doripenem/Doripenem_Wang2022_reference.md) | — | 2-compartment (no model) | 5 | Wang Y et al., Pharmacokinetics and Safety of Doripene…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11070958](https://doi.org/10.3390/antibiotics11070958) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=doripenem).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DPEP1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 2  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chung_2017.pdf` | Chung EK et al., Population Pharmacokinetics and Pharmac…, The Annals of pharmacothera… (2017) | popPK | 10 | [10.1177/1060028016676831](https://doi.org/10.1177/1060028016676831) | [28168884](https://pubmed.ncbi.nlm.nih.gov/28168884) | The study reports a population PK model for doripenem with qualitative covariate associations, but specific numeric parameter values (e.g., median CL, V) are not present in the provided abstract text. |
| `Harada_2013.pdf` | Harada M et al., Pharmacokinetic analysis of doripenem i…, International journal of an… (2013) | popPK | 10 | [10.1016/j.ijantimicag.2013.03.012](https://doi.org/10.1016/j.ijantimicag.2013.03.012) | [23684002](https://pubmed.ncbi.nlm.nih.gov/23684002) | Abstract reports summary PK statistics (Cmax, AUC, t1/2) but lacks the specific compartmental parameter values (CL, V) required for a full population PK model, which are typically found in the full text or tables. |
| `Ikawa_2009.pdf` | Ikawa K et al., Pharmacokinetic-pharmacodynamic target…, International journal of an… (2009) | popPK | 10 | [10.1016/j.ijantimicag.2008.08.031](https://doi.org/10.1016/j.ijantimicag.2008.08.031) | [19095418](https://pubmed.ncbi.nlm.nih.gov/19095418) | The abstract provides explicit numeric values for all compartmental PK parameters (clearance, volumes, intercompartmental clearance) derived from a population PK model in patients. |
| `Lee_2017.pdf` | Lee DH et al., Population Pharmacokinetic Analysis of…, Antimicrobial agents and ch… (2017) | popPK | 10 | [10.1128/AAC.02185-16](https://doi.org/10.1128/AAC.02185-16) | [28223378](https://pubmed.ncbi.nlm.nih.gov/28223378) | The paper reports a population PK analysis of doripenem in humans with explicit numeric values for clearance and volume of distribution in the abstract. |
| `Matsuo_2019.pdf` | Matsuo Y et al., Population Pharmacokinetics of Doripene…, Journal of pharmaceutical s… (2019) | popPK | 10 | [10.1016/j.xphs.2019.04.002](https://doi.org/10.1016/j.xphs.2019.04.002) | [30974120](https://pubmed.ncbi.nlm.nih.gov/30974120) | The paper is a population PK study of doripenem in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| `Samtani_2010.pdf` | Samtani MN et al., Pharmacokinetic-pharmacodynamic-model-g…, Antimicrobial agents and ch… (2010) | popPK | 5 | [10.1128/AAC.01843-09](https://doi.org/10.1128/AAC.01843-09) | [20385857](https://pubmed.ncbi.nlm.nih.gov/20385857) | The paper discusses PK/PD modeling and Monte Carlo simulations for dosing but the extracted evidence contains no specific quantitative PK parameter values (CL, V, etc.), only dosing regimens and MIC targets. |
| `Soon_2013.pdf` | Soon RL et al., Pharmacodynamic variability beyond that…, Antimicrobial agents and ch… (2013) | popPK | 5 | [10.1128/AAC.01224-12](https://doi.org/10.1128/AAC.01224-12) | [23357773](https://pubmed.ncbi.nlm.nih.gov/23357773) | The study uses murine data for PK/PD modeling but does not report specific numeric PK parameter values (CL, V, Q, ka) in the provided evidence, only PD parameter variability. |

<sub>queue written 2026-10-14T23:55:24.102759+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chung_2017 | relevant | 10 | 2 | The study reports a population PK model for doripenem with qualitative covariate associations, but specific numeric parameter values (e.g., median CL, V) are not present in the provided abstract text. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | The study is a radioprotection screening using doripenem as a test compound in mice and does not report any pharmacokinetic parameters for the drug. |
| popPK | Harada_2013 | relevant | 10 | 3 | Abstract reports summary PK statistics (Cmax, AUC, t1/2) but lacks the specific compartmental parameter values (CL, V) required for a full population PK model, which are typically found in the full text or tables. |
| popPK | Katsube_2008 | irrelevant | 2 | 0 | The study is a PK/PD simulation in mice where doripenem is one of three agents, but no specific quantitative PK parameter values (CL, V, etc.) for doripenem are present in the provided text. |
| popPK | Katsube_2010 | irrelevant | 4 | 0 | The study is a PK/PD modeling/simulation paper using a pre-developed model, and no quantitative doripenem PK parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Lim_2018 | irrelevant | 2 | 0 | The study is a PK/PD simulation and cost-effectiveness analysis that cites PK parameters from previous studies but does not report original quantitative PK data for doripenem. |
| popPK | Matsuo_2019 | relevant | 10 | 0 | The paper is a population PK study of doripenem in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence. |
| popPK | Morales_2022 | irrelevant | 0 | 0 | The paper is a scoping review of therapeutic targets for beta-lactams in children and does not report original quantitative population PK parameters (CL, V, Q) for doripenem. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | The paper is a radioprotection study in mice where doripenem is a candidate drug, not a pharmacokinetic study; no PK parameters for doripenem are reported. |
| popPK | Samtani_2010 | irrelevant | 5 | 0 | The paper discusses PK/PD modeling and Monte Carlo simulations for dosing but the extracted evidence contains no specific quantitative PK parameter values (CL, V, etc.), only dosing regimens and MIC targets. |
| popPK | Soon_2013 | irrelevant | 5 | 0 | The study uses murine data for PK/PD modeling but does not report specific numeric PK parameter values (CL, V, Q, ka) in the provided evidence, only PD parameter variability. |
| popPK | Tanaka_2025 | irrelevant | 5 | 0 | The paper is a review that summarizes population PK modeling of doripenem in ICU patients but does not provide the specific numeric parameter values (CL, V, etc.) in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:55 UTC</sub>
