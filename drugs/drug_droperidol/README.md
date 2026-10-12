<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;droperidol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Droperidol_Foo2016_reference&quot;,&quot;label&quot;:&quot;Foo_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/Droperidol_Foo2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# droperidol

- **generic name:** droperidol
- **ATC codes:** `N05AD08`
- **DrugBank:** [DB00450](https://go.drugbank.com/drugs/DB00450) · **PubChem:** [CID 3168](https://pubchem.ncbi.nlm.nih.gov/compound/3168)
- **molar mass:** 379.4274 g/mol (C22H22FN3O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Droperidol is a butyrophenone antipsychotic and antiemetic used for conditions such as pain and schizophreniform disorder, and as an adjuvant in anesthesia. It remains an approved medicine, including veterinary use, but carries a boxed warning, so its use is cautious.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q174259](https://www.wikidata.org/wiki/Q174259) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| droperidol | parent | 379.427 | C22H22FN3O2 | DrugBank | [3168](https://pubchem.ncbi.nlm.nih.gov/compound/3168) | Cooper_2018, Fischler_1986, Foo_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:28 | 1:12 | 0/2/1 | 1/0/1 | 0/0/0 | 51,186/3,939 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Foo_2016_reference](drugs/drug_droperidol/Droperidol_Foo2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Foo LK et al., Population pharmacokinetics of intramus…, British journal of clinical… (2016) | [10.1111/bcp.13093](https://doi.org/10.1111/bcp.13093) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.867). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Cooper_2018_reference](drugs/drug_droperidol/Droperidol_Cooper2018_reference.md) | — | 2-compartment (no model) | 5 | Cooper I et al., The pharmacokinetics of intranasal drop…, SAGE open medicine (2018) | [10.1177/2050312118813283](https://doi.org/10.1177/2050312118813283) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Fischler_1986_reference](drugs/drug_droperidol/Droperidol_Fischler1986_reference.md) | — | 1-compartment (no model) | 4 | Fischler M et al., The pharmacokinetics of droperidol in a…, Anesthesiology (1986) | [10.1097/00000542-198604000-00012](https://doi.org/10.1097/00000542-198604000-00012) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Flood_2002_GABA_response](drugs/drug_droperidol/pd_Flood_2002_GABA_response.md) | GABA response inhibition (GABAA alpha1beta1gamma2 receptor current) ← droperidol · direct sigmoid Emax (Hill) effect | — | Flood P et al., Droperidol inhibits GABA(A) and neurona…, Anesthesiology (2002) | [10.1097/00000542-200204000-00029](https://doi.org/10.1097/00000542-200204000-00029) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Flood_2002_alpha7_nAChR](drugs/drug_droperidol/pd_Flood_2002_alpha7_nAChR.md) | alpha7 nAChR activation inhibition ← droperidol · direct sigmoid Emax (Hill) effect | — | Flood P et al., Droperidol inhibits GABA(A) and neurona…, Anesthesiology (2002) | [10.1097/00000542-200204000-00029](https://doi.org/10.1097/00000542-200204000-00029) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Radke_1998_time_averaged_single_channel_conductance](drugs/drug_droperidol/pd_Radke_1998_time_averaged_single_channel_conductance.md) | time averaged single channel conductance ← droperidol · direct Emax (saturable) effect | model (no simulator) | Radke PW et al., Molecular actions of droperidol on huma…, European journal of anaesth… (1998) | [10.1046/j.1365-2346.1998.00221.x](https://doi.org/10.1046/j.1365-2346.1998.00221.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fischler_1986.pdf` | Fischler M et al., The pharmacokinetics of droperidol in a…, Anesthesiology (1986) | popPK | 10 | [10.1097/00000542-198604000-00012](https://doi.org/10.1097/00000542-198604000-00012) | [3963455](https://pubmed.ncbi.nlm.nih.gov/3963455) | Original PK study in humans with full numeric parameters (t1/2 phases, CL, Vd) reported directly in the abstract. |
| `Foo_2016.pdf` | Foo LK et al., Population pharmacokinetics of intramus…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.13093](https://doi.org/10.1111/bcp.13093) | [27530285](https://pubmed.ncbi.nlm.nih.gov/27530285) | Population PK model of droperidol with numeric CL, Vc, ka, and half-lives reported directly in the abstract. |

<sub>queue written 2026-10-06T15:27:49.248103+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Behne_1987 | irrelevant | 0 | 0 | The PK parameters reported are for midazolam; droperidol is only a co-administered anesthetic component, not the subject drug. |
| popPK | Flood_2002 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor modulation; no pharmacokinetic parameters for droperidol. |
| popPK | Hu_1996 | irrelevant | 0 | 0 | Droperidol is only a non-analgesic test drug in a rabbit pain model; PK parameters reported are for nalbuphine, not droperidol. |
| popPK | Radke_1998 | irrelevant | 0 | 0 | In-vitro electrophysiology of ion channels, no PK disposition parameters for droperidol. |
| popPK | Sampson_1977 | irrelevant | 0 | 0 | Droperidol is only used as an antagonist tool in an in vitro electrophysiology study; no PK parameters are reported. |
| popPK | Schuh_1981 | irrelevant | 0 | 0 | Droperidol is only part of the anaesthetic regimen; the study concerns neuromuscular blockers' dose-response, with no PK parameters for droperidol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:27 UTC</sub>
