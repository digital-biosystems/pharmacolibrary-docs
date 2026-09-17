<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;bupropion&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bupropion_Butz1981_beagle_dogs&quot;,&quot;label&quot;:&quot;Butz_1981_beagle dogs&quot;,&quot;href&quot;:&quot;drugs/drug_bupropion/Bupropion_Butz1981_beagle_dogs.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# bupropion

- **generic name:** bupropion
- **ATC codes:** `A08AA62`, `N06AX12`, `N06AX62`
- **DrugBank:** [DB01156](https://go.drugbank.com/drugs/DB01156)
- **groups:** approved, investigational

## About

**Description.** Bupropion (also known as the brand name product Wellbutrin®) is a norepinephrine/dopamine-reuptake inhibitor (NDRI) used most commonly for the management of Major Depressive Disorder (MDD), Seasonal Affective Disorder (SAD), and as an aid for smoking cessation. Bupropion exerts its pharmacological effects by weakly inhibiting the enzymes involved in the uptake of the neurotransmitters norepinephrine and dopamine from the synaptic cleft, therefore prolonging their duration of action within the neuronal synapse and the downstream effects of these neurotransmitters. More specifically, bupropion binds to the norepinephrine transporter (NET) and the dopamine transporter (DAT).[A6399,A178810]

Bupropion was originally classified as an "atypical" antidepressant because it does not exert the same effects as the classical antidepressants such as Monoamine Oxidase Inhibitors (MAOIs), Tricyclic Antidepressants (TCAs), or Selective Serotonin Reuptake Inhibitors (SSRIs). While it has comparable effectiveness to typical first-line options for the treatment of depression such as SSRIs,[A178798,A178804] bupropion is a unique option for the treatment of MDD as it lacks any clinically relevant serotonergic effects, typical of other mood medications, or any effects on histamine or adrenaline receptors.[A6399,A178840] Lack of activity at these receptors results in a more tolerable side effect profile; bupropion is less likely to cause sexual side effects, sedation, or weight gain as compared to SSRIs or TCAs, for example.[A178804,A178807]

When used as an aid to smoking cessation, bupropion is thought to confer its anti-craving and anti-withdrawal effects by inhibiting dopamine reuptake, which is thought to be involved in the reward pathways associated with nicotine, and through the antagonism of the nicotinic acetylcholinergic receptor.[A178825,A1966,A16508] A Cochrane Review of meta-analyses of available treatment modalities for smoking cessation found that abstinence rates appro

**Indication.** Bupropion is indicated for the treatment of major depressive disorder (MDD), seasonal affective disorder (SAD), and as an aid to smoking cessation. 

When used in combination with [naltrexone] as the marketed product ContraveⓇ, bupropion is indicated as an adjunct to a reduced-calorie diet and increased physical activity for chronic weight management in adults with an initial body mass index (BMI) of: 30 kg/m^2 or greater (obese) or 27 kg/m^2 or greater (overweight) in the presence of at least one weight-related comorbid condition (e.g., hypertension, type 2 diabetes mellitus, or dyslipidemia).

Bupropion is also used off-label as a first-line treatment in patients with ADHD and comorbid bipolar disorder when used as an adjunct to mood stabilizers.[F4624]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 23:58 | 0:09 | 0/0/0 | 0/0/0 | 0/0/0 | 3,079/268 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/0 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Butz_1981_beagle dogs](drugs/drug_bupropion/Bupropion_Butz1981_beagle_dogs.md) | Butz RF et al., Radioimmunoassay and pharmacokinetic pr…, The Journal of pharmacology… (1981) | — |

## Coverage

- **PubMed hits:** 135 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Butz_1981.pdf` | Butz RF et al., Radioimmunoassay and pharmacokinetic pr…, The Journal of pharmacology… (1981) | popPK | 9 | not captured | [6785419](https://pubmed.ncbi.nlm.nih.gov/6785419) | The study reports quantitative PK parameters (half-life, bioavailability, peak levels) for bupropion in dogs, but specific clearance and volume values are not explicitly listed in the text. |
| `Wang_2006.pdf` | Wang JS et al., Population pharmacokinetic analysis of…, Psychopharmacology (2006) | popPK | 8 | [10.1007/s00213-005-0209-y](https://doi.org/10.1007/s00213-005-0209-y) | [16283256](https://pubmed.ncbi.nlm.nih.gov/16283256) | The study is a population PK analysis in mice involving bupropion, but the provided evidence only contains qualitative interaction results (fold-changes in AUC) and lacks specific numeric PK parameter values (CL, V, ka) for bupropion. |

<sub>queue written 2026-09-11T23:58:33.995078+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wang_2006 | relevant | 8 | 2 | The study is a population PK analysis in mice involving bupropion, but the provided evidence only contains qualitative interaction results (fold-changes in AUC) and lacks specific numeric PK parameter values (CL, V, ka) for bupropion. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_bupropion`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
